const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
   res.send("<h1>hello Express</h1>");
});

app.get('/about', (req, res) => { // handler callback when make a request to this path
   res.send("About");
});

app.get('/bad', (req, res) => {
   res.send({
      errorMessage: "unable to fulfilled you data"
   });
});

app.get('/index.html', (req, res) => {
   res.send(res.params);
});

app.listen(3000, () => {
   console.log("staring server on port 3000");
});