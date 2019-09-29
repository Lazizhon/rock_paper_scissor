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
        return "you lose:( scissors beats paper"
    }
    if (humanChose == "paper" & pcChose == "rock") {
        return "you win! paper beats rock"
    }
    if (humanChose == "scissors" & pcChose == "scissors") {
        return "double scissors"
    }
    if (humanChose == "scissors" & pcChose == "paper") {
        return "you win! scissors beats paper"
    }
    if (humanChose == "scissors" & pcChose == "rock") {
        return "you lose :( rock beats scissors"
    }
    if (humanChose == "rock" & pcChose == "rock") {
        return "double rock"
    }
    if (humanChose == "rock" & pcChose == "paper") {
        return "you lose :() paper beats rock"
    }
    if (humanChose == "rock" & pcChose == "scissors") {
        return "you win! rock beats scissors"
    }
    else {
        return "wft! you chose: " + humanChose + ", and pc chose: " + pcChose;
    }

}

console.log(singleRound());
