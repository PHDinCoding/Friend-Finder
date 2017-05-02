






    var userdata = {};

$(document).ready(function() 
{

//I was thinking about automating the questions and using event handlers for storing in to object but ran in to issues of scoping. 

// var questions = ["I like watching TV Shows", "I am a movie buff", "I play lots of sports", "I like playing video games",
//                     "I own a pet", "I like to listen to music", "I am workoholic", "I am an outgoing person", "I like to read books",
//                     "I love food from different culture"];

//scoreData = [];


$('#submitButton').on("click", function() 
{
    console.log("This is submit button!");
    if(!$('#nameEntry').val() || !$('#imageEntry').val())
    {
        alert("Name or Image field is left blank.");
    // console.log("Name or Image text is empty!");
    
    }else{


        userdata = 
        {
            name: $('#nameEntry').val(),
            image: $('#imageEntry').val(),
            score: 
            [
                $('#questOne').val(),
                $('#questTwo').val(),
                $('#questThree').val(),
                $('#questFour').val(),
                $('#questFive').val(),
                $('#questSix').val(),
                $('#questSeven').val(),
                $('#questEight').val(),
                $('#questNine').val(),
                $('#questTen').val()
                
            ]
        };
    console.log(userdata);
    }

    $.ajax({
                type: "GET",
                url: "/api/friends/collectdata",
                // data:{ Test: "Hello"},
                // data:{ "userdata": JSON.stringify( userdata ) },
                data:{ userdata: JSON.stringify( userdata )    },
                // dataType: "text/html;charset=utf-8"
                dataType: "json"
                // ,success: function(msg,status) 
                //{
                //    console.log(msg);
                //    $("#nameOfDive").html(msg);

                //}
            }).done(function(data){
                // alert(data);
                alert("You Got Matched With: "+data.name +", And Your Compatibility Score is: "+" "+data.score);
                // $("#questions").html(data);
            } );;
    
        
});

 

});

// module.exports(userdata);
