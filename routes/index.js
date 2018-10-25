const router = require('express').Router()
const user = require('./user')
const projects = require ('./project')

router.get('/', (req,res) =>{
    res.send('ini homepage')
})
router.use('/user', user)
router.use('/projects', projects)

module.exports = router