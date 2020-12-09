
    let userScore = 0;
    let computerScore = 0;
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissors = document.getElementById('scissors');
    const playAgainYes = document.getElementById('playAgainYes');
    const playAgainNo = document.getElementById('playAgainNo');
    const playerHandButton = document.querySelectorAll('button.playerHandButton')
    const roundResults = document.getElementById('roundResults');
    const roundResultsText = document.getElementById('roundResultsText');
    const userScoreText = document.getElementById('userScoreText');
    const computerScoreText = document.getElementById('computerScoreText');
    const userScoreBackground = document.getElementById('userScore');
    const computerScoreBackground = document.getElementById('computerScore');
    const gameResult = document.getElementById('gameResult');
    const playAgain = document.getElementById('playAgain');
    playAgain.style.display ='none';

    // button clicks
    rock.addEventListener('click', () => {
        roundResultsText.textContent = game(event.target.id.toString());
    });
    paper.addEventListener('click', () => {
        roundResultsText.textContent = game(event.target.id.toString());
    });
    scissors.addEventListener('click', () => {
        roundResultsText.textContent = game(event.target.id.toString());
    });
    playAgainYes.addEventListener('click', () => {
        resetGame();
    });
    playAgainNo.addEventListener('click', () =>{
        sendPlayAgainMessage();
    });
    
function computerPlay(){
    let computerPlayNum = Math.floor(Math.random()* 3);
    if (computerPlayNum == 0) {
        return "rock";
    }
    if (computerPlayNum == 1){
        return "paper";
    } 
    if (computerPlayNum == 2) {
        return "scissors";
    }
}
function determineResults(userHand, computerHand, roundResult){
    if(roundResult == 'win'){
        roundResults.style.backgroundColor = 'hsl(115 60% 50%)';
        userScore += 1;
        userScoreText.textContent = userScore;
        if(userScore >= 5){
            playerHandButton.forEach(element => element.disabled = true);
            computerScoreBackground.style.backgroundColor ='white';
            playAgain.style.display = 'flex';
            return 'You\'ve won the match! Play again?'
        }
        userHand = userHand.charAt(0).toUpperCase() + userHand.slice(1);
        return `You win! ${userHand} beats ${computerHand}!`;
    }
    if(roundResult == 'loss'){
        roundResults.style.backgroundColor = 'hsl(0 60% 50%)';
        computerScore += 1;
        computerScoreText.textContent = computerScore;
        if(computerScore >= 5){
            playerHandButton.forEach(element => element.disabled = true);
            userScoreBackground.style.backgroundColor = 'white';
            playAgain.style.display = 'flex';
            return 'You\'ve lost the match! Play again?'
        }
        computerHand = computerHand.charAt(0).toUpperCase() + computerHand.slice(1);
        return `You lose! ${computerHand} beats ${userHand}!`;
    }
    if(roundResult == 'tie'){
        roundResults.style.backgroundColor = 'hsl(60 0% 80%)';
        let capitalized = userHand.charAt(0).toUpperCase() + userHand.slice(1);
        return `${capitalized} ties with ${computerHand}!`;
    }
}
function game(userHand){
    let computerHand = computerPlay();

    // Return Winner and Loser
    if (userHand == "rock"){
        if (computerHand == "scissors"){
            return determineResults(userHand, computerHand, 'win');
        }
        else if (computerHand == "paper"){
            return determineResults(userHand, computerHand, 'loss');
        }
        else{
            return determineResults(userHand, computerHand, 'tie');
        }
    }
    if (userHand == "paper"){
        if (computerHand == "rock"){
            return determineResults(userHand, computerHand, 'win');
        }
        else if (computerHand == "scissors"){
            return determineResults(userHand, computerHand, 'loss');
        }
        else{
            return determineResults(userHand, computerHand, 'tie');
        }
    }
    if (userHand == "scissors"){
        if (computerHand == "paper"){
            return determineResults(userHand, computerHand, 'win');
        }
        else if (computerHand == "rock"){
            return determineResults(userHand, computerHand, 'loss');
        }
        else{
            return determineResults(userHand, computerHand, 'tie');
        }
    }
}
function resetGame(){
    userScore = 0;
    computerScore = 0;
    userScoreText.textContent = userScore;
    computerScoreText.textContent = computerScore;
    userScoreBackground.style.backgroundColor = 'hsl(115 60% 50%)';
    computerScoreBackground.style.backgroundColor = 'hsl(0 60% 50%)';
    playAgain.style.display ='none';
    playerHandButton.forEach(element => element.disabled = false);
    roundResultsText.textContent = '';
    roundResults.style.backgroundColor = 'white';
}
function sendPlayAgainMessage(){
    let randomMessage = Math.floor(Math.random() * 8);
    if (randomMessage == 0){
        randomMessage = 'Why not?';
    }
    if (randomMessage == 1){
        randomMessage = 'Please?';
    }
    if (randomMessage == 2){
        randomMessage = 'Play Again!';
    }
    if (randomMessage == 3){
        randomMessage = 'It\'ll be fun!';
    }
    if (randomMessage == 4){
        randomMessage = 'Do it!';
    }
    if (randomMessage == 5){
        randomMessage = 'Click the green button!';
    }
    if (randomMessage == 6){
        randomMessage = 'Click it!';
    }
    if (randomMessage == 7){
        randomMessage = 'You should!';
    }
    roundResultsText.textContent = randomMessage;
}