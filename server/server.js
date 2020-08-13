let http = require("http")
let {usersController} = require("./usersController")

let server = http.createServer((req, res) => {

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }


    switch (req.url) {
        case '/users':
            usersController(req, res)
            break
        case '/home':
            res.write("home")
            res.end()
            break

        default:
            res.write("not found")
            res.end()


    }
})

server.listen(4333)

console.log(http)
