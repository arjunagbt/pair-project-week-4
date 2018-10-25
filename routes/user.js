const router = require('express').Router()
const Controller = require('../controller')

router.get('/', Controller.user.dashboard)

router.get('/signup', Controller.user.signUpForm)
router.post('/signup', Controller.user.signUp)

router.get('/login', Controller.user.loginForm)
router.post('/login', Controller.user.login)

router.post('/logout', Controller.user.logout)

router.get('/add-balance', Controller.user.addBalanceForm)
router.post('/add-balance', Controller.user.addBalance)

router.get('/withdraw-balance', Controller.user.withdrawBalanceForm)
router.post('/withdraw-balance', Controller.user.withdrawBalance)

module.exports = router
