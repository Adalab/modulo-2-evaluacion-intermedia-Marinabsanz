'use strict'
//const randomNumber = Math.random();

const randomNumberEl= document.querySelector ('js-input') 

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

