<<<<<<< HEAD
const express = require('express')
const app = express()
const routes = require('./routes')
const port = 8080

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use('/', routes)

app.listen(port, () =>{
    console.log(`app listening on port ${port}`)
})
=======
const express = require('express')
const app = express()
const routes = require('./routes')

app.set('view engine', 'ejs')
app.use('/', express.urlencoded({ extended: false }))
app.use('/', routes)

app.listen(3000, () => console.log('Running on port 3000'))
>>>>>>> 09dc0b2cc3c72b817f0fd0efbb539fabf687a8fb
