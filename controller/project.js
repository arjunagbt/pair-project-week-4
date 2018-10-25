const Model = require('../models')

class ProjectController {
    static showProjects(req, res) {
        Model.Project.findAll({
            include: Model.User,
            order: [['id', 'ASC']]
        })
        .then(data=>{
            res.render('pages/projects/list', {
                projects: data
            })
            //res.send(data)
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static projectDetails(req,res){
        Model.Project.findOne({
            where:{
                id: req.params.id
            },
            include: Model.User
        })
        .then(data=>{
            res.render('pages/projects/details', {
                data: data
            })
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static addProject(req,res){
        res.render('pages/projects/addproject')
    }
}

module.exports = ProjectController