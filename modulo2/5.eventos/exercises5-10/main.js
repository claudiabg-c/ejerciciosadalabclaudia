'use strict'

//exercise 5

document.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        document.querySelector('.body').style.backgroundColor = 'red';
    } else if (event.key === 'm') {
        document.querySelector('.body').style.backgroundColor = 'purple';
    } else {
        document.querySelector('.body').style.backgroundColor = 'white';
    }
})

//exercise 6

const form = document.querySelector('.form');
const formText = document.querySelector('.textform')

form.addEventListener('keyup', write);

function write(event) {
    formText.innerHTML = event.currentTarget.value;
}

//exercise 7

const button = document.querySelector('button');

button.addEventListener('click', () => button.classList.toggle('button'));

//exercise 8

const button2 = document.querySelector('.button2');

function click(event) {
    
const button = event.currentTarget;

button.classList.toggle('button');
}

button2.addEventListener('click', click);

//exercise 9

const teacherIsra = document.querySelector('.teacher--isra');
const teacherBarlos = document.querySelector('.teacher--tuerto');
const teacherNasi = document.querySelector('.teacher--nasi');

teacherIsra.addEventListener('click', changeClass);
teacherBarlos.addEventListener('click', changeClass);
teacherNasi.addEventListener('click', changeClass);

function changeClass(event) {

const selectedTeacher = event.currentTarget;
selectedTeacher.classList.toggle('teacher--selected');

const favorite = selectedTeacher.querySelector('.favorite');    
favorite.innerHTML = changeText(favorite.innerHTML);
}

function changeText(text) {
    if (text === 'Añadir') {
        text = 'Quitar'
    } else {
        text = 'Añadir'
    }
return text;
}

//exercise 10

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';
const elementFilm = document.querySelector('.film');
const buttonStart = document.querySelector('.start');
const sinopsis = document.querySelector('.sinopsis');

buttonStart.addEventListener('click', () => {
elementFilm.innerHTML = `<li class="inception">${inception}</li>
<li class="butterfly">${theButterFlyEffect}</li>
<li class="sunshine">${eternalSunshineOfTheSM}</li>
<li class="velvet">${blueVelvet}</li>
<li class="split">${split}</li>`

const inceptionSinopsis = elementFilm.querySelector('.inception');
inceptionSinopsis.addEventListener('click', () => {
sinopsis.innerHTML = `Dom Cobb (DiCaprio) es un experto en el arte de apropiarse, durante el sueño, de los secretos del subconsciente ajeno. La extraña habilidad de Cobb le ha convertido en un hombre muy cotizado en el mundo del espionaje, pero también lo ha condenado a ser un fugitivo y, por consiguiente, a renunciar a llevar una vida normal. Su única oportunidad para cambiar de vida será hacer exactamente lo contrario de lo que ha hecho siempre: la incepción, que consiste en implantar una idea en el subconsciente en lugar de sustraerla. Sin embargo, su plan se complica debido a la intervención de alguien que parece predecir cada uno de sus movimientos, alguien a quien sólo Cobb podrá descubrir.
`
console.log(inceptionSinopsis.innerHTML);

})

const butterflySinopsis = elementFilm.querySelector('.butterfly');
butterflySinopsis.addEventListener('click', () => {
sinopsis.innerHTML = `Evan Treborn, un joven que se está esforzando por superar unos dolorosos recuerdos de su infancia, descubre una técnica que le permite viajar atrás en el tiempo y ocupar su cuerpo de niño para poder cambiar el curso de su dolorosa historia. Sin embargo también descubre que cualquier mínimo cambio en el pasado altera enormemente su futuro.
`
console.log(butterflySinopsis.innerHTML);

})

const sunshineSinopsis = elementFilm.querySelector('.sunshine');
sunshineSinopsis.addEventListener('click', () => {
sinopsis.innerHTML = `Joel (Jim Carrey) recibe un terrible golpe cuando descubre que su novia Clementine (Kate Winslet) ha hecho que borren de su memoria todos los recuerdos de su tormentosa relación. Desesperado, se pone en contacto con el creador del proceso, el Dr. Howard Mierzwiak, para que borre a Clementine de su memoria. Pero cuando los recuerdos de Joel empiezan a desaparecer de pronto redescubre su amor por Clementine. Desde lo más profundo de su cerebro intentará parar el proceso.
`
console.log(sunshineSinopsis.innerHTML);
})

const velvetSinopsis = elementFilm.querySelector('.velvet');
velvetSinopsis.addEventListener('click', () => {
sinopsis.innerHTML = `Una mañana, Jeffrey Beaumont (Kyle MacLachlan), después de visitar a su padre en el hospital, encuentra entre unos arbustos una oreja humana. La guarda en una bolsa de papel y la lleva a la comisaría de policía, donde le atiende el detective Williams (George Dickerson), que es vecino suyo. Comienza así una misteriosa intriga que desvelará extraños sucesos acontecidos en una pequeña localidad de Carolina del Norte.
`
console.log(velvetSinopsis.innerHTML);

})

const splitSinopsis = elementFilm.querySelector('.split');
splitSinopsis.addEventListener('click', () => {
sinopsis.innerHTML = `A pesar de que Kevin (James McAvoy) le ha demostrado a su psiquiatra de confianza, la Dra. Fletcher (Betty Buckley), que posee 23 personalidades diferentes, aún queda una por emerger, decidida a dominar a todas las demás. Obligado a raptar a tres chicas adolescentes encabezadas por la decidida y observadora Casey (Anya Taylor-Joy), Kevin lucha por sobrevivir contra todas sus personalidades y la gente que le rodea, a medida que las paredes de sus compartimentos mentales se derrumban.
`
console.log(splitSinopsis.innerHTML);

})

})
