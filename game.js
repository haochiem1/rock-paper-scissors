var playerScore = 0;
var comScore = 0;

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
        const result = document.querySelector('.Result');
        result.innerHTML = "You Tied! Round Restarts!";
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

    const result = document.querySelector('.Result');
    result.innerHTML = resultString + ' ' + winner + ' beats ' + loser;

    if(resultString == "You Win!")
    {
        playerScore++;
        const playerScoreDisplay = document.querySelector('.user-score');
        playerScoreDisplay.innerHTML = playerScore;
        playerScoreDisplay.style.paddingTop = "25px";
        playerScoreDisplay.style.paddingBottom = "25px";
        if(playerScore >= 5)
        {
            handleEnd(playerScore, comScore)
        }
    }
    else{
        comScore++;
        const comScoreDisplay = document.querySelector('.com-score');
        comScoreDisplay.innerHTML = comScore;
        comScoreDisplay.style.paddingTop = "25px";
        comScoreDisplay.style.paddingBottom = "25px";
        if(comScore >= 5)
        {
            handleEnd(playerScore, comScore)
        }
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

    const gameEnd = document.querySelector('.game-over');
    gameEnd.innerHTML = resultString;
    const buttons = document.querySelector('.buttons');
    buttons.innerHTML = "<button onclick='resetGame()'>Restart</button>";
    return resultString + playerScore + ' - ' + comScore;
}

function resetGame()
{
    playerScore = 0;
    comScore = 0;
    const playerScoreDisplay = document.querySelector('.user-score');
    playerScoreDisplay.innerHTML = playerScore;
    const comScoreDisplay = document.querySelector('.com-score');
    comScoreDisplay.innerHTML = comScore;
    const result = document.querySelector('.Result');
    result.innerHTML = "";
    const gameEnd = document.querySelector('.game-over');
    gameEnd.innerHTML = "";
    const buttons = document.querySelector('.buttons');
    buttons.innerHTML = '<button class="ROCK">Rock</button><button class="PAPER">Paper</button><button class="SCISSORS">Scissors</button>';
    
    const buttonList = document.querySelectorAll('button');

    buttonList.forEach((button) => {

        button.addEventListener('click', () => {
            playRound(button.className, computerPlay());
        });
    });
}