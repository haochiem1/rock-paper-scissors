function computerPlay(){
    let x = Math.floor(Math.random() * 3)

    switch(x)
    {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";
    }

    return "Error. Try Again!"
}

function validateInput(playerSelection)
{
    let string = playerSelection.toUpperCase();
    if (string == "ROCK" || string == "PAPER" || string == "SCISSORS")
    {
        return string;
    }

    return "ERROR";
}

function playRound(playerSelection, computerSelection) {
    var resultString;
    var winner;
    var loser;

    if(playerSelection == computerSelection)
    {
        return "You Tied! Round Restarts!";
    }

    switch (playerSelection)
    {
        case "ROCK":
            if(computerSelection == "PAPER")
            {
                resultString = "You Lose!";
                winner = computerSelection;
                loser = playerSelection;
            }
            else
            {
                resultString = "You Win!";
                winner = playerSelection;
                loser = computerSelection;
            }
            break;
        case "PAPER":
            if(computerSelection == "SCISSORS")
            {
                resultString = "You Lose!";
                winner = computerSelection;
                loser = playerSelection;
            }
            else
            {
                resultString = "You Win!";
                winner = playerSelection;
                loser = computerSelection;
            }
            break;
        case "SCISSORS":
            if(computerSelection == "ROCK")
            {
                resultString = "You Lose!";
                winner = computerSelection;
                loser = playerSelection;
            }
            else
            {
                resultString = "You Win!";
                winner = playerSelection;
                loser = computerSelection;
            }
            break;
    }

    return resultString + ' ' + winner + ' beats ' + loser;
}

function handleEnd(playerScore, comScore){
    var resultString;
    if (playerScore > comScore)
    {
        resultString = "You win the game! "
    }
    else
    {
        resultString = "You lose the game! "
    }

    return resultString + playerScore + ' - ' + comScore;
}

function game(){
    let playerScore = 0;
    let comScore = 0;

    for (let i = 0; i < 5; i++)
    {
        var playerSelection = prompt("Enter your choice! Rock, Paper, or Scissors?")
        playerSelection = validateInput(playerSelection);

        if(playerSelection == "ERROR")
        {
            console.log("Invalid Input! Try Again");
            i--;
            continue;
        }

        let round = playRound(playerSelection, computerPlay());
        console.log(round);
        if(round == "You Tied! Round Restarts!")
        {
            i--;
            continue;
        }
        let handleScore = round.includes("You Win!")
        if (handleScore == true)
        {
            playerScore++;
        }
        else
        {
            comScore++;
        }
    }
    console.log(handleEnd(playerScore, comScore));
}

game();
