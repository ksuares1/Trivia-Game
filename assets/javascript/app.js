$(document).ready(function () {

    //the game will start at 60 seconds
    var number = 60;
    var intervalID;
    var correctCount = 0;
    var wrongCount = 0;
    var unanswered = 0;

    //Functions
    function showResults() {
        $('.get-answers').show();
        $('display-summary').show();
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
        function hide() {
            ('#countdown').hide();
            ('.questions').hide();
            ('#get-answers').hide();
        }

        // When the player clicks the shubmit button, it activates the on click function. 

        $('.game-answers').on('click', function () {
            displaySummary();
        });

        $('input[type=radio]').on('change', function () {
            correctCount = $('input[value=correct]:checked').length;
            wrongCount = $('input[value=wrong]:checked').length;
            unanswered = (8 - (correctCount + wrongCount));
        });

});
