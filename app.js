
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sign-in', (req, res) => {
  res.send('login success!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})