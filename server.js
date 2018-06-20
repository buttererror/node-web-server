const express = require('express');
const app = express();

const fs = require('fs');

const hbs = require('hbs');

let port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');



app.use((req, res, next) => {
   let now = new Date().toString();
   let log = `${now}: ${req.method} ${req.url}`;
   console.log(log);
   fs.appendFile('server.log', log + '\n', (err) => {
      if (err) console.log("Unable to append to server.log.");
   });
   next();
});

// app.get('/help.html', (req, res) => {
//    res.send("Hello World");
// });

// app.use((req, res, next) => {
//    res.render('maintenance.hbs');
// });

// app.use(express.static(__dirname + "/public"));


hbs.registerHelper('getCurrentYear', () => {
   return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
   return text.toUpperCase();
});



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
      welcomeMessage: "Hello viewers"
   });
});

// app.post('/leaderboard',(req,res) => {
//    res.send("Working");
// });

app.get('/about', (req, res) => { // handler callback when make a request to this path
   // res.send("About page");
   res.render('about.hbs', {
      pageTitle: "About page",
   });
});

app.get('/project', (req, res) => {
   res.render('project.hbs', {
      pageTitle: "Portfolio page here"
   })
});

app.get('/bad', (req, res) => {
   res.send({
      errorMessage: "unable to fulfilled you data"
   });
});

app.listen(port, () => {
   console.log(`staring server on port ${port}`);
});
