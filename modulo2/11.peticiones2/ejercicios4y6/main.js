'user strict';

const allInputs = document.querySelectorAll('.js-input');
const searchText = document.querySelector('.searchtext');

function handleKeyUp() {
    const data = {};
    for (const eachInput of allInputs) {
        const id = eachInput.id;
        const value = eachInput.value;
        data[id] = value;
        console.log(data);
        searchText.innerHTML += eachInput.value + ' ';

    }
    localStorage.setItem('data', JSON.stringify(data))
};

for (const eachInput of allInputs) {
    eachInput.addEventListener('keyup', handleKeyUp);
};

const initialDataText = localStorage.getItem('data');


if (initialDataText !== null) {
    const initialDataObject = JSON.parse(initialDataText);
    for (const item in initialDataObject) {
        const input = document.querySelector(`#${item}`);
        input.value = initialDataObject[item];
        searchText.innerHTML += input.value + ' ';

    }
}

