$(document).ready(function () {

//click start button to start game
    $(".startButton").click(function () {
        //hide start button
        $(".startButton").hide();
        runTimer();
        displayQuestion();
        audio.play();

        for(var i = 0; i < questions.length; i++) {
            holder.push(questions[i]);
        };
    });

//timer start
    function runTimer(){
        if (!running) {
        intervalId = setInterval(decrement, 1000);
        running = true;
        };
    };

//timer countdown
    function decrement() {
        $("#timerArea").html(`<h3>Time remaining: ${timer} </h3>`);
        timer --;

        //stop timer if reaches 0
        if (timer === 0) {
            unanswerCount++;
            stop();
            $("#answerArea").html(`<p>Time is up! The correct answer is: ${pick.choice[pick.answer]} </p>`);
            hidepicture();
        };
    };

//timer stop
    function stop() {
        running = false;
        clearInterval(intervalId);
    };

//display question & potential answers
    function displayQuestion() {
        index = Math.floor(Math.random()*questions.length);
        pick = questions[index];
        $("#questionArea").html(`<h2> ${pick.question} </h2>`);

        for(var i = 0; i < pick.choice.length; i++) {
            var userChoice = $("<button>");
            userChoice.addClass("answerchoice");
            userChoice.html(pick.choice[i]);
            //assign array position to it so can check answer
            userChoice.attr("data-guessvalue", i);
            $("#answerArea").append(userChoice);
        };
        //click function to select answer and outcomes
        $(".answerchoice").on("click", function () {
            //grab array position from userGuess
            userGuess = parseInt($(this).attr("data-guessvalue"));

            //correct guess or wrong guess outcomes
            if (userGuess === pick.answer) {
                stop();
                correctCount++;
                userGuess="";
                $("#answerArea").html("<p>Correct!</p>");
                hidepicture();

            } else {
                stop();
                wrongCount++;
                userGuess="";
                $("#answerArea").html("<p>Womp Womp(ing Willow) The correct answer is: " + pick.choice[pick.answer] + "</p>");
                hidepicture();
            }
        })
//end of displayQuestion
};



function hidepicture () {
    $("#answerArea").append(`<img src= ${pick.photo} >`);
    newArray.push(pick);
    questions.splice(index,1);

    var hidepic = setTimeout(function() {
        $("#answerArea").empty();
        timer= 15;

    //run the score screen if all questions answered
    if ((wrongCount + correctCount + unanswerCount) === qCount) {
        $("#questionArea").empty();
        $("#questionArea").html(`<h3>Game Over!  Here's how you did: </h3>`);
        $("#answerArea").append(`<h4> Correct: ${correctCount}</h4>`);
        $("#answerArea").append(`<h4> Incorrect: ${wrongCount}</h4>`);
        $("#answerArea").append(`<h4> Unanswered: ${unanswerCount}</h4>`);
        $("#reset").show();
        correctCount = 0;
        wrongCount = 0;
        unanswerCount = 0;

    } else {
        runTimer();
        displayQuestion();
        }
    }, 3000);


}

$("#reset").on("click", function() {
    $("#reset").hide();
    $("#answerArea").empty();
    $("#questionArea").empty();
    for(var i = 0; i < holder.length; i++) {
        questions.push(holder[i]);
    }
    runTimer();
    displayQuestion();

})

    var questions = [
        {
            "question": "Who is Harry Potter's arch nemesis?",
            "choice": ["Voldemort", "Cedric Diggory", "Buckbeak", "Madam Pomfrey"],
            "answer": 0,
            "photo": "assets/images/voldemort.gif"
         },
         {
            "question": "Who is Harry Potter's godfather?",
            "choice": ["Neville Longbottom", "Rubeus Hagrid", "Sirius Black","Moaning Myrtle"],
            "answer": 2,
            "photo": "assets/images/siriusBlack.gif"
         },
         {
            "question": "What spell is an Unforgivable Curse?",
            "choice": ["Alohomora", "Avada Kedavra", "Wingardium Leviosa", "Petrificus Totalus"],
            "answer": 1,
            "photo": "assets/images/avadaKedavra.gif"
        },
        {
            "question": "Which of these names is not a Weasley sibling?",
            "choice": ["Percy", "Ron", "Ginny", "Hermione"],
            "answer": 3,
            "photo": "assets/images/hermione.gif"
        }];

    var correctCount = 0;
    var wrongCount = 0;
    var unanswerCount = 0;
    var timer = 15;
    var intervalId;
    var userGuess ="";
    var running = false;
    var qCount = questions.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];
    var audio = new Audio('assets/Harry_Potter_Theme_Song_Hedwigs_Theme.mp3')


});