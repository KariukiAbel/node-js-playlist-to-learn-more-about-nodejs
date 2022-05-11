const express = require('express');

// setting up our express app
const app = express()

// when templates are requested, by default they will be found
 // at the views folder according to ejs
app.set('view engine', 'ejs')

app.get('/', (req,res)=>{
  // res.send('This is the homepage')
  var index = '../index.html'
  res.sendFile(index)
})

app.get('/contact', (req,res)=>{
// res.send('This is the contact page')
res.sendFile('../contact.html')
})

app.get('/profile/:id', (req,res)=>res.send('You request to see the profile with the id of ' + req.params.id))

app.get('/profile/:name', (req,res)=> {
  // res.send('You request to see the profile with the name of ' + req.params.name)
// rendering the profile.ejs view in views folder
var data ={
  age:24,
  job: 'Software developer and engineer'
}
res.render('profile', {person: req.params.name, data})
})

app.listen(3000)
