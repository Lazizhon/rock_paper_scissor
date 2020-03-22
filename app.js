let userScore = 0;
let compScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");

function getComputerChoice(){
    let choices = ['r','p','s'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock"
    if (letter === "p") return "Paper"
    return "Scissors";
}

function win(user, comp){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(user)} beats ${convertToWord(comp)}. You Won!`;
}
function lose(user, comp){
    compScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(user)} loses to ${convertToWord(comp)}. You Lost!`;
}
function draw(user, comp){
    result_div.innerHTML = `${convertToWord(user)} is equal to ${convertToWord(comp)}. It's a draw!`;
}

function game(userChoiсe){
    const computerChoice = getComputerChoice();

    switch (userChoiсe + computerChoice){
        case "rs":
        case "sp":
        case "pr":
            win(userChoiсe, computerChoice);
        break;
        
        case "sr":
        case "ps":
        case "rp":
            lose(userChoiсe, computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoiсe, computerChoice);
        break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r")
    });
    paper_div.addEventListener('click', function () {
        game("p")
    });
    scissors_div.addEventListener('click', function () {
        game("s")
    });
}
main();


