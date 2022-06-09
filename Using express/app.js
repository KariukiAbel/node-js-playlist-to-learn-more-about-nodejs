const express = require('express');
var path = require('path');

// setting up our express app
const app = express()

// when templates are requested, by default they will be found at the views folder according to ejs
//set directory to contain the template ('views')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// using middlewares and static files
app.use('/assets', express.static('assets'))

// old way of rendering html files
// app.get('/', (req, res) => {
//     // res.send('This is the homepage')
//     res.sendFile('/home/nabesh/AtomProjects/node js/node js playlist/index.html')
// });
//
// app.get('/contact', (req, res) => {
//     // res.send('This is the contact page')
//     res.sendFile('/home/nabesh/AtomProjects/node js/node js playlist/contact.html')
// });
//
// app.get('/profile/:id', (req,res)=>res.send('You request to see the profile with the id of ' + req.params.id))


// new way of rendering ejs files
app.get('/', (req,res)=>{
  res.render('index')
})

app.get('/contact', (req,res)=>{
  res.render('contact')
})


app.get('/profile/:name', (req, res) => {
    // res.send('You request to see the profile with the name of ' + req.params.name)
    const data = {
        age: 24,
        job: 'Software developer and engineer',
        hobbies: ['eating', 'sleeping', 'coding', 'traveling', 'reading', 'driving']
      }

    res.render('profile', { person: req.params.name, data })
});

app.listen(3000);
