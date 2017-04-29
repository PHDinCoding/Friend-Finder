$(document).ready(function() {

var questions = ["I like watching TV Shows", "I am a movie buff", "I play lots of sports", "I like playing video games",
                    "I own a pet", "I like to listen to music", "I am workoholic", "I am an outgoing person", "I like to read books",
                    "I love food from different culture"];

var userdata = {};

var populateSurvey = function()
{
     
    for (i = 0; i< questions.length; i++)
    {
    
       var myDropDown = '<div class="dropdown">'+
    '<button class="btn btn-primary dropdown-toggle" id="menu'+i+'"'+' type="button" data-toggle="dropdown">Choices'+
    '<span class="caret"></span></button>'+
    '<ul class="dropdown-menu" role="menu" aria-labelledby="menu1">'+
      '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">1 [Strongly Disagree]</a></li>'+
      '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">2</a></li>'+
      '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">3</a></li>'+
      '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">4</a></li>'+  
      '<li role="presentation"><a role="menuitem" tabindex="-1" href="#">5 [Strongly Agree]</a></li>'+   
        '</ul>'+
            '</div>';
        var survey = questions[i];
        
        
        $('#questions').append('<h3>'+survey+'</h3>');
        
        $('#questions').append(myDropDown);
        $('#questions').append('-----------------------');
        
        $('#questions').append('<p>');
       
    }

}
populateSurvey();


});