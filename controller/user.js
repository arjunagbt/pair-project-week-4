const crypto = require('crypto')
const Model = require('../models')

class UserController {
  static dashboard(req, res) {
    let fundedProjects = Model.ProjectUser.findAll({
      include: Model.Project,
      where: { funder_id: req.session.user.id }
    })
    let ownedProjects = Model.Project.findAll({
      where: { owner_id: req.session.user.id }
    })
    Promise.all([fundedProjects, ownedProjects])
      .then(([fundedProjects, ownedProjects]) => {
        // res.send([fundedProjects, ownedProjects])
        res.render('pages/user/index', { user: req.session.user, fundedProjects, ownedProjects })
      })
      .catch(err => res.render(error, { error: err }))
  }

  static signUpForm(req, res) {
    // res.send('sign up disini')
    res.render('pages/user/signup')
  }

  static signUp(req, res) {
    // res.send(req.body)
    let salt = crypto.randomBytes(256).toString('hex')
    let passwordHash = crypto.createHmac('sha256', salt).update(req.body.password).digest('hex')
    Model.User.create({
      full_name: req.body.full_name,
      email: req.body.email,
      salt: salt,
      password: passwordHash
    })
      .then(user => {
        res.redirect('/user')
      })
      .catch(err => res.render(error, { error: err }))
  }

  static loginForm(req, res) {
    res.render('pages/user/login')
  }

  static login(req, res) {
    // res.send(req.body)
    Model.User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (user && user.password === crypto.createHmac('sha256', user.salt).update(req.body.password).digest('hex')) {
          req.session.user = { id: user.id, email: user.email, full_name: user.full_name, balance: user.balance }
          res.redirect('/user')
        } else {
          throw new Error('Username or password wrong')
        }
      })
      .catch(err => res.render('error', { error: err }))
  }

  static logout(req, res) {
    delete req.session.user
    res.redirect('/user/login')
  }

  static addBalanceForm(req, res) {
    // if (!req.session.user) res.redirect('/user/login')
    // else {
    res.render('pages/user/add-balance', { user: req.session.user })
    // }
  }

  static addBalance(req, res) {
    Model.User.findById(req.session.user.id)
      .then(user => {
        user.balance = Number(user.balance) + Number(req.body.balance)
        req.session.user.balance = user.balance
        return user.save()
      })
      .then(user => {
        res.redirect('/user')
      })
      .catch(err => res.render(error, { error: err }))
  }

  static withdrawBalanceForm(req, res) {
    res.render('pages/user/withdraw-balance', { user: req.session.user })
  }

  static withdrawBalance(req, res) {
    if (!req.session.user) res.redirect('/user/login')
    else {
      Model.User.findById(req.session.user.id)
        .then(user => {
          if (Number(user.balance) < Number(req.body.balance)) {
            throw new Error(`You don't have enough in your account`)
          } else {
            user.balance = Number(user.balance) - Number(req.body.balance)
            req.session.user.balance = user.balance
            return user.save()
          }
        })
        .then(user => {
          res.redirect('/user')
        })
        .catch(err => res.render(error, { error: err }))
    }
  }
}

module.exports = UserController