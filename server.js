var express = require('express');
var app = express();
var serveStatic = require('serve-static');
var walmart = require('walmart')(process.env.WALMART_API_KEY);

app.use(serveStatic('public', {'index': ['index.html']}))

app.get('/api/product/:id', function (req, res) {
  walmart.getItem(req.params.id).then(function(result){
    res.send(result);
  })
});

app.get('/api/upc/:upc', function (req, res) {
  walmart.getItemByUPC(req.params.upc).then(function(result){
    res.send(result);
  })
});

var port = process.env.PORT || 3000;
console.log("Listening on http://127.0.0.1:" + port + "/");
app.listen(port);
