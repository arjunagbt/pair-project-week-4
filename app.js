<<<<<<< HEAD
const express = require('express')
const app = express()
const routes = require('./routes')

app.set('view engine', 'ejs')
app.use('/', express.urlencoded({ extended: false }))
app.use('/', routes)

app.listen(3000, () => console.log('Running on port 3000'))
=======
const express = require('express')
const app = express()
const routes = require('./routes')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(session({ secret: 'keyboard warrior' }))
app.use('/', express.urlencoded({ extended: false }))
app.use('/', routes)

app.listen(3000, () => console.log('Running on port 3000'))
>>>>>>> ba8d5ac23ac4cbd77e1d4562805a0748ea0ac59a
