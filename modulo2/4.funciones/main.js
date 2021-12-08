'use strict'

//exercise 1

function multiplicación (a, b){
    return a*b;
}

console.log(multiplicación(2, 4));

//exercise 2

function media (a, b, c, d){
    return (a + b + c +d)/4;
}

console.log(media(2, 4, 3, 5));

//exercise 3

function calcularIva(precio, IVA){

const totalIva = precio * IVA/100;
const precioFinal = precio + totalIva;

return `Precio sin IVA: ${precio}, IVA: ${IVA}% y total: ${precioFinal}`;
}    

console.log(calcularIva(10, 21));

//exercise 4

function isPair(num){
    if(num % 2 === 0){
    return true;
    }
    else{
    return false;
    }
}

console.log(isPair(8));

//exercises 5 and 6

function getEl(elementClass){

    const element = document.querySelector(`.${elementClass}`)

    if(!element){
        return `No existe ningún elemento con clase, id o tag llamado ${elementClass}`;
        }

    return element
}

const elementThing = getEl('thng');
const elementOther = getEl('other');

console.log(elementThing);
console.log(elementOther);

//exercise 7

const numberParragraph = getEl('number').innerHTML;

console.log(numberParragraph);

function Pair(numberParragraph){
    if(numberParragraph % 2 === 0){
    return 'Este número es par';
    }
    else{
    return 'Este número es impar';
    }
}

console.log(Pair(numberParragraph));

//exercise 8

let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}

console.log(secretLetter); 
console.log(mySecretLetter()); 

//exercise 9

const multiplication = (a, b) => a*b;

console.log(multiplication(3, 4));

const media2 = (a, b, c, d) => (a + b + c +d)/4;

console.log(media2(6, 4, 3, 5));

//exercise 10

function box (borderbox, width, padding, border) {
    const boxSize = (borderbox ? width - padding * 2 - border * 2 : width);
    const totalSize = (borderbox ? width : width + padding * 2 + border * 2);

    return `El ancho del contenido es: ${boxSize} y el ancho total de la caja es: ${totalSize}`;
}

console.log(box(false, 80, 10, 5));