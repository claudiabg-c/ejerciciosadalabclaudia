'user strict';

//exercise 2

const searchBox = document.querySelector('.searchbox');
const searchBtn = document.querySelector('.searchbtn');
const searchResult = document.querySelector('.searchresult');

function sendInfo() {
    searchResult.innerHTML = '';

    let search = searchBox.value;
    fetch(`https://swapi.py4e.com/api/people/?search=${search}`)
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

            if (data.next !== null) {
                return fetch(`${data.next}`)
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
                            if (data.next !== null) {
                                return fetch(`${data.next}`)
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
                                        if (data.next !== null) {
                                            return fetch(`${data.next}`)
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
                                                    if (data.next !== null) {
                                                        return fetch(`${data.next}`)
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
                                                                if (data.next !== null) {
                                                                    return fetch(`${data.next}`)
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


                                                                        })
                                                                };
                                                            })
                                                    };
                                                })
                                        };
                                    })
                            };
                        };
                    })
            };

        })
}

searchBtn.addEventListener("click", sendInfo);

//exercise 8

function printSearch() {
    localStorage.setItem('searchBox.value', JSON.stringify(searchBox.value));
}

const saved = JSON.parse(localStorage.getItem('searchBox.value'));
searchBox.value = saved;

if (saved !== null) {
    fetch(`https://swapi.py4e.com/api/people/?search=${saved}`)
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
            if (data.next !== null) {
                return fetch(`${data.next}`)
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
                            if (data.next !== null) {
                                return fetch(`${data.next}`)
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
                                        if (data.next !== null) {
                                            return fetch(`${data.next}`)
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
                                                    if (data.next !== null) {
                                                        return fetch(`${data.next}`)
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
                                                                if (data.next !== null) {
                                                                    return fetch(`${data.next}`)
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


                                                                        })
                                                                };
                                                            })
                                                    };
                                                })
                                        };
                                    })
                            };
                        };
                    })
            };

        })
}


searchBox.addEventListener("keyup", printSearch);

