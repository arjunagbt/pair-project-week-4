const router = require('express').Router()
const Controller = require('../controller')

router.get('/', (req, res) => {
  res.send('masuk user')
})

router.get('/signup', Controller.user.signUpForm)

module.exports = router