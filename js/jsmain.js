
/*
PROCESO 1
1-Enviar mensaje a usuario
2-Definir el nº random--- ¿cuándo? AL cargar página
3-coger nº de usuario- al hacer click en el boton
4- comparaciones y enviar mensaje
-(esto una vez que ya tengo el valor de la usuaria)

PROCESO 2
1-contar el número de intentos


*/
/*

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
----------SI LO USO DEBERIA TENER Q USAR INNER.HTML TB
SE ME HA QUEDADO FANTASMA EL RETURN
} 

*/


'use strict'
function getRandomNumber (max) {
    return Math.ceil (Math.random()* max);
}
    const numberRandom= getRandomNumber(100);
    console.log (numberRandom);

    //me interesa el input y el boton

    const btn= document.querySelector("js-btn");
    const inputElement = document.querySelector (".js-input");
    const msj= document.querySelector (".js-msj");
    const msjCounter= document.querySelector (".js-counter");

const handleMsj = (event)  =>{
    event.preventDefault();
    const inputValue = parseInt(inputElement.value)
    console.log(inputElement.value);


    if(inputValue < 1 || inputValue > 100 ) {
        msj.innerHTML = "el n debe estar entre 1 y 100"
    }

else if (inputValue < numberRandom){
    msj.innerHTML = "es muy bajo"
}
else if (inputValue > numberRandom){
    msj.innerHTML = "el nº es muy alto"
} 
else {
    msj.innerHTML= "ganaste"
}

counter()
}


    
function  counter(){
  let cont = 0
  cont++;
  msjCounter.innerHTML = `El nº de intentos ${cont}` ;
    //let calcul = 0;
   // function calculate() {
    //return `Nº de intentos: ` + (calcul += 1);
    }
function handleClick (event){
    event.preventDefault();
     handleMsj();
      counter();
}

 btn.addEventListener("click", handleClick);