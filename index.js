function computerMove() {
  let computerChoice = Math.random();
  if (computerChoice >=0 && computerChoice <1/3){
    alert('The computer chose Rock!');
  }
  else if (
      computerChoice >= 1/3 && computerChoice <2/3){
        alert('The computer chose Paper!');
  }
  else if (computerChoice >= 2/3 && computerChoice <1){
          alert('The computer chose Scissors!');
        }
}
  


function clicksRock() {
  const computer = computerMove(); 
  if (computer === 'Rock') {
    alert('It\'s a tie!');
  } else if (computer === 'Paper') {
    alert('You lose! Computer wins!');}
  else if (computer === 'Scissors') {
    alert('You win!');}
}

function clicksPaper() {
  const computer = computerMove(); 
  if 
  (computer === 'Rock') {
    alert('You win!');}
  else if (computer === 'Paper') {
    alert('It\'s a tie!');}
  else if (computer === 'Scissors') {
    alert('You lose! Computer wins!');}
}
function clicksScissors() {
  const computer = computerMove(); 

}
