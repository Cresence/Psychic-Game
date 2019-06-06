// The choices
var choices = ["tri", "cir", "sqr"];
var playerChoice;
var cpuChoice;

var wins = 0,
losses = 0
attempts = 10;


var gameStart = document.getElementById("game-start");
var userChoice = document.getElementById("userchoice-text");
var cpuChoice = document.getElementById("cupchoice-text");
var winText = document.getElementById("win-text");
var lossText = document.getElementById("loss-text");
var gameInProgress = document.querySelector("#Game-Begin");

var shapes = document.querySelectorAll(".shapes");

shapes.forEach (function(shape){
    shape.addEventListener("click",function(){
    playerChoice = shape.dataset.type;
    gameStart.textContent = "Game Start!";
    cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    
    if (playerChoice === cpuChoice) {
        wins++
    }else {
        losses++;
    }
    winText.textContent = "Wins: " + wins;
    lossText.textContent = "Losses: " + losses;
    })
})
