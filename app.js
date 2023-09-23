var pCount = document.querySelector(".pCount")
var cCount = document.querySelector(".cCount")
var player = document.getElementsByTagName("p")[0]
var computer = document.getElementsByTagName("p")[1]
var result = document.getElementsByTagName("p")[2]
var pCount = document.getElementsByTagName("h3")[0]
var cCount = document.getElementsByTagName("h3")[1]
var reset = document.getElementsByTagName("button")[0]
var i = 0
var n = 0
function play(pChoice) {
    var cChoice = ["paper", "scissor", "rock"]; 
    var random = Math.floor(Math.random() * 3);
    var computerChoice = cChoice[random]; 
    player.innerText = "Player Choice: " + pChoice;
    computer.innerText = "Computer Choice: " + computerChoice;
    if (
        (pChoice == "paper" && computerChoice == "rock") ||
        (pChoice == "rock" && computerChoice == "scissor") ||
        (pChoice == "scissor" && computerChoice == "paper")

    ) {
        i++
        result.innerText = "YOU WON"
        pCount.innerText = "Player: " + i
    } else if (
        pChoice == computerChoice
    ) {
        result.innerText = "Tie"
    } else {
        n++
        result.innerText = "YOU LOST"
        cCount.innerText = "Computer: " + n
    }
}
function reset(play){
    i==0
    n==0
    cCount.innerText = "Computer: " + n
}

