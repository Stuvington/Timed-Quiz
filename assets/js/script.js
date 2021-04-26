'use strict';
// a doot doot doo

// global variables
var startEl = document.getElementById("startBtn")
var submitEl = document.getElementById("submitBtn")
var timeEl = document.getElementById("timeRemaining")
var containerEl = document.querySelector("#container")
var qEl = document.querySelector("#p")
var pEl = document.querySelector("#p")
var opt1El = document.getElementById("option1Btn")
var opt2El = document.getElementById("option2Btn")
var opt3El = document.getElementById("option3Btn")
var opt4El = document.getElementById("option4Btn")
var count ;
var endTime ;
var score = [] ;

// new Object()
let result = new Object()
result.first = [`1`, `AL`, `123`]

document.getElementById("result.first")

console.log(result.first)
console.log(result.first[1])


// functional definitions

function countdown(){
    count = 0;
    var mod60 ;
    var timeMinute ;
    var timeSecond ;
    var interval = setInterval(function () {
        count--;
        timeEl.textContent = count;
        mod60 = (count % 60)
        console.log(Math.floor(count / 60) + ":" + (mod60))
        timeMinute = Math.floor(count / 60)
        timeSecond = (mod60 < 10 ? ("0" + mod60) : mod60)
        timeEl.textContent = (timeMinute + ":" + timeSecond)
        if(count <=30){
            timeEl.setAttribute("style", "color: cornflowerblue;")
        }
        if (count <= 0) {
            clearInterval(interval)
            // XXEl.setAttribute("class", "hidden")
            // XXEl.setAttribute("class", "hidden")

            var newH = document.createElement("h2")
            newH.textContent = "Time's up!"
            containerEl.appendChild(newH)
            console.log("ding!")
        }
    }, 1000)
    var question = 0;
    var newQ = document.createElement("p")
    var newP = document.createElement("p")
    var opt1 = document.createElement("p")
    var opt2 = document.createElement("p")
    var opt3 = document.createElement("p")
    var opt4 = document.createElement("p")
    for (var question = 0; question <= 5; question++) {
        switch (question){
            case 0:
                newQ.textContent = "Question 1"
                qEl.appendChild(newQ)
                newP.textContent = "What is the best fruit?"
                pEl.appendChild(newP)
                opt1.textContent = "Apple"
                opt1El.appendChild(opt1)
                opt2.textContent = "Orange"
                opt2El.appendChild(opt2)
                opt3.textContent = "Banana"
                opt3El.appendChild(opt3)
                opt4.textContent = "Plum"
                opt4El.appendChild(opt4)
                // repeat 3 times, have 1 be correct and increment var question
                // have 3 be incorrect and decrement var count
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
       }
       question++;
    }
}

function startQuiz(){

    endTime = count;
}

function submitScore(){
    var initials = prompt("Please enter your name")
    score.push(initials +" - "+count)
    localStorage.setItem("toSave", JSON.stringify(score))
    location.reload()
}



// event listeners and invocations

// startEl.addEventListener("click", startQuiz)
startEl.addEventListener("click", countdown)
submitEl.addEventListener("click", submitScore)