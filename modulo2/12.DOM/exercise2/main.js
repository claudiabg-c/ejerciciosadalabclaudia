'use strict';

const body = document.querySelector('body');

for (let index = 0; index < 3; index++) {
    const img = document.createElement('img');
}

const select = document.createElement('select');

const selectACity = ['Selecciona una ciudad', 'Madrid', 'París', 'Nueva York']

for (const eachOption of selectACity) {
    const option = document.createElement('option');
    select.appendChild(option)
    const cities = document.createTextNode(eachOption);
    option.appendChild(cities);
    console.log(option);

    if (eachOption === 'Selecciona una ciudad') {
        option.classList.add('select')
    } else if (eachOption === 'Madrid') {
        option.classList.add('madrid')
    } else if (eachOption === 'París') {
        option.classList.add('paris')
    } else if (eachOption === 'Nueva York') {
        option.classList.add('newyork')
    }

}

body.appendChild(select);
