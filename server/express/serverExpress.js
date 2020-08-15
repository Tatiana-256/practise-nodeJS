const {usersRouter} = require("./users-router.Express.js");


// set mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users', {useNewUrlParser: true})



// set express

const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

// cors
app.use(cors())
const port = 4412

// routing
app.use('/users', usersRouter)


// error
app.use((req, res) => {
    res.send(404)
})


// listen port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
