const express = require('express');
const app = express();
const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"));

let currentYear = new Date().getFullYear();

app.get('/', (req, res) => {
   // res.send("<h1>hello Express</h1>");
   // res.send({
   //    name: "Mahmoud",
   //    likes: [
   //        "Ping Pong",
   //        "adventure"
   //    ]
   // });
   res.render('home.hbs', {
      pageTitle: "Home page",
      currentYear,
      welcomeMessage: "Hello viewers"
   });
});

app.get('/about', (req, res) => { // handler callback when make a request to this path
   // res.send("About page");
   res.render('about.hbs', {
      pageTitle: "About page",
      currentYear
   });
});

app.get('/bad', (req, res) => {
   res.send({
      errorMessage: "unable to fulfilled you data"
   });
});

app.listen(3000, () => {
   console.log("staring server on port 3000");
});