'use strict';
const button = document.querySelector(".js-button");
const clue = document.querySelector ('.js-cl');
const attemps = document.querySelector ('.js-att');
const userNumber = document.querySelector ('.js-user_number'); 
​  
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  const randomNumber = getRandomNumber(100); 
  console.log("El número random es", randomNumber);

const compare = () => {
    const userNumber2 = userNumber.value;
    const userNumbervalue = parseInt (userNumber2);
    console.log (userNumbervalue);
    if (userNumbervalue === randomNumber) {
       clue.innerHTML = 'Has ganado'; 
    } else if (userNumber2 < 0 || userNumber2 > 100 ) {
        clue.innerHTML = `El número tiene que ser mayor que cero y menor que cien`; 
    } else if (userNumber2 < randomNumber) {
        clue.innerHTML = `El número es mayor que ${userNumber2}`;
    }else if (userNumber2 > randomNumber) {
        clue.innerHTML = `El número es menor que ${userNumber2}`;
    }
}
button.addEventListener("click", compare);

const userCounter = document.querySelector(".js-att");
let counter = 0;
function countTries() {
  counter += 1;

  userCounter.innerHTML = `Número de intentos ${counter}`;
}
​
button.addEventListener("click", countTries);