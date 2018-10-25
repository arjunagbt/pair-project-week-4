<<<<<<< HEAD
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
=======
const router = require('express').Router()
const user = require('./user')

router.use('/user', user)

>>>>>>> 09dc0b2cc3c72b817f0fd0efbb539fabf687a8fb
module.exports = router