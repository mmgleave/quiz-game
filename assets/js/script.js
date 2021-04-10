// hide questions content before quiz begins
window.onload = function () {
    document.getElementById("main-container").style.display = "none";
}

// questions array
var questionsArray = [
    {
        q: "What is my favorite color?",
        a: {
            a: "Red",
            b: "Green",
            c: "Blue",
            d: "Gray",
            correct: "Gray"
        },
    },
    {
        q: "What is my favorite movie?",
        a: {
            a: "In Bruges",
            b: "Pretty Woman",
            c: "The Mighty Ducks",
            d: "Star Trek",
            correct: "In Bruges"
        }
    },
    {
        q: "What is my favorite food?",
        a: {
            a: "Pizza",
            b: "B",
            c: "C",
            d: "D",
            correct: "Pizza"
        }
    }
];


$("#btn-start").on('click', function () {
    quizBegin();
});


// score variable
var score = 0;

var currentQ = 0;

var selectedAnswer = "";
console.log(selectedAnswer);

// main quiz function (when start button is clicked)
var quizBegin = function () {

    for (i = 0; i < questionsArray.length; i++) {
        // display question main-container
        document.getElementById("main-container").style.display = "block";

        // display question 
        $("#question-text").text(questionsArray[currentQ].q);

        $("#btn-ans1").text(questionsArray[currentQ].a.a);
        $("#btn-ans2").text(questionsArray[currentQ].a.b);
        $("#btn-ans3").text(questionsArray[currentQ].a.c);
        $("#btn-ans4").text(questionsArray[currentQ].a.d);
    };
    
    verifyAnswer();
};

var verifyAnswer = function () {
    // selected answer
    $(".answer-btn").on("click", function () {
        selectedAnswer = $(this).text();
        console.log(selectedAnswer);
        console.log(questionsArray[currentQ].a.correct);
        if (selectedAnswer === questionsArray[currentQ].a.correct) {
            console.log("CORRECT");
            currentQ++;
            score++;
            $("#score-value").text(score);
        } else {
            currentQ++;
            console.log("INCORRECT");
            $("#score-value").text(score);
        }
        selectedAnswer = "";

        if(currentQ < questionsArray.length) {
        // display question 
        $("#question-text").text(questionsArray[currentQ].q);

        $("#btn-ans1").text(questionsArray[currentQ].a.a);
        $("#btn-ans2").text(questionsArray[currentQ].a.b);
        $("#btn-ans3").text(questionsArray[currentQ].a.c);
        $("#btn-ans4").text(questionsArray[currentQ].a.d);
        } else {
            endQuiz();
        }
    });
};

var endQuiz = function() {
    document.getElementById("main-container").style.display = "none";
}
