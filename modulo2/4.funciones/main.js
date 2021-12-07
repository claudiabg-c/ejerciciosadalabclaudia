'use strict'

//exercise 1

function multiplicación (num1, num2){
    return num1*num2;
}

const num1 = 2;
const num2 = 4;

console.log(multiplicación(num1, num2));

//exercise 2

function media (num1, num2, num3, num4){
    return (num1 + num2 + num3 +num4)/4;
}

const num3 = 3;
const num4 = 5;

console.log(media(num1, num2, num3, num4));

//exercise 3

function calcularIva(precio, IVA){

const totalIva = precio * IVA/100;
const precioFinal = precio + totalIva;

return `Precio sin IVA: ${precio}, IVA: ${IVA}% y total: ${precioFinal}`;
}    

console.log(calcularIva(10, 21));

//exercise 4

function isPair(num){
    if(num%2 ===0){
    return true;
    }
    else{
    return false;
    }
}

console.log(isPair(30));

//exercise 5

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

//exercise 6


