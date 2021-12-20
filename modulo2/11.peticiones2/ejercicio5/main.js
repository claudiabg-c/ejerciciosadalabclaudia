'user strict';

const page = document.querySelector('body');
const inputTheme = document.querySelectorAll('.radio');

function selectTheme() {

    if (inputTheme[0].checked === true) {
        page.classList.add('light');
        page.classList.remove('dark');
        localStorage.setItem('light', JSON.stringify(inputTheme[0].checked));
        const savedLight = JSON.parse(localStorage.getItem('light'))
        const removeDark = localStorage.removeItem('dark')

    } else if (inputTheme[1].checked === true) {
        page.classList.add('dark');
        page.classList.remove('light');
        localStorage.setItem('dark', JSON.stringify(inputTheme[1].checked));
        const savedDark = JSON.parse(localStorage.getItem('dark'))
        const removeLight = localStorage.removeItem('light')

    }
}

function rememberTheme() {

    if (JSON.parse(localStorage.getItem('light')) === true) {
        page.classList.add('light')
        page.classList.remove('dark')

    } else if (JSON.parse(localStorage.getItem('dark')) === true) {
        page.classList.add('dark')
        page.classList.remove('light')
    }
}


for (const eachInput of inputTheme) {
    eachInput.addEventListener('click', selectTheme);
}

window.addEventListener('load', rememberTheme);