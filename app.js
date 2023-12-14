const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sign-in', (req, res) => {
  res.send('login 123!');
});

app.post('/signup', (req, res) => {
  res.send("회원가입");
})

app.post('/post', (req, res) => {
  res.send('post!');
})

app.post('/paymetn', (req, res) => {
  res.send('post!');
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
