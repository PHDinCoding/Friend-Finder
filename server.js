var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(express.static("/routing"));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);



// app.get('/api/friends', function(req, res)
//     {
//         console.log(res);
//         res.send("From API Friends");
//     });

//     app.post('/api/friends', function(req,res)
//     {
//         res.send("Posting");
//     });

app.listen(3000, function()
{
    console.log("Listening on PORT: " + PORT);
});



