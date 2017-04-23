var express = require('express');
var parse = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000; 

app.listen(PORT, function()
{
console.log("Listening on PORT: " + PORT);
}) 