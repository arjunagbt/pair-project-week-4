const router = require('express').Router()
const Controller = require('../controller')
const isLogin = require('../middlewares/isLogin')

router.get('/', isLogin, Controller.user.dashboard)

router.get('/signup', Controller.user.signUpForm)
router.post('/signup', Controller.user.signUp)

router.get('/login', Controller.user.loginForm)
router.post('/login', Controller.user.login)

router.post('/logout', Controller.user.logout)

router.get('/add-balance', isLogin, Controller.user.addBalanceForm)
router.post('/add-balance', isLogin, Controller.user.addBalance)

router.get('/withdraw-balance', isLogin, Controller.user.withdrawBalanceForm)
router.post('/withdraw-balance', isLogin, Controller.user.withdrawBalance)

module.exports = router
