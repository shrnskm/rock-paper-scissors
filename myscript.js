let playerScore = 0;
let computerScore = 0;

function computerPlay() {
        const plays = ["rock", "paper", "scissors"];
        const randomNumber = Math.floor(Math.random()*3);
        return plays[randomNumber];
}
function lose() {
        computerScore++;
        console.log("lose");
        console.log(playerScore + ":" + computerScore);
}

function win() {
        playerScore++;
        console.log("win");
        console.log(playerScore + ":" + computerScore);
}
function draw() {
        console.log("draw");
}

function game() {
        function playRound(playerSelection, computerSelection) {   
                switch(playerSelection + " " + computerSelection) {
                        case "rock paper":
                        case "paper scissors":
                        case "scissors rock":
                                lose();
                        break;
                        case "rock scissors":
                        case "scissors paper":
                        case "paper rock":
                                win();
                        break;
                        case "rock rock":
                        case "paper paper":
                        case "scissors scissors":
                                draw();
                        break;
                }
        }
        let playerSelection1 = prompt("Rock, Paper, Scissors!").toLowerCase();
        playRound(playerSelection1, computerPlay());
        let playerSelection2 = prompt("Rock, Paper, Scissors!").toLowerCase();
        playRound(playerSelection2, computerPlay());
        let playerSelection3 = prompt("Rock, Paper, Scissors!").toLowerCase();
        playRound(playerSelection3, computerPlay());
        let playerSelection4 = prompt("Rock, Paper, Scissors!").toLowerCase();
        playRound(playerSelection4, computerPlay());
        let playerSelection5 = prompt("Rock, Paper, Scissors!").toLowerCase();
        playRound(playerSelection5, computerPlay());

        if (playerScore > computerScore) {
                console.log("Winner!" + playerScore + ":" + computerScore);
        }else if (playerScore < computerScore) {
                console.log ("Loser!" + playerScore + ":" + computerScore);
        }else return "It's a draw!" + playerScore + ":" + computerScore;

        
}
game();