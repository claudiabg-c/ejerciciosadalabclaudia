'use strict';

const body = document.querySelector('.imgs');
const madrid = document.querySelector('.madrid');
const paris = document.querySelector('.paris');
const newYork = document.querySelector('.newyork');
const select = document.querySelector('.select');

const madridImg = ['https://img.static-af.com/images/meta/IDname/CITY-MAD-1?aspect_ratio=2:1&max_width=1920', 'https://a.cdn-hotels.com/gdcs/production133/d1207/7ad2d7f0-68ce-11e8-8a0f-0242ac11000c.jpg', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/34/00/95/community-of-madrid.jpg?w=700&h=500&s=1']

const parisImg = ['https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?wid=2880&hei=1280&fmt=jpeg&crop=9,336,2699,1200&anchor=1358,936&qlt=75,0&fit=wrap&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72', 'https://media.traveler.es/photos/61377a978f298b3a7a5bdbaa/master/pass/98405.jpg', 'https://cdn2.civitatis.com/francia/paris/guia/paris-museum-pass.jpg']

const newYorkImg = ['https://viajes.nationalgeographic.com.es/medio/2019/03/20/empire-state-building_9922760a_500x782.jpg', 'https://mindfultravelbysara.com/wp-content/uploads/2015/05/nueva-york-imprescindibl.jpg', 'https://e00-telva.uecdn.es/assets/multimedia/imagenes/2020/02/03/15807466851737.jpg']

function showMadrid() {
    for (const eachImg of madridImg) {
        const img = document.createElement('img');
        body.appendChild(img);
        img.setAttribute('src', `${eachImg}`)
        img.style.width = '300px';
        img.style.height = '300px';
        img.style.objectFit = 'cover';
    }
};

function showParis() {
    for (const eachImg of parisImg) {
        const img = document.createElement('img');
        body.appendChild(img);
        img.setAttribute('src', `${eachImg}`)
        img.style.width = '300px';
        img.style.height = '300px';
        img.style.objectFit = 'cover';
    }
};

function showNewYork() {
    for (const eachImg of newYorkImg) {
        const img = document.createElement('img');
        body.appendChild(img);
        img.setAttribute('src', `${eachImg}`)
        img.style.width = '300px';
        img.style.height = '300px';
        img.style.objectFit = 'cover';
    }
};

function handleSelectCity() {
    body.innerHTML = '';
    if (select.value === 'madrid') {
        showMadrid();
    } else if (select.value === 'paris') {
        showParis();
    } else {
        showNewYork();
    }
};

select.addEventListener('change', handleSelectCity);
