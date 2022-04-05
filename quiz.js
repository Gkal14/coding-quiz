var questions = [
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colourful Style Sheets"],
        answer: "Cascading Style Sheets"
    },

    {
        question: "How do you create a numbered list?",
        options: ["<ul>", "<ol>", "<nl", "dl"],
        answer: "<ol>",
    },

    {
        question: "Is Javascript the same as Java?",
        options: ["yes", "no"],
        answer: "no"
    },

    {
        question: "Choose the correct CSS syntax:",
        options: ["body{color:black;}", "{body;color:black;}", "{body:color=black;}", "body{color=black;}"],
        answer: "body{color:black;}",
    },

    {
        question: "In which HTML element do we insert the JavaScript?",
        options: ["<js>", "<javascript>", "<scripting>", "<script>"],
        answer: "<script>"
    }
];

var score=0;
var questionList= 0;
var timer= document.querySelector(".timer");
var clock= document.querySelector("#begin");
var qDiv= document.querySelector(".qDiv");
var secondsLeft= 31;
var incorrect= 5;
var interval=0;

clock.addEventListener("click", function(){
if (interval===0){
    interval=setInterval(function(){
        secondsLeft--;
        clock.textContent="REMAINING TIME: " + secondsLeft;

        if (secondsLeft<=0){
            clearInterval(interval);
            gameOver();
            clock.textContent= "Times up! Lets see how you went";
        }
    },1000);
}
render(questionList);
});


