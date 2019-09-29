function computerPlay() {
    let aiSelectionAre = ['rock', 'paper', 'scissors'];
    return aiSelectionAre[Math.floor(Math.random() * aiSelectionAre.length)];
}
function humanPlay() {
    let humanChose = prompt("What do you choose?", "choose between rock paper scissors")
    return humanChose;
}

function singleRound() {

    let humanChose = humanPlay()
    let pcChose = computerPlay();

    if (humanChose == "paper" & pcChose == "paper") {
        return "double paper"
    }
    if (humanChose == "paper" & pcChose == "scissors") {
        return "you lose:( scissors beats paper" + aiScore++
    }
    if (humanChose == "paper" & pcChose == "rock") {
        return "you win! paper beats rock " + humanScore++
    }
    if (humanChose == "scissors" & pcChose == "scissors") {
        return "double scissors"
    }
    if (humanChose == "scissors" & pcChose == "paper") {
        return "you win! scissors beats paper"+ humanScore++
    }
    if (humanChose == "scissors" & pcChose == "rock") {
        return "you lose :( rock beats scissors"  + aiScore++
    }
    if (humanChose == "rock" & pcChose == "rock") {
        return "double rock"
    }
    if (humanChose == "rock" & pcChose == "paper") {
        return "you lose :() paper beats rock"  + aiScore++
    }
    if (humanChose == "rock" & pcChose == "scissors") {
        return "you win! rock beats scissors" + humanScore++
    }
    else {
        return "wft! you chose: " + humanChose + ", and pc chose: " + pcChose;
    }

}


function game(){
    return singleRound()
}

let humanScore=0;
let aiScore=0;

while (humanScore<5 && aiScore<5) {
    console.log("your score is: " + humanScore)
    console.log("pc's score is: " + aiScore)
    console.log(singleRound());
    // humanScore = 5
}




