var sequence = [];
var colorsSequence = [];
var userSequence = [];
var gameStarted = false;
var currentLevel = 0;

$(document).keypress(function (event) {
    if (!gameStarted) {
        gameStarted = true;
        nextSequence();
        $("body").removeClass("game-over");
    }


});

$(".btn").click(function () {
    console.log($(this).attr("id"));
    userSequence.push($(this).attr("id"));
    $(this).toggleClass("pressed");
    setTimeout(() => {
        $(this).toggleClass("pressed");
    }, 200);
    UserAnswer();
})


function nextSequence() {
    sequence.push(getRandomInt(4));
    console.log("sequence = " + sequence);
    console.log("currentLevel = " + currentLevel);
    animation(currentLevel);
    currentLevel += 1;
    $("h1").text("Level " + currentLevel);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function animation(i) {
    switch (sequence[i]) {
        case 0:
            $("#green").toggleClass("pressed");
            // console.log("#green");
            colorsSequence.push("green");
            setTimeout(() => {
                $("#green").toggleClass("pressed");
            }, 1000);
            break;
        case 1:
            $("#red").toggleClass("pressed");
            // console.log("#red");
            colorsSequence.push("red");
            setTimeout(() => {
                $("#red").toggleClass("pressed");
            }, 1000);
            break;
        case 2:
            $("#yellow").toggleClass("pressed");
            // console.log("#yellow");
            colorsSequence.push("yellow");
            setTimeout(() => {
                $("#yellow").toggleClass("pressed");
            }, 1000);
            break;
        case 3:
            $("#blue").toggleClass("pressed");
            // console.log("#blue");
            colorsSequence.push("blue");
            setTimeout(() => {
                $("#blue").toggleClass("pressed");
            }, 1000);
            break;

        default:
            break;
    }

    console.log("colorsSequence = " + colorsSequence);
}

function gameOver(params) {
    sequence = [];
    colorsSequence = [];
    userSequence = [];
    gameStarted = false;
    currentLevel = 0;
    $("h1").text("Game Over, Press Any Key To Restart ");
    $("body").addClass("game-over");
}



function UserAnswer(params) {
    console.log("userSequence = " + userSequence);
    console.log("colorsSequence = " + colorsSequence);
    if (userSequence[userSequence.length - 1] === colorsSequence[userSequence.length - 1]) {
        if (userSequence.length === colorsSequence.length) {
            console.log("right right");
            userSequence = [];
            setTimeout(() => {
                nextSequence();
            }, 2000);

        }
    } else {
        console.log("wrong");
        gameOver();
    }
}