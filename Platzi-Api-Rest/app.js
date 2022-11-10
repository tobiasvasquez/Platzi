const img = document.querySelector("img");
const button = document.querySelector('button');
const catContainer = document.getElementById('catContainer');
const body = document.querySelector('body')
const API = 'https://api.thecatapi.com/v1/images/search?limit=3';

async function getCat(){
    const response = await fetch(API);
    const data = await response.json();
    data.forEach(element => {
        const newCat = document.createElement('img');
        newCat.setAttribute('src', element.url);
        catContainer.append(newCat);
    });
}



window.addEventListener('load', getCat)

button.addEventListener('click', getCat);