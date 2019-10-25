const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('./'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

app.listen(port);
console.log(`Now gloriously listening on port ${port}`);