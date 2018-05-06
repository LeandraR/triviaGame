$(document).ready(function(){

    // when start button clicked, display question one
    $(".startButton").on("click", function () {

        //hide start button, show question
        $(".startButton").addClass("display-none");

        startTimer();

        $('#questionArea').append("<h2>" + questions[0].question + "</h2>");

        //iterate choice options & append to html
        for (var i = 0; i < [questions[0].choices].length; i++){
            $("#questionArea").append("<button>" + questions[0].choice[i] + "</button>");
        };

    });


function startTimer(){
        $('#timerArea').append('<h2>Time Remaining: ' + counter + ' seconds</h2>');
        counter = setInterval(runTimer, 15000);
    }


var questions = [
    {
        question: "Who is Harry Potter's arch nemesis?",
        choice: ["Voldemort", "Cedric Diggory", "Buckbeak", "Madam Pomfrey"],
        answer: 0,
        photo: "assets/images/voldemort.gif"
     },
     {
        question: "Who is Harry Potter's godfather?",
        choice: ["Neville Longbottom", "Rubeus Hagrid", "Sirius Black","Moaning Myrtle"],
        answer: 2,
        photo: "assets/images/siriusBlack.gi"
     },
     {
        question: "What spell is an Unforgivable Curse?",
        choice: ["Alohomora", "Avada Kedavra", "Wingardium Leviosa", "Petrificus Totalus"],
        answer: 1,
        photo: "assets/images/avadaKedavra.gif"
    },
    {
        question: "Which of these names is not a Weasley sibling?",
        choice: ["Percy", "Ron", "Ginny", "Hermione"],
        answer: 4,
        photo: "assets/images/hermione.gif"
    }];

var counter = 15;
var correctCount = 0;
var wrongCount = 0;
var intervalId;
var userGuess ="";
var running = false;
var questionCount = questions.length;
var pick;
var index;
var newArray = [];
var holder = [];


// var audio = new Audio("assets/Harry_Potter_Theme_Song_Hedwigs_Theme.mp3");
// audio.play();

});
