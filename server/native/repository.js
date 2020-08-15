const fs = require('fs')
let {readFile, writeFile} = require("./fs-utils")


const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
});

const User =  mongoose.model('Users', userSchema);

const getUser = () => {
    User.find()
}

const addUser = async (name) => {
    let user = new User({name})
    return user.save()


}

exports.getUser = getUser
exports.addUser = addUser;


