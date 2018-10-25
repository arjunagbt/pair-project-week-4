const router = require('express').Router()
const Controller = require('../controller')

router.get('/', (req, res) => {
  res.send('masuk user')
})

router.get('/signup', Controller.user.signUpForm)
router.post('/signup', Controller.user.signUp)

router.get('/login', Controller.user.loginForm)
router.post('/login', Controller.user.login)

module.exports = router