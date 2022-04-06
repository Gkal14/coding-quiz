var questions = [
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colourful Style Sheets"],
        answer: "Cascading Style Sheets"
    },

    {
        question: "How do you create a numbered list?",
        options: ["<ul>", "<ol>", "<nl>", "<dl>"],
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
var secondsLeft= 51;
var incorrect= 5;
var interval=0;
var ulCreate=document.createElement("ul");


// Timer to start when the begin button is pressed
clock.addEventListener("click", function(){
    clock.style.display="none";
if (interval===0){
    interval=setInterval(function(){
        secondsLeft--;
        timer.textContent="REMAINING TIME: " + secondsLeft;

        // message to display when timer runs out
        if (secondsLeft<=0){
            clearInterval(interval);
            gameOver();
            timer.textContent= "Time's up!";

        }
    },1000);
}
render(questionList);
});

function render(questionList){
    qDiv.innerHTML="";
    ulCreate.innerHTML="";

    for (var i=0; i < questions.length; i++){
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

// This function generates the message below the questions which returns a message based on how it was answered
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

// Tells the user how many questions they answered correctlty out of the total
questionList++;

    if (questionList>=questions.length){
        gameOver();
        createDiv.textContent="Time's up! " + "you got " + score + " out of " + questions.length + " Correct";
    } else {
        render(questionList);
    }
    qDiv.appendChild(createDiv);
}

function gameOver(){
    qDiv.innerHTML= "";
    timer.innerHTML="";


    // All elements generated for the final score page
var createH2=document.createElement("h2");
createH2.setAttribute("id","createH2");
createH2.textContent="Game Over!"

qDiv.appendChild(createH2);

var createP=document.createElement("p");
createP.setAttribute("id", "createP");

qDiv.appendChild(createP);

if (secondsLeft >=0){
    var remainingTime=secondsLeft;
    var createP=document.createElement("p");
    clearInterval(interval);
    createP.textContent="Your score is: " + remainingTime;
console.log("score")


    qDiv.appendChild(createP);
}

var createLabel=document.createElement("label");
createLabel.setAttribute("id", "createLabel");
createLabel.textContent="Enter your initials to save your score: "

qDiv.appendChild(createLabel);

var createInput=document.createElement("input");
createInput.setAttribute("type", "text");
createInput.setAttribute("id", "initials");
createInput.textContent="";

qDiv.appendChild(createInput);


var createSubmit=document.createElement("button");
createSubmit.setAttribute("type", "submit");
createSubmit.setAttribute("id", "submit");
createSubmit.textContent="submit";

qDiv.appendChild(createSubmit);


// This event listener stores Initials and score to local storage
createSubmit.addEventListener("click", function(){
var initials=createInput.value;

if (initials===null){
    prompt="please enter your initials";

} else {
    var scores={
        initials: initials,
        score: remainingTime
    }
    var allScores=localStorage.getItem("allScores");
    if (allScores===null){
        allScores=[];

    } else {
        allScores= JSON.parse(allScores);
    }
    allScores.push(scores);

var newScore=JSON.stringify(allScores);
localStorage.setItem("allScores", newScore);

window.location.replace("./YourScores.html");
}

});
}
