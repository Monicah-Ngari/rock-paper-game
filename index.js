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
  


function clicksRock() {
  const computer = computerMove(); 
  if (computer === 'Rock') {
    alert('It\'s a tie!');
  } else if (computer === 'Paper') {
    alert('You lose 😞! Computer wins!');}
  else if (computer === 'Scissors') {
    alert('You win 😊!');}


}

function clicksPaper() {
  const computer = computerMove(); 
  if 
  (computer === 'Rock') {
    alert('You win 😊!');}
  else if (computer === 'Paper') {
    alert('It\'s a tie!');}
  else if (computer === 'Scissors') {
    alert('You lose 😞! Computer wins!');}
}
function clicksScissors() {
  const computer = computerMove(); 
  if (computer === 'Rock') {
    alert('You lose 😞! Computer wins!');}
  else if (computer === 'Paper') {
    alert('You win 😊!');}
  else if (computer === 'Scissors') {
    alert('It\'s a tie!');} 

}
