const connectToMongoose = require("./db")
connectToMongoose();

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Snehal!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})