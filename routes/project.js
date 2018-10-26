const router = require('express').Router()
const Controller = require('../controller')
const multer = require('multer');
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, callback) {  
            callback(null, file.originalname);
    }
});
const upload = multer({
    storage:storage
    
}); 

router.get('/', Controller.project.showProjects)
router.get('/details/:id', Controller.project.projectDetails)
router.get('/add', Controller.project.addProjectGet)
router.post('/add', upload.array('projectpic', 10), Controller.project.addProjectPost)
router.get('/edit/:id', Controller.project.editProjectGet)
router.post('/edit/:id', Controller.project.editProjectGet)
router.post('/fund/:idProject/:idUser', Controller.project.fundProject)
router.get('/delete/:id', Controller.project.deleteProject)
module.exports = router