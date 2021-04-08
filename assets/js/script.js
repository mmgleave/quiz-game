
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

    // questions array
    var questionsArray = [
        { q: "What is the capitol of Utah?", a1: "Salt Lake City", a2: "Provo", a3: "Ogden", a4: "Sandy"},
    ];

    for (var i=0; i < questionsArray.length; i++) {
        // display current question and answer options to user
        $("#question-text").replaceWith("Question: " + questionsArray[i].q);
        $("#btn-ans1").text(questionsArray[i].a1);
        $("#btn-ans2").text(questionsArray[i].a2);
        $("#btn-ans3").text(questionsArray[i].a3);
        $("#btn-ans4").text(questionsArray[i].a4);

        $("#btn-ans1").on('click', function(){
            alert("Correct");            
        })


    }
};