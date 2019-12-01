$(document).ready(function () {

    // when the game start: questions, the timer, and answers are hidden

    $('.countdown').hide();
    $('.quest').hide();
    $('.display-results').hide();

    //the game will start at 60 seconds
    var number = 60;
    var intervalID;
    var correctCount = 0;
    var wrongCount = 0;
    var unanswered = 0;

    //Functions
    function showResults() {
        $('.countdown').show();
        $('.quest').show();
        $('.get-answers').show();
        $('display-results').show();
    }

    function countdownTimer() {
        intervalId = setInterval(decrement, 1000);
    }
    $('.form-check-input').on('click', function () {
        console.log($(this))
    })
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
            console.log("You won!")
            correctCount = $('input[value=correct]:checked').length;
            wrongCount = $('input[value=wrong]:checked').length;
            unanswered = (8 - (correctCount + wrongCount));
        })
    };
})

