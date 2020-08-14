const {addUser, getUser} = require("../native/repository");
const {usersRouter} = require("./users-router.Express.js");

const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
const port = 3333


app.use('/users', usersRouter)

app.use((req, res) => {
    res.send(404)
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
