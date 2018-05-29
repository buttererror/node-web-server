const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
   // res.send("<h1>hello Express</h1>");
   res.send({
      name: "Mahmoud",
      likes: [
          "Ping Pong",
          "adventure"
      ]
   });
});

app.get('/about', (req, res) => { // handler callback when make a request to this path
   res.send("About page");
});

app.get('/bad', (req, res) => {
   res.send({
      errorMessage: "unable to fulfilled you data"
   });
});

app.listen(3000, () => {
   console.log("staring server on port 3000");
});