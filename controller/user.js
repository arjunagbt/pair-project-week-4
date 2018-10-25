const crypto = require('crypto')
const Model = require('../models')

class UserController {
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
  }

  static loginForm(req, res) {
    res.render('pages/user/login')
  }

  static login(req, res) {
    // res.send(req.body)
    Model.User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (user.password === crypto.createHmac('sha256', user.salt).update(req.body.password).digest('hex')) {
          req.session.user = { id: user.id, email: user.email, full_name: user.full_name, balance: user.balance }
          res.send(req.session)
        } else {
          res.send('password salah')
        }
      })
      .catch(err => res.send(err))
  }
}

module.exports = UserController