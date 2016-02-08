////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    if (move === true) {

    }
    else {
        move = getInput();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move;
}

function getComputerMove(move) {
    if (move === true) {

    }
    else {
        move = randomPlay();
    }
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = 'tie';
    }

    if (playerMove === 'rock') {
        if (playerMove === 'scirssors') {
            winner = "player";
        }
    }

    if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            winner = 'player';
        } else {
            winner = 'computer';
        }
    }

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            winner = 'computer';
        } else {
            winner = 'player';
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
        var playerSelect = getInput();
        var playerChoice = getPlayerMove(playerSelect);
        var computerChoice = getComputerMove(randomPlay());
        var winner = getWinner(playerChoice, computerChoice);

        if (winner === 'player') {
            playerWins++;
            console.log('Player wins. Player: ' + playerWins + '
                Computer: ' + computerWins);
        } else if (winner === 'computer') {
            computerWins++;
            console.log('Computer wins. Player: ' + playerWins + 'Computer:
                ' + computerWins);
        }
    }
    if (playerWins === 5) {
        console.log("Game Over. Player wins! Fianl Score - Player:
            " + playerWins + " Computer: " + computerWins);
    } else if (conputerWins === 5) {
        console.log ("Game Over. Comptuer wins! Fianl Score - Player: "
            + playerWins+ " Computer: " + computerWins);
    }
    return [playerWins, computerWins];
}

