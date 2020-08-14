const fs = require('fs')
let {readFile, writeFile} = require("./fs-utils")

const getUser = () => {
    return readFile('users.json')
}

const addUser = async () => {
    let users = await getUser()
    users.push({name: 'Masha', id: 3})
    return writeFile('users.json', users)


}

exports.getUser = getUser
exports.addUser = addUser;


