const Model = require('../models')

class ProjectController {
    static showProjects(req, res) {
        Model.Project.findAll({
            include: Model.User,
            order: [['id', 'ASC']]
        })
            .then(data => {
                res.render('pages/projects/list', {
                    projects: data
                })
                //res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
    static projectDetails(req, res) {
        Model.Project.findOne({
            where: {
                id: req.params.id
            },
            include: Model.User
        })
            .then(data => {
                res.render('pages/projects/details', {
                    data: data,
                    session: req.session.user
                })
                //res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
    static addProjectGet(req, res) {
        res.render('pages/projects/addproject')
    }
    static addProjectPost(req, res) {
        if (req.session.user) {
            Model.Project.create({
                name: req.body.name,
                description: req.body.description,
                nominal_needed: req.body.nominal,
                owner_id: req.session.user.id
            })
                .then(data => {
                    res.redirect(`/projects/details/${data.id}`)
                })
                .catch(err=>{
                    res.send(err)
                })
        } else {
            res.send('Must Login First to Add Project')
        }
    }
    static editProjectGet(req, res) {
        Model.Project.findOne({where:{id:req.params.id}})
        .then(data =>{
            res.render('pages/projects/editproject', {data:data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
    static editProjectPost(req, res) {
        Model.Project.findOne({where:{id:req.params.id}})
        .then(data =>{
            data.name = req.body.name
            data.description = req.body.description
            return data.save()
        })
        .then(()=>{
            res.redirect(`/projects/details/${req.params.id}`)
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = ProjectController