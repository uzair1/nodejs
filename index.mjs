import express from 'express';

//const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello World! this is all about (ABOUT)')
  })
  

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`)
})