$(document).ready(function () {
    var startPage = $(".game-start-page");
    var questionOne = $("#q-1");
    var questionTwo = $("#q-2");

    var timeLeft = 10;
    var intervalId;


    $("#start-game-btn").click(function() {
        startPage.hide();
        questionOne.show();
        timer();
    });

    $(".answers").click(function() {
        var test = $(this).attr("data-answervalue");
        console.log(test);
        if(test == 3) {
            $("#correct").show();
            $(".answers").hide();
            $(".time-left").hide();
            timeStop();
        }
        else {
            $("#incorrect").show();
            $(".answers").hide();
            $(".time-left").hide();
            timeStop();
        }
    });

    function timer() {
        intervalId = setTimeout(decrement, 1000);
    }
    function decrement() {
        timeLeft--;
        $("#time-left-num").text(timeLeft);
        timer();
        if(timeLeft === 0) {
            $(".answers").hide();
            $("#out-of-time").show();
            $(".time-left").hide();
            timeStop();
        }
    }
    function timeStop() {
        clearTimeout(intervalId);
    }
});