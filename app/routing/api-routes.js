var path = require('path');
var fs = require('fs');

module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        console.log(res);
        res.send("From API Friends");
    });

    app.post('/api/friends', function (req, res) {
        res.send("Posting");
    });

    
    app.get('/api/friends/collectdata', function (req, res) {

        // var req_userdata = req.query.Test;
        // var req_userdata = req.query;
        // userdata = JSON.parse( req_userdata );

        // console.log(req.query.userdata);

        var msg = JSON.parse(req.query.userdata);
        console.log(msg);
        // console.log(msg.score[0]);
        console.log("This is just Name arry: " + msg.name);

        var content = [];
        var minDiffObj = {
            name: "",
            score: 999999
        };
        
        var readData = JSON.parse(fs.readFileSync('app/data/surveyData.json', 'utf8'));

        //THIS IS RIDICULOUS!!!! I HATED THIS HW!!
        content =  readData;
        console.log("THIS IS THE CONTENT LENGTH: "+content.length);
        for (var i = 0; i < content.length; i++) {
                var currentScore = content[i].score;
                var totalDiff = 0;
                for (var j = 0; j < currentScore.length; j++) {
                    totalDiff += Math.abs(msg.score[j] - currentScore[j]);
                }
                if (totalDiff < minDiffObj.score) {
                    minDiffObj.name = content[i].name;
                    minDiffObj.score = totalDiff;
                }
            }


            content.push(msg);
            console.log(content);
            console.log("This is the TOTAL DIFFERENCE: "+totalDiff)

            var writeData = fs.writeFileSync('app/data/surveyData.json', JSON.stringify(content));
            

        // fs.readFile('app/data/surveyData.json', "utf8" , function read(err, data) {
        //     if (err) 
        //     {
        //         throw err;
        //     }
        //     // console.log("This is the DATA: "+data);
            
        //     content = JSON.parse( data );
        //     console.log("This is content Length: "+content[0].score);

            

        //     // Invoke the next step here however you like
        //     // console.log(content[0].score[0]);



        //     for (var i = 0; i < content.length; i++) {
        //         var currentScore = content[i].score;
        //         var totalDiff = 0;
        //         for (var j = 0; j < currentScore.length; j++) {
        //             totalDiff += Math.abs(msg.score[j] - currentScore[j]);
        //         }
        //         if (totalDiff < minDiffObj.score) {
        //             minDiffObj.name = content[i].name;
        //             minDiffObj.score = totalDiff;
        //         }
        //     }


        //     content.push(msg);
        //     console.log(content);
        // });

        
        var newContent = JSON.stringify(content);
        // fs.writeFile("app/data/surveyData.json", msg , function(err)
        // {
        //     if(err) 
        //     {
        //         return console.log(err);
        //     }

        // });
         var test = JSON.stringify( content );
         console.log("This is the test LOG: "+test);
         

        fs.writeFile("app/data/surveyData.json", test , function(err) 
        {
            if(err) 
            {
                return console.log(err);
            }

                console.log("The file was saved!");

                
        }); 



        res.send(minDiffObj);

    });

} 
