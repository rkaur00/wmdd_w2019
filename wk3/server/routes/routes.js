const { createServer } = require("http")

const PORT = process.env.PORT || 8080

createServer((req, res) => {
    switch (req.url) {
        case "/":
            res.end(home)
            break
        case "/about":
            res.end(about)
            break
        case "/api/jackie":
            res.end(JSON.stringify(apiEndPoint))
            break
        default:
            res.statusCode = 404
            res.end("Oops! Page not found")
    }
}).listen(PORT)

const home = `
<html>
  <body>
    <h1>home page</h1>
    <a href="about">about page</a>
  </body>
</html>
`

const about = `
<html>
  <body>
    <h1>about page</h1>
    <a href="/">home page</a>
  </body>
</html>
`

const apiEndPoint = {
    name: "Jackie",
    age: "32"
}