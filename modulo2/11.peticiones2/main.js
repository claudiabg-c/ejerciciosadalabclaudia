'user strict';

//exercise 2

const searchBox = document.querySelector('.searchbox');
const searchBtn = document.querySelector('.searchbtn');
const searchResult = document.querySelector('.searchresult');

function sendInfo() {
    searchResult.innerHTML = '';

    let search = searchBox.value;
    for (let i = 1; i < 8; i++) {
        fetch(`https://swapi.py4e.com/api/people/?search=${search}&page=${i}`)
            .then((response) => response.json())
            .then((data) => {

                let results = data['results'];
                for (let iData = 0; iData < data.length; iData++) {
                    let allResults = results[iData];
                    return allResults;
                };

                for (let index = 0; index < results.length; index++) {
                    let resultsPrinted = results[index];
                    searchResult.innerHTML += `<li><b>Nombre:</b> ${resultsPrinted.name}. <br><b>Género:</b> ${resultsPrinted.gender}</li><br>`;
                };

            });
    };
}

searchBtn.addEventListener("click", sendInfo);

//exercise 4

