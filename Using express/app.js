const express = require('express');

// setting up our express app
const app = express()

app.get('/', (req,res)=>{
  // res.send('This is the homepage')
  var index = '../index.html'
  res.sendFile(index)
})

app.get('/contact', (req,res)=>{
// res.send('This is the contact page')
res.sendFile('../contact.html')
})

app.get('/profile/:id', (req,res)=> res.send('You request to see the profile with the id of ' + req.params.id))

app.listen(3000)
