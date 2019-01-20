const got = require('got')
const { createServer } = require('http')
const PORT = process.env.PORT || 8080

createServer(async (req, res) => {
    try {
        const resData = await got('https://reqres.in/api/users/2')
        res.end(resData.body)
    } catch (error) {
        console.log(error)
    }
}).listen(PORT)