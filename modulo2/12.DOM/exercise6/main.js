'use strict'

const body = document.querySelector('.body');

body.style.margin = '0';
body.style.margin = '0';
body.style.fontFamily = 'chalkboard', 'Arial', 'san - serif';
body.style.backgroundColor = 'black';
body.style.color = 'white';
body.style.paddingLeft = '20px';


for (let index = 0; index < 100; index++) {
    const section = document.createElement('section')
    const paragraph = document.createElement('p');
    const select = document.createElement('select');

    const text = document.createTextNode('He aprendido bien cómo funcionan los bucles.');

    const colours = ['Blanco', 'Azul', 'Rojo', 'Verde', 'Amarillo', 'Rosa'];

    select.style.fontFamily = 'chalkboard', 'Arial', 'san - serif';
    select.style.backgroundColor = 'white';
    select.style.color = 'black';
    select.style.paddingLeft = '20px';

    for (const eachColour of colours) {
        const options = document.createElement('option');
        select.appendChild(options);
        const paintColours = document.createTextNode(eachColour);
        options.appendChild(paintColours);
    };

    body.appendChild(section)
    section.appendChild(paragraph);
    section.appendChild(select);
    paragraph.appendChild(text);

    function handleColour() {
        if (select.value === 'Blanco') {
            section.style.color = 'white';
        } else if (select.value === 'Azul') {
            section.style.color = 'cyan'
        } else if (select.value === 'Rojo') {
            section.style.color = 'red'
        } else if (select.value === 'Verde') {
            section.style.color = 'lightgreen'
        } else if (select.value === 'Amarillo') {
            section.style.color = 'yellow'
        } else {
            section.style.color = 'pink'
        }
    }

    select.addEventListener('change', handleColour)
}

