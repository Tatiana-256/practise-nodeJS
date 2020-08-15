let {addUser, getUser} = require("./repository")


const usersController = async (req, res) => {
    if (req.method === "POST") {
        await addUser()
        res.write('ok')
        res.end()

    } else {
        let users = await getUser()
        res.write(JSON.stringify(users))
        res.end()
    }
}

exports.usersController = usersController
