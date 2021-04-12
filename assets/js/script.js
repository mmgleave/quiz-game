// container variables
var mainContainer = document.getElementById("main-container");
var resultsContainer = document.getElementById("results-container");
var highScoresContainer = document.getElementById("high-scores-container");
var startContainer = document.getElementById("start-container");

// timer variable
var timer = document.getElementById("timer-value");
var counter = 100;

// score variable
var score = 0;

// current question variable
var currentQ = 0;

// current key-id
var currentKeyId = 0;

// selected answer variable
var selectedAnswer = "";

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

// hide content before quiz begins
window.onload = function () {
    mainContainer.style.display = "none";
    resultsContainer.style.display = "none";
    highScoresContainer.style.display = "none";
};

var quizTimerStart = function(){
    var countdown = function (){
        timer.textContent = "Time Remaining: " + counter;
        counter--;
    };
    var startCountdown = setInterval(countdown, 1000);
        if(counter === 0){
            console.log("timer end");
            clearInterval(startCountdown);
        };
  
}

// start button event listener to hide start content, begin quiz, start countdown
$("#btn-start").on('click', function () {
    startContainer.style.display = "none";
    quizBegin();
    quizTimerStart();
});


// main quiz function (when start button is clicked)
var quizBegin = function () {
    // set current question to 0
    currentQ = 0;

    // set current score display to 0
    score = 0;
    $("#score-value").text("Current Score: " + 0);

    // display question main-container
    document.getElementById("main-container").style.display = "block";

    // display question 
    $("#question-text").text(questionsArray[currentQ].q);

    $("#btn-ans1").text(questionsArray[currentQ].a.a);
    $("#btn-ans2").text(questionsArray[currentQ].a.b);
    $("#btn-ans3").text(questionsArray[currentQ].a.c);
    $("#btn-ans4").text(questionsArray[currentQ].a.d);
    
    // verify answer function
    verifyAnswer();
};

// verify answer function to compare selected ansewr with correct
var verifyAnswer = function () {
    // selected answer
    $(".answer-btn").on("click", function () {
        selectedAnswer = $(this).text();
        if (selectedAnswer === questionsArray[currentQ].a.correct) {
            currentQ++;
            score++;
            $("#score-value").text("Current Score: " + score);
        } else {
            currentQ++;
            counter = counter - 10;
            $("#score-value").text("Current Score: " + score);
        }
        selectedAnswer = "";
        console.log(currentQ);

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

// end quiz function (hide main, show results and final score)
var endQuiz = function() {
    mainContainer.style.display = "none";
    resultsContainer.style.display = "block"
    document.getElementById("final-score").textContent = "Your final score is: " + score;
};

// high scores variables
var submitScoreBtn = document.getElementById("submit-score");
var highScoresList = document.getElementById("high-scores-list");


// submit score button event listener
submitScoreBtn.onclick = (function(){
    addScore();
    showHighScores();
});

// function to hide all other content and show high scores
var showHighScores = function (){
    startContainer.style.display = "none"
    mainContainer.style.display = "none";
    resultsContainer.style.display = "none";
    highScoresContainer.style.display = "block";
};

// add p element to high scores page
var addScore = function(){
    var newUserResults = document.createElement("p");
    newUserResults.textContent = "Initials: " + document.getElementById("user-initials").value + " | Score: " + score;
    highScoresList.appendChild(newUserResults);
    localStorage.setItem(currentKeyId, newUserResults.textContent);
    currentKeyId++;  
};

// high scores click event listener
var highScoresLink = document.getElementById("high-scores-link");

highScoresLink.onclick = function(){
    showHighScores();
};