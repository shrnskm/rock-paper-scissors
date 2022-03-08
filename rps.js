const userDisplay = document.createElement("h1");
const computerDisplay = document.createElement("h1");
const resultDisplay = document.createElement("h1");
const gameGrid = document.getElementById("game");
gameGrid.append(userDisplay, computerDisplay, resultDisplay)

const plays = ["rock", "paper", "scissors"];
let playerSelection
let computerSelection
let playerScore = 0
let computerScore = 0

const handleClick = (e) => {
        playerSelection = e.target.id
        userDisplay.innerHTML = "Player: " + playerSelection
        computerPlay()
        getResults()
        
}
const computerPlay = () => {
        const randomChoice = plays[Math.floor(Math.random() * plays.length)]
        computerSelection = randomChoice
        computerDisplay.innerHTML = "Computer: " + randomChoice
}

for (let i = 0; i < plays.length; i++) {
        const button = document.createElement("button")
        button.id = plays[i]
        button.innerHTML = plays[i]
        button.addEventListener("click", handleClick)
        gameGrid.appendChild(button)
}

const getResults = () => {
        switch ( playerSelection + computerSelection) {
                case "scissorspaper":
                case "rockscissors":
                case "paperrock": 
                        playerScore ++
                        if(playerScore < 5) {
                                resultDisplay.innerHTML = "YOU WIN! " + playerScore + " : " + computerScore
                        }else if(playerScore === 5) {
                                resultDisplay.innerHTML = "GAME OVER! YOU WIN! " + playerScore + " : " + computerScore
                        }
                        break
                case "scissorsrock":
                case "rockpaper":
                case "paperscissors": 
                        computerScore++
                        if(computerScore < 5) {
                                resultDisplay.innerHTML = "YOU LOSE! " + playerScore + " : " + computerScore
                        }else if(computerScore === 5) {
                                resultDisplay.innerHTML = "GAME OVER! YOU LOSE! " + playerScore + " : " + computerScore
                        }
                        break
                case "scissorsscissors":
                case "rockrock":
                case "paperpaper": 
                        resultDisplay.innerHTML = "IT'S A DRAW! " + playerScore + " : " + computerScore
                        break
        }
}



