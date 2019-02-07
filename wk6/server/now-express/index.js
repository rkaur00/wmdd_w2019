const express = require('express')

const app = new express()
app.use(express.json())

app.get('/', (req, res) => res.json({ name: "finn" }))

app.post('/name', (req, res) => {
  const user_name = req.body.name
  res.json({name: user_name})
})

app.listen()