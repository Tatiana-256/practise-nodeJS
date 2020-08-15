const {addUser, getUser} = require("../native/repository");


const express = require('express')
const usersRouter = express.Router()

usersRouter.use(function (req, res, next) {
    console.log('%s %s %s', req.method, req.url, req.path)
    next()
})


usersRouter.get('/', async (req, res) => {
    let users = await getUser()

    if (!!req.query.search) {
        users = users.filter(u => u.name.indexOf(req.query.search) > -1)
    }

    res.send(users)
})

usersRouter.get('/:id', async (req, res) => {
    let userId = req.params.id
    let users = await getUser()
    let user = users.find(u => u.id == userId)
    if (user) {
        res.send(user)
    } else
        res.send(404)
})


usersRouter.post('/', async (req, res) => {
    let name = req.body.name
    let result = await addUser(name)
    res.send('ok')
})

exports.usersRouter = usersRouter

