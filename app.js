const express = require('express')
const app = express()
const port = process.env.PORT || 4000
app.get('/', (req, res) => res.send("hello world"))
// app.post('/webhook', (req, res) => res.sendStatus(200))
app.listen(port)