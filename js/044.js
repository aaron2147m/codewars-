//You are using a library that already has the functions below. Create a function named main that calls the functions in the proper order.




let health = 100
let position = 0
let coins = 0

function main(log) {

switch (log){
  case 0:
  rollDice();
  break;
  
  case 1:
  move();
  break;
  
  case 2:
  combat();
  break;
  
  case 3:
  getCoins();
  break;
  
  case 4:
  buyHealth();
  break;
   
  case 5:
  printStatus();
  break;
  }
}

main(0)
main(1)
main(2)
main(3)
main(4)
main(5)