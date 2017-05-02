var path = require('path');
var express = require('express');
var app = express();

// require('./../data/friends.js');

// app.listen(3000);

module.exports = function(app) {

app.use(express.static('app'));
// app.use(express.static('data'));
// app.use(express.static('./app/data/surveyData.json'));

app.get('/survey', function (req,res)
{
    console.log(__dirname + '/../public/survey.html');
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
});

app.use('/', function(req,res)
{
    console.log(__dirname + '/../public/home.html');
    res.sendFile(path.join(__dirname + '/../public/home.html'));
});

}
