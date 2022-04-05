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
var main=document.querySelector(".main");
var timer= document.querySelector(".timer");
var clock= document.querySelector("#begin");
var qDiv= document.querySelector(".qDiv");
var secondsLeft= 31;
var incorrect= 5;
var interval=0;
var ulCreate=document.createElement("ul");

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
const targetDiv=document.getElementById("hide");
const btn=document.getElementById("begin");
btn.onclick=function(){
    if (targetDiv.style.display !=="none"){
        targetDiv.style.display="none";
    }   else {
        targetDiv.style.display="block";
    }
};

function render(questionList){
    qDiv.innerHTML="";
    ulCreate.innerHTML="";
    for (var i=0; i<questions.length;i++){
        var xQuestion=questions[questionList].question;
        var xChoices=questions[questionList].options;
        qDiv.textContent=xQuestion;
    }
    xChoices.forEach(function(newItem){
        var listItem=document.createElement("li");
        listItem.textContent=newItem;
        qDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click",(compare));
    })
}

function compare(event){
    var element=event.target;

    if (element.matches("li")){

        var createDiv=document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (element.textContent==questions[questionList].answer){
            score++;
            createDiv.textContent= "Correct!";
        
        } else {
        secondsLeft=secondsLeft-incorrect
        createDiv.textContent="Incorrect!";
    }
}

questionList++;

    if (questionList>=questions.length){
        gameOver();
        createDiv.textContent="Time's up! " + "you got " + score + " out of" + questions.length + " Correct";
    } else {
        render(questionList);
    }
    qDiv.appendChild(createDiv);
}