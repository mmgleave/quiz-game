 // questions array
 var questionsArray = [
    { q: "Question 1", a1: "Answer 1", a2: "Answer 2", a3: "Answer 3", a4: "Answer 4", a5: "Answer 1"},
];

// score variable
var score = 0;

window.onload = function(){
    document.getElementById("main-container").style.display = "none";
}

$("#btn-start").on('click', function(){
    alert("The quiz is starting!");
    quizBegin();
});

// main quiz function (when start button is clicked)
quizBegin = function() {
    // display question main-container
    document.getElementById("main-container").style.display = "block";
   
    // for loop to display questions
    for (var i = 0; i < questionsArray.length; i++) {
        // display current question and answer options to user
        $("#question-text").replaceWith("Question: " + questionsArray[i].q);
        $("#btn-ans1").text(questionsArray[i].a1);
        $("#btn-ans2").text(questionsArray[i].a2);
        $("#btn-ans3").text(questionsArray[i].a3);
        $("#btn-ans4").text(questionsArray[i].a4);

        var correctAnswer = questionsArray[i].a5;

        $(".answer-btn").click(function(){
            if($(this).text() === correctAnswer ) {
                console.log("correct");
                score++;
            } else {
                console.log("incorrect");
            };
        $("#score-value").replaceWith("Score: " + score);
        });

      }
};