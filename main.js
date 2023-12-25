// Create a function that contain a player input and a computer random choice
// Create a code it's output is the player input
// Create a code it's output is the random computer choice
// Create a loop that contain the game idea 
// The Game over after someone's score equal 5



let playerScore = 0;
let computerScore = 0;

// The game's rules and score counting
function playRound(player, computer){
    
    
    if (player.toLowerCase() === 'rock' && computer === 'paper'){
        computerScore++
        return("You Lost! Paper beats Rock");
    }

    else if (player.toLowerCase() === 'rock' && computer === 'scissors'){
        playerScore++
        return("You Won! Rock beats Scissors");
    }

    else if (player.toLowerCase() === 'rock' && computer === 'rock'){
        return("It's a Tie");
    }

    else if (player.toLowerCase() === 'paper' && computer === 'scissors'){
        computerScore++
        return("You Lost! Scissors beats Paper");
    }

    else if (player.toLowerCase() === 'paper' && computer === 'rock'){
        playerScore++
        return('You Won! Paper beats Rock')
    }

    else if (player.toLowerCase() === 'paper' && computer === 'paper'){
        return("It's a Tie");
    }

    else if (player.toLowerCase() === 'scissors' && computer === 'rock'){
        computerScore++
        return("You Lost! Rock beats Scissors");
    }

    else if (player.toLowerCase() === 'scissors' && computer === 'paper'){
        playerScore++
        return("You Won! Scissors beats Paper");
    }

    else if (player.toLowerCase() === 'scissors' && computer === 'scissors'){
        return ("It's a Tie");
    }

    else{
        return "It's not a choice"
    }
}

// function that output the random computer choice
function getComputerChoice(){
    
    randomSelection = Math.random()-0.1
        if (randomSelection <= 0.33){
            computerSelection = 'rock';
        }
        else if (randomSelection <= 0.66 &&  randomSelection > 0.33){
            computerSelection = 'paper';
        }

        else {
            computerSelection = 'scissors';
        }
    
}

function playGame(){
    
    let playerSelection = prompt("Please Enter Your Choice! Rock, Paper, Scissors");
    getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
}

// playGame()

let gameContainer = document.createElement("div");
gameContainer.className = "gameContainer";

let options = document.createElement("div");
options.className = "options"

let optionOne = document.createElement("button");
optionOne.className = "rock";
optionOne.textContent = "Rock"

let optionTwo = document.createElement("button");
optionTwo.className = "paper";
optionTwo.textContent = "Paper"

let optionThree = document.createElement("button");
optionThree.className = "scissors";
optionThree.textContent = "Scissors"

let body = document.querySelector("body")
options.append(optionOne,optionTwo,optionThree);

gameContainer.append(options)

document.body.appendChild(gameContainer)


