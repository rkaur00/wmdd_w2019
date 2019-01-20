const { createServer } = require("http")
const url = require('url')
const PORT = process.env.PORT || 8080

createServer((req, res) => {
  //console.log(req)
  const name = url.parse(req.url, true)
  if (name.query.name) {
    res.end(`hello ${name.query.name}`)
    console.log(name)
  } else {
    res.end("Hello!")
  }
}).listen(PORT)