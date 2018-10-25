const router = require('express').Router()
const user = require('./user')
const projects = require('./project')

router.get('/', (req, res) => { res.render('pages/home') })
router.use('/user', user)
router.use('/projects', projects)

module.exports = router