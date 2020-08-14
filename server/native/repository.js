const fs = require('fs')
let {readFile, writeFile} = require("./fs-utils")

const getUser = () => {
    return readFile('users.json')
}

const addUser = async (name) => {
    let users = await getUser()
    users.push({name: 'name', id: Date.now().toString()})
    return writeFile('users.json', users)


}

exports.getUser = getUser
exports.addUser = addUser;


