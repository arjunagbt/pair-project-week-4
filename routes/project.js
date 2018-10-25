const router = require('express').Router()
const Controller = require('../controller')

router.get('/', Controller.project.showProjects)
router.get('/details/:id', Controller.project.projectDetails)
router.get('/add', Controller.project.addProjectGet)
router.post('/add', Controller.project.addProjectPost)
router.get('/edit/:id', Controller.project.editProjectGet)
router.post('/edit/:id', Controller.project.editProjectGet)
module.exports = router