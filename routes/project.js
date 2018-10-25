const router = require('express').Router()
const Controller = require('../controller')

router.get('/', Controller.project.showProjects)
router.get('/details/:id', Controller.project.projectDetails)
router.get('/add', Controller.project.addProject)

module.exports = router