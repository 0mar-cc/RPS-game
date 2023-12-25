// Create a function that contain a player input and a computer random choice
// Create a code it's output is the player input
// Create a code it's output is the random computer choice
// Create a loop that contain the game idea 
// The Game over after someone's score equal 5


// the variable that contain the result of the round
let result = "";
// The game's rules and score counting
function playRound(player, computer){
    
    
    if (player.toLowerCase() === 'rock' && computer === 'paper'){
        result = ("You Lost! Paper beats Rock");
    }

    else if (player.toLowerCase() === 'rock' && computer === 'scissors'){
        result =("You Won! Rock beats Scissors");
    }

    else if (player.toLowerCase() === 'rock' && computer === 'rock'){
        result = ("It's a Tie");
    }

    else if (player.toLowerCase() === 'paper' && computer === 'scissors'){
        result =("You Lost! Scissors beats Paper");
    }

    else if (player.toLowerCase() === 'paper' && computer === 'rock'){
        result =('You Won! Paper beats Rock')
    }

    else if (player.toLowerCase() === 'paper' && computer === 'paper'){
        result =("It's a Tie");
    }

    else if (player.toLowerCase() === 'scissors' && computer === 'rock'){
        result =("You Lost! Rock beats Scissors");
    }

    else if (player.toLowerCase() === 'scissors' && computer === 'paper'){
        result =("You Won! Scissors beats Paper");
    }

    else if (player.toLowerCase() === 'scissors' && computer === 'scissors'){
        result = ("It's a Tie");
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

// Function that let the plaeyr play the game 
let playerSelection = "";
let resultBanner = document.createElement("div");
function playGame(){
    
    getComputerChoice();
    (playRound(playerSelection, computerSelection));
    resultBanner.textContent = result;
    document.body.append(resultBanner)
}


// The div that contain the game 
let gameContainer = document.createElement("div");
gameContainer.className = "gameContainer";

// the div that contain the selection buttons
let options = document.createElement("div");
options.className = "options"

// the rock button
let optionOne = document.createElement("button");
optionOne.className = "rock";
optionOne.textContent = "Rock"

// the paper button
let optionTwo = document.createElement("button");
optionTwo.className = "paper";
optionTwo.textContent = "Paper"

// the scissors button
let optionThree = document.createElement("button");
optionThree.className = "scissors";
optionThree.textContent = "Scissors"

// adding the selection buttons to thier container (options)
options.append(optionOne,optionTwo,optionThree);

// adding the button container to the game container (gameContainer)
gameContainer.append(options)

// adding the game container to the page
document.body.appendChild(gameContainer)


// function the let the player select rock and decide the result
optionOne.onclick = function(){
    playerSelection = "rock";
    playGame()
}
// function the let the player select paper and decide the result
optionTwo.onclick = function(){
    playerSelection = "paper";
    playGame()
}

// function the let the player select scissors and decide the result
optionThree.onclick = function(){
    playerSelection = "scissors";
    playGame()
}

