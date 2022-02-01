const plays = ["Rock", "Paper", "Scissors"];
        const computerPlay = () => `${plays[Math.floor(Math.random()*plays.length)]}`;
        console.log(computerPlay());


const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection,computerSelection));