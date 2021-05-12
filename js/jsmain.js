'use strict'
//const randomNumber = Math.random();

const randomNumberEl= document.querySelector ('js-number') 
const buttonEl=document.querySelector('js-write');
const Pist= document.querySelector ('js-pista');
const Try= document.querySelector ('js-try');
const ResultUser= document.querySelector ('js-result');


function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
}

const randomNumber= getRandomNumber(100);
console.log (randomNumber);


let calcul = 0;
function calculate() {
return `Nº de intentos: ` + (calcul += 1);
}


function writeNumber (event) {
    event.preventDefault();
    ResultUser.innerHTML = calculate();
    Pist.innerHTML = reply2 (randomNumberEl);

}
//Pist.addEventListener ('click',writeNumber);
function reply () {
    if (randomNumberEl <=80){
        return `demasiado alto`;

    } else if (randomNumberEl >=20)
    return `demasiado bajo`; 

} 

