const fs = require('fs')

exports.readFile = (filePath) => {
    const promise = new Promise((resolve, reject) => {
            fs.readFile(filePath,
                function (err, buf) {
                    if (err) reject(err)
                    resolve(JSON.parse(buf.toString()))
                })
        }
    )
    return promise
}



exports.writeFile = (filePath, data) => {
    return new Promise((res, rej) => {
            fs.writeFile(filePath, JSON.stringify(data),
                (err) => {
                    if (err) rej(err)
                    res()
                });
        }
    )
}
