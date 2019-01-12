const { createServer } = require("http")

const PORT = process.env.PORT || 8080

createServer((req, res) => {
  res.end(`${html}`)
}).listen(PORT)

const html = `
<html>
  <body>
    <h1>hello world</h1>
  </body>
</html>
`
