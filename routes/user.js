<<<<<<< HEAD
const router = require('express').Router()

=======
const router = require('express').Router()
const Controller = require('../controller')

router.get('/', (req, res) => {
  res.send('masuk user')
})

router.get('/signup', Controller.user.signUpForm)

>>>>>>> 09dc0b2cc3c72b817f0fd0efbb539fabf687a8fb
module.exports = router