const express = require('express')
const app = express()
const routes = require('./routes')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(session({ secret: 'keyboard warrior' }))
app.use('/', express.urlencoded({ extended: false }))
app.use('/', routes)

app.listen(3000, () => console.log('Running on port 3000'))