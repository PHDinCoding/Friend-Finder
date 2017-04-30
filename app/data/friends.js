function doSubmit()
{
    
    // var buttonData = $('#menu'+i).val();
        
        // score.push(buttonData);

    console.log("This is submit button!");
    userdata.name   =   $('#nameEntry').val().trim();
    userdata.photo  =   $('#imageEntry').val().trim();
    // userdata.score = 
    // userdata.scores =   $('#imageEntry').val().trim();
    // console.log(input);
    console.log(userdata);

    
        // console.log(buttonData);

        console.log(window.scoreData);
    
}


// function setValue(  )
// {
//         var selText = $(this).text();

//             console.log(selText);
//             alert("Value: " +selText);
//             scoreData.menu0 = selText;
//             alert("Value2: " +scoreData.menu0);
//             // var scoreValue = selText;

//             // alert("alert: " + selText);
//             // console.log(scoreValue);

            
//     }

    window.scoreData = {};

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
    
    
    // console.log(userdata);
    // console.log($('#questOne').val());

    if(!$('#nameEntry').val() || !$('#imageEntry').val())
    {

    
    console.log("Name or Image text is empty!");

    
    }else{

        var userdata = 
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


    
        
});

});
