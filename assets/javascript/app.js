// Start Button on click 
$('#start-game').on('click', function () {
    console.log('the game has begun')
    $('#start-game').hide();
    showGame();
    countdownTimer();
});

// Certain features of the game will remain hidden until the game starts such as: questions, answers, and the submit button.
$('.display-results').hide();
$('.quest').hide();
$('.questions').hide();
$('.get-answers').hide();

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
    $('.game-questions-1').show();
    $('.game-questions-2').show();
    $('.game-questions-3').show();
    $('.game-questions-4').show();
    $('.game-questions-5').show();
    $('.questions').show();
    $('.get-answers').show();
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
        // ('#timer').html(" " + number + " " + "second");
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
        $('#countdown').hide();
        $('.questions').hide();
        
    }

    // Done Button
    $('.get-answers').on('click', function () {
        console.log("finish");
        displayResults();

    });

    // Function to display the results of the game
    function displayResults() {
        console.log("new page");
        $('.display-results').show();
        unanswered = (5 - (correctCount + wrongCount));
        $('#correct-score').text("Correct Answers:" + " " + correctCount);
        $('#wrong-score').text("Wrong Answers:" + " " + wrongCount);
        $('#unanswered').text("Unanswered:" + " " + unanswered);
    }



    $('input[type=radio]').on('change', function () {
        console.log("You won!")
        console.log($('input[type=radio]:checked').length)
        correctCount = $('input[value=correct]:checked').length;
        wrongCount = $('input[value=wrong]:checked').length;
        unanswered = (5 - (correctCount + wrongCount));
    })
};


