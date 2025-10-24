function computerMove() {
  let computerChoice = Math.random();
  if (computerChoice >=0 && computerChoice <1/3){
    alert('The computer chose Rock!');
  }
  else if (
      computerChoice >= 1/3 && computerChoice <2/3){
        alert('The computer chose Paper!');
  }
  else if (computerChoice <= 2/3 && computerChoice <1){
          alert('The computer chose Scissors!');
        }
}
  


function clicksRock() {
  const computer = computerMove(); 

}

function clicksPaper() {
  const computer = computerMove(); 

}
function clicksScissors() {
  const computer = computerMove(); 

}
