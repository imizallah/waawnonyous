const express = require('express');
const path = require('path');
const app = express();
const ejs = require('ejs');
const port = process.env.PORT || 8000; 

  

// Setting up express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (request, response) => {
  response.send('About page');
});

app.get('/contact', (request, response) => {
  response.send('Contact page');
});


app.listen(port, () => console.log(`Server listening on port::: ${port}`));