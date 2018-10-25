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
                res.render('error', {error: err})
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
                if (!data) throw new Error(`No project with id ${req.params.id}`)
                res.render('pages/projects/details', {
                    data: data,
                    session: req.session.user
                })
                //res.send(data)
            })
            .catch(err => {
                res.render('error', {error: err})
            })
    }
    static addProjectGet(req, res) {
        res.render('pages/projects/addproject')
    }
    static addProjectPost(req, res) {
        if (req.session.user) {
            //res.send(req.file)
            Model.Project.create({
                name: req.body.name,
                description: req.body.description,
                nominal_needed: req.body.nominal,
                owner_id: req.session.user.id,
                static: req.file.originalname
            })
                .then(data => {
                    res.redirect(`/projects/details/${data.id}`)
                })
                .catch(err => {
                    res.render('error', {error: err})
                })
        } else {
            res.redirect('/user/login')
        }
    }
    static editProjectGet(req, res) {
        Model.Project.findOne({ where: { id: req.params.id } })
            .then(data => {
                res.render('pages/projects/editproject', { data: data })
            })
            .catch(err => {
                res.render('error', {error: err})
            })
    }
    static editProjectPost(req, res) {
        Model.Project.findOne({ where: { id: req.params.id } })
            .then(data => {
                data.name = req.body.name
                data.description = req.body.description
                return data.save()
            })
            .then(() => {
                res.redirect(`/projects/details/${req.params.id}`)
            })
            .catch(err => {
                res.render('error', {error: err})
            })
    }
    static fundProject(req, res) {
        if (req.session.user.balance >= req.body.fund) {
            Model.ProjectUser.create({
                funder_id: req.params.idUser,
                project_id: req.params.idProject,
                nominal: req.body.fund
            })
                .then(data => {
                    return Model.Project.findOne({
                        where: {
                            id: data.project_id
                        }
                    })
                })
                .then(data => {
                    data.nominal_now += req.body.fund
                    return data.save()
                })
                .then(() => {
                    return Model.User.findOne({
                        where: {
                            id: req.params.idUser
                        }
                    })
                })
                .then(data => {
                    data.balance = Number(data.balance) - req.body.fund
                    req.session.user.balance = Number(req.session.user.balance) - req.body.fund
                    return data.save()
                })
                .then(() => {
                    res.redirect(`/projects/details/${req.params.idProject}`)
                })
                .catch(err => {
                    res.render('error', {error: err})
                })
        } else {
            res.send('not enough cash!')
        }
    }
    static deleteProject(req, res) {
        Model.Project.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                if (data.nominal_now>0 && data.nominal_now < data.nominal_needed) {
                    res.send(`You can't delete an ongoing project!`)
                } else {
                    return Model.Project.destroy({
                        where: {
                            id: req.params.id
                        }
                    })
                }
            })
            .then(() => {
                res.redirect('/projects')
            })
            .catch((err) => {
                res.render('error', {error: err})
            })
    }
}

module.exports = ProjectController