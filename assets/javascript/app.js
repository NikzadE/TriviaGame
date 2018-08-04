
function check () {
    
    document.getElementById("afterResults").style.visibility = "visible";
    

var question1 = document.trivia.question1.value;
var question2 = document.trivia.question2.value;
var question3 = document.trivia.question3.value;
var question4 = document.trivia.question4.value;
var question5 = document.trivia.question5.value;
var question6 = document.trivia.question6.value;
var question7 = document.trivia.question7.value;

var correct = 0;


    if (question1 == "Madrid") {
        correct++
    }
    if (question2 == "Florida") {
        correct++
    }
    if (question3 == "50") {
        correct++
    }
    if (question4 == "Juventus") {
        correct++
    }
    if (question5 == "9") {
        correct++
    }
    if (question6 == "North Carolina") {
        correct++
    }
    if (question7 == "Data Processor") {
        correct++
    }

    document.getElementById("trivia").style.visibility = "hidden";
    document.getElementById("afterResults").style.visibility = "visible";
    document.getElementById("numberCorrect").innerHTML = "You got " + correct + " correct.";


    var messages = ["You did awesome!", "Not bad!", "You could do better"];

    var range;

    if (correct < 3) {
        range = 2;
    }
   if (correct > 2 ) {
        range = 1;
}
    if (correct > 6) {
        range = 0;
    }

    document.getElementById("range").innerHTML = messages [range];



}



