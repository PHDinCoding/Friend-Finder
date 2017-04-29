var path = require('path');

module.exports = function(app)
{
    app.get('/api/friends', function(req, res)
    {
        console.log(res);
        res.send("From API Friends");
    });

    app.post('/api/friends', function(req,res)
    {
        res.send("Posting");
    });
} 
