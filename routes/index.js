const router = require('express').Router()

const project = require('./project')
const user = require('./user')

router.get('/', (req,res)=>{
    res.send('ini homepage')
})

router.use('/projects', project)
router.use('/users', user)


// router.get('*', (req,res) =>{
//     res.send('page not found')
// })
module.exports = router