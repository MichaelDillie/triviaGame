$(document).ready(function () {
    var startPage = $(".game-start-page");
    var questionOne = $("#q-1");
    var questionTwo = $("#q-2");

    var timeLeft = 10;
    var intervalId;


    $("#start-game-btn").click(function() {
        startPage.hide();
        questionOne.show();
        // timmer();
    });

    $(".answers").click(function() {
        var test = $(this).attr("data-answervalue").val();
        console.log(test);
    })

    function timmer() {
        intervalId = setTimeout(decrement, 1000);
    }
    function decrement() {
        timeLeft--;
        console.log(timeLeft);
        $("#time-left-num").text(timeLeft);
        timmer();
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