$(document).ready(function () {

    //Since the players should not see the answers before they play, lets hide them first. 
    ('.answers').hide();

    //the game will start at 60 seconds
    var number = 60;
    var intervalID;
    var correctCount = 0;
    var wrongCount = 0;
    var unanswered = 0;

    //Functions
    function showQuestions() {
        $("#countdown").show();
        $(".questions").show();
        $(".get-answers").show();
    }

    function countdownTimer() {
        intervalId = setInterval(decrement, 1000);
    }

    //Decrement function 
    function decrement() {
        number--;
        $('#timer').html('<span>' + number + '</span>');
        if (number === 1) {
            ('#timer').html('<span>' + number + '</span>');
        }
        else if (number === 0) {
            stop();
            hide();
            displaySummary();
        }
        
        //Function to hide questions and timer, after questions are answered. 
        function hide(){
            ('#countdown').hide(); 
            ('.questions').hide();
            ('#get-answers').hide();
        }
    
        // On click function for the start of the game

            $('.game-start').on('click', function(){

            }
    
});
