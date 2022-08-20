const express = require('express')
const path = require('path');
const app = express()

const port = process.env.PORT || 3000;
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// index.html
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, (err) => {
    if (err) {
      console.log('Error::', err);
    }
      console.log(`App listening on port ${port}`);
  });
