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
