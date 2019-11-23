$(document).ready(function() {

    //Since the players should not see the answers before they play, lets hide them first. 
    ('.answers').hide();
   
    //the game will start at 60 seconds
    var number= 60;
    var intervalID;
    var correctCount=0;
    var wrongCount=0;
    var unanswered=0;
    
//Functions
function showSummary(){
    (".get-answers").show();
}

});
