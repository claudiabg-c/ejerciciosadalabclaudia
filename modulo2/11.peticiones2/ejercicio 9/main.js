'user strict';

const img = document.querySelector('img');

fetch('https://api.thecatapi.com/v1/images/search?format=json&mime_types=gif', {
    headers: {
        "api_key": "b244fec7-c9c9-4cb2-ac3a-ff6893f4d645",
    }
})
    .then(response => response.json())
    .then(data => {
        img.src = data[0].url;
        console.log(data);
    });
