const Model = require('../models')

class UserController {
  static signUpForm (req, res) {
    // res.send('sign up disini')
    res.render('pages/user/signup')
  }
}

module.exports = UserController