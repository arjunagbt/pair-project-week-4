const express = require('express')
const app = express()
const routes = require('./routes')
const session = require('express-session')
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.use(session({ secret: 'keyboard warrior' }))
app.use('/', express.urlencoded({ extended: false }))
app.use('/', routes)

app.listen(port, () => console.log(`Running on port ${port}`))
