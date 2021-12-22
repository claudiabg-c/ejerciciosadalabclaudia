'use strict';

const select = document.querySelector('.select');
const nameOp = document.querySelector('.name');
const lastName = document.querySelector('.lastname');
const phone = document.querySelector('.phone');

const data = [
    {
        name: 'Claudia',
        lastName: 'Berrocal',
        phone: '689123456'
    },
    {
        name: 'Alfonso',
        lastName: 'Sanz',
        phone: '678912345'
    },
    {
        name: 'Patricia',
        lastName: 'Torres',
        phone: '667891234'
    }
];

function handleClickBtn() {
    if (select.value === 'claudia') {
        nameOp.value = `${data[0].name}`;
        lastName.value = `${data[0].lastName}`;
        phone.value = `${data[0].phone}`;
    } else if (select.value === 'alfonso') {
        nameOp.value = `${data[1].name}`;
        lastName.value = `${data[1].lastName}`;
        phone.value = `${data[1].phone}`;
    } else {
        nameOp.value = `${data[2].name}`;
        lastName.value = `${data[2].lastName}`;
        phone.value = `${data[2].phone}`;
    }
}

select.addEventListener('change', handleClickBtn);