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

// questions array (content found on https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS)
var questionsArray = [
    {
        q: "Inside which HTML element do we put the JavaScript?",
        a: {
            a: "<javascript>",
            b: "<scripting>",
            c: "<script>",
            d: "<js>",
            correct: "<script>"
        },
    },
    {
        q: "What is the correct JavaScript syntax to change the content of the HTML element with an id of 'demo'?'",
        a: {
            a: "document.getElement('p').innerHTML = 'Hello'",
            b: "#demo.innerHTML = 'Hello'",
            c: "document.getElementById('demo').innerHTML = 'Hello'",
            d: "document.getElementByName('p').innerHTML = 'Hello'",
            correct: "document.getElementById('demo').innerHTML = 'Hello'"
        }
    },
    {
        q: "Where is the correct place to insert a JavaScript?",
        a: {
            a: "It doesn't matter.",
            b: "The <body> section",
            c: "The <head> section",
            d: "None of these are correct",
            correct: "The <body> section"
        }
    },
    {
        q: "What is the correct syntax for referring to an external script called 'script.js'?",
        a: {
            a: "<script name='./script.js'>",
            b: "<script href='./script.js'>",
            c: "<script src='./script.js'>",
            d: "<script src='./script.js'>",
            correct: ""
        }
    },
    {
        q: "How do you write 'Hello World' in an alert box?",
        a: {
            a: "msg('Hello World')",
            b: "alert('Hello World')",
            c: "alertBox('Hello World')>",
            d: "msgBox('Hello World')",
            correct: "alert('Hello World')"
        }
    },
    {
        q: "How do you create a function in JavaScript?",
        a: {
            a: "function:myFunction()",
            b: "function = myFunction()",
            c: "function myFunction()",
            d: "function(myFunction)",
            correct: "function = myFunction()"
        }
    },
    {
        q: "How do you call a function named 'myFunction'?",
        a: {
            a: "myFunction()",
            b: "call myFunction()",
            c: "call function = myFunction()",
            d: "call:myFunction()",
            correct: "fmyFunction()"
        }
    },
    {
        q: "How do you write an IF statement in Javacript?",
        a: {
            a: "if i = 5",
            b: "if i = 5 then",
            c: "if (i === 5) then",
            d: "if (i === 5)",
            correct: "if (i === 5)"
        }
    },
    {
        q: "What is the correct syntax to use for an OR inside an if statement?",
        a: {
            a: "OR",
            b: "**",
            c: "&&",
            d: "||",
            correct: "||"
        }
    },
    {
        q: "How does a FOR loop start?",
        a: {
            a: "for i = 1 to 5",
            b: "for (i = 0; i <= 5, i++)",
            c: "for (i = 0, i <= 5)",
            d: "for (i <= 5, i++",
            correct: "for (i = 0; i <= 5, i++)"
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
        if(counter === 0){
            console.log("timer end");
            clearInterval(startCountdown);
            endQuiz();
        };
    };
    var startCountdown = setInterval(countdown, 1000);
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