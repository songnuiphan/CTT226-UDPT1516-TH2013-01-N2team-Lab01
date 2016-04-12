var express = require('express');
var app = express();


var ect = require('ect');
var routes = require('./routes');

var ectRenderer = ect({ watch: true, root: __dirname + '/views', ext : '.ect' });
app.set('view engine', 'ect');
app.engine('ect', ectRenderer.render);
app.use('/', routes);

app.listen(3000, function () {
  console.log('now listening on http://localhost:3000');
})
