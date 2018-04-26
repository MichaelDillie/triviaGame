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

    // console.log(questionList[0].answers[2]);


    var currentQuestion = 0;
    // Page Variables
    var landingPage = $(".landing-page");
    var questionsPage = $(".questions-page");
    // Start BTN
    var startGameBtn = $(".start-game-btn");
    // Question and Answers Variables
    var questionTitle = $(".question-title");
    var answerOne = $(".answer-1");
    var answerTwo = $(".answer-2");
    var answerThree = $(".answer-3");
    var answerFour = $(".answer-4");

    var test = $(".answer");

    // Satrts the game
    function startGame() {
        landingPage.hide();
        questionsPage.show();
        populate();
    }
    //  On click function
    startGameBtn.on("click", function () {
        startGame();
    });
    // Populate HTML funciton
    function populate() {
        questionTitle.append(questionList[currentQuestion].question);
        answerOne.append(questionList[currentQuestion].answers[0]);
        answerTwo.append(questionList[currentQuestion].answers[1]);
        answerThree.append(questionList[currentQuestion].answers[2]);
        answerFour.append(questionList[currentQuestion].answers[3]);
    }

    test.on("click", function () {
        console.log(test.val());
    });

});