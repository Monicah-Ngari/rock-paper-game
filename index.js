function computerMove() {
  let computerChoice = Math.random();
  let choice = '';
  if (computerChoice >=0 && computerChoice <1/3){
     choice = 'Rock';
  }
  else if (
      computerChoice >= 1/3 && computerChoice <2/3){
        choice = 'Paper';
  }
  else if (computerChoice >= 2/3 && computerChoice <1){
          choice = 'Scissors';
        }
  alert(`The computer chose ${choice}!`);
  return choice; 
}

let userScore = 0;
let computerScore = 0;
 function updateWInner () {
  document .getELementById=(your-score).innerText = userScore;
  document .getELementById=(computer-score).innerText = computerScore;


  let winner = '';
  if (userScore > computerScore) {
    winner = 'You are the overall winner! 🎉';

  }
  else if (computerScore > userScore) {
    winner = 'Computer is the overall winner! 🎉';
  }
  else {
    winner = 'The game is a tie overall!';
  }

  document.getElementById('winner').innerText = winner;
 }


function clicksRock() {
  const computer = computerMove(); 
  if (computer === 'Rock') {
    alert('It\'s a tie!');
  } else if (computer === 'Paper') {
    alert('You lose 😞! Computer wins!');
    computerScore++;}
  else if (computer === 'Scissors') {
    alert('You win 😊!');}
  userScore++;


}

function clicksPaper() {
  const computer = computerMove(); 
  if 
  (computer === 'Rock') {
    alert('You win 😊!');
  computerScore++;}
    
  else if (computer === 'Paper') {
    alert('It\'s a tie!');}
  else if (computer === 'Scissors') {
    alert('You lose 😞! Computer wins!');
    userScore++;}
}
function clicksScissors() {
  const computer = computerMove(); 
  if (computer === 'Rock') {
    alert('You lose 😞! Computer wins!');
    computerScore++;}
  else if (computer === 'Paper') {
    alert('You win 😊!');
    userScore++;}
  else if (computer === 'Scissors') {
    alert('It\'s a tie!');} 

}

