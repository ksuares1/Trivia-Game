$(document).ready(function () {

    // when the game starts: questions, the timer, and answers are hidden
    $('.display-results').hide();
    $('#timer').hide();
    // $('.get-answers').hide();
    $('.questions').hide();

    //the game will start at 60 seconds
    var number = 60;
    var intervalID;
    var correctCount = 0;
    var wrongCount = 0;
    var unanswered = 0;

    //Functions
    function showGame() {
        $('#countdown').show();
        $('.quest').show();
        $('.game-questions').show();
        $('.questions').show();
        // $('.get-answers').hide();
        // $('.game-questions').hide();
        // $('.questions').hide();
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
        $('#timer').html(" " + number + " " + "seconds");
        if (number === 1) {
            ('#timer').html(" " + number + " " + "second");
        }
        else if (number === 0) {
            stop();
            hide();
            displayResults();
        }

        // Clear timer

        function stop() {
            clearInterval(intervalID);
        }

        //Function to hide the questions and timer, after questions are answered. 
        function hide() {
            ('#countdown').hide();
            ('.questions').hide();
            // ('#get-answers').hide();
        }

        // Function to display the results of the game
        function displayResults() {
            $('.display-results').show();
            unanswered = (5 - (correctCount + wrongCount));
            $('#correct-score').text("Correct Answers:" + " " + correctCount);
            $('#wrong-score').text("Wrong Answers:" + " " + wrongCount);
            $('unanswered').text("Unanswered:" + " " + unaswered);
        }
        // On Click events

        // Start Button on click 
        $('#start-game').on('click', function () {
            $('#start-game').hide();
            showGame();
            countdownTimer();
        });

        // Done Button
        $('#start-game').on('click', function () {
            $('#start-game').hide();
            hide();
            displayResults();

        });

        $('input[type=radio]').on('change', function () {
            console.log("You won!")
            correctCount = $('input[value=correct]:checked').length;
            wrongCount = $('input[value=wrong]:checked').length;
            unanswered = (5 - (correctCount + wrongCount));
        })
    };
})

