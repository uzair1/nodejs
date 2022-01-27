import express from 'express';

//const express = require('express')

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000

var posts = [
    { text: "some post 0"},
    { text: "some post 1"},
    { text: "some post 2"}
  ];


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/post/:id', (req, res) => {

  const id = Number(req.params.id);
  res.send(posts[id]);
})

app.get('/posts', (req, res) => {
  res.send(posts);
})

app.post('/post', (req, res) => {
  posts.push(req.body);
  res.send(`Your post is saved. Now we have ${posts.length}`);
})


app.get('/about', (req, res) => {
    res.send('Hello World! this is all about (ABOUT)')
  })
  

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})