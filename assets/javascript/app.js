$(document).ready(function () {
    var questionList = [{
            "question": "What dose DOM stand for",
            "answers": ["Digital Ohm Meter", "Do Octopus Meditate", "Document Object Model", "Dirty Old Man"],
            "correctAnswer": "Document Object Model"
        },
        {
            "question": "Is 1 === '1'",
            "answers": ["Yes", "No"],
            "correctAnswer": "No"
        },
        {
            "question": "Which of these is an anchor tag",
            "answers": ["<p>", "src=''", "<div>", "<a>"],
            "correctAnswer": "<a>"
        },
        {
            "question": "What dose API stand for",
            "answers": ["Application Programming Interface", "Academic Performance Index", "Alabama Polytechnic Institute", "American Paper Institute"],
            "correctAnswer": "Application Programming Interface"
        },
        {
            "question": "What dose color: change in CSS",
            "answers": ["font-size", "background color", "height", "text color"],
            "correctAnswer": "text color"
        }
    ];


    var currentQuestion = 0;
    // Timer Variables
    var timeLeft = 10;
    var intervalId;
    var answerTimeLeft = 5;
    var answerIntervalId;
    var timer = $(".timer");
    // Page Variables
    var landingPage = $(".landing-page");
    var questionsPage = $(".questions-page");
    var showAnswerWrapper = $(".show-answer-wrapper");
    // Start BTN
    var startGameBtn = $(".start-game-btn");
    // Question and Answers Variables
    var questionTitle = $(".question-title");
    var answerOne = $(".answer-1");
    var answerTwo = $(".answer-2");
    var answerThree = $(".answer-3");
    var answerFour = $(".answer-4");
    var answerRow = $("#answer-row");
    var showTheAnswer = $(".show-answer");
    // Placeholder for correct/incorrect condition
    var correctAnswer;
    var userAnswer;

    // Satrt game function
    function startGame() {
        landingPage.hide();
        questionsPage.show();
        populate();
        questionTimer();
    }
    //  On click that starts game
    startGameBtn.on("click", function () {
        startGame();
    });

    // **** TIMER FOR QUESTIONS ****
    // This function will call decrementQuestionTimer in 1 second when ran
    function questionTimer() {
        intervalId = setTimeout(decrementQuestionTimer, 1000);
        timer.text("Time left: " + timeLeft);
    }
    // Decrements timeLeft until 0
    function decrementQuestionTimer() {
        timeLeft--;
        questionTimer();
        if(timeLeft === 0) {
            outOfTime();
        }
    }
    // Stops the timer
    function stopTimer() {
        clearTimeout(intervalId);
    }

    // **** TIMER FOR SHOWING ANSWER ****
    // This function will call decrementAnswerTimer in 1 second when ran
    function showAnswerTimer() {
        answerIntervalId = setTimeout(decrementAnswerTimer, 1000);
    }
    // Decrements timeLeft until 0
    function decrementAnswerTimer() {
        answerTimeLeft--;
        showAnswerTimer();
        if(answerTimeLeft === 0) {
            stopAnswerTimer();
            depopulate();
            populate();
            timeLeft = 10;
            questionTimer();
            questionsPage.show();
            answerTimeLeft = 5;
        }
    }
    // Stops the timer
    function stopAnswerTimer() {
        clearTimeout(answerIntervalId);
    }

    // Populate HTML funciton
    function populate() {
        questionTitle.append(questionList[currentQuestion].question);
        answerOne.append(questionList[currentQuestion].answers[0]);
        answerTwo.append(questionList[currentQuestion].answers[1]);
        answerThree.append(questionList[currentQuestion].answers[2]);
        answerFour.append(questionList[currentQuestion].answers[3]);
        correctAnswer = questionList[currentQuestion].correctAnswer;
    }
    // Depopulate HTML funciton
    function depopulate() {
        questionTitle.empty();
        answerOne.empty();
        answerTwo.empty();
        answerThree.empty();
        answerFour.empty();
        showTheAnswer.empty();
    }
    function showAnswer() {
        showTheAnswer.append("The correct answer is " + correctAnswer);
    }

    // If time runs out
    function outOfTime() {
        stopTimer();
        stopAnswerTimer();
        showAnswer();
        currentQuestion++;
        questionsPage.hide();
        showAnswerWrapper.show();
        answerTimeLeft = 5;
        showAnswerTimer();
    }

    // On click that handels user guess
    answerRow.on("click", ".answer", function () {
        userAnswer = $(this).text();
        if (userAnswer === correctAnswer) {
            stopTimer();
            stopAnswerTimer();
            currentQuestion++;
            depopulate();
            populate();
            timeLeft = 10;
            questionTimer();
            answerTimeLeft = 5;
        } else {
            // show correct answer and start timer
            stopTimer();
            stopAnswerTimer();
            showAnswer();
            currentQuestion++;
            questionsPage.hide();
            showAnswerWrapper.show();
            answerTimeLeft = 5;
            showAnswerTimer();
        }
    });

});