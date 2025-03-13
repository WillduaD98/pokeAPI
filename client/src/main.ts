// import './style.css';
// import PORT  from '../../server/src/server.ts';
// import { error } from 'console';
// import { URL } from '../../server/src/server.js';

const SERVER_BASE_URL="http://localhost:3001";

// // const API_KEY= "enfbbiF0b4Blac5SJVblc9N9OO0Zn8HIZbMlqHXz";


const pokemonImage = document.getElementById('pokemon-image') as HTMLImageElement;
const pokemonInput = document.getElementById('pokemonInput') as HTMLInputElement
const pokemonHeight = document.getElementById('pokemon-height') as HTMLSpanElement
const searchBtn  = document.getElementById('searchBtn')as HTMLButtonElement

console.log(pokemonImage, pokemonInput, pokemonHeight)

searchBtn.addEventListener('click', async () => {
    const pokemonName = pokemonInput.value;
    console.log(pokemonName)
    try {
        const response = await fetch(`${SERVER_BASE_URL}/api/pokemon/${pokemonName}`)

        if (!response.ok) {
            throw new Error("Pokemon no encontrado!");
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.error(`Error happen in the frontend ${error}`)
        
    }
});


// // * All necessary DOM elements selected
// const searchForm: HTMLFormElement = document.getElementById(
//    'search-form'
//  ) as HTMLFormElement;
// const searchInput: HTMLInputElement = document.getElementById(
//     'search-input'
//  ) as HTMLInputElement;
// const eventsContainer = document.getElementById(
//    'events-body'
//  ) as HTMLDivElement;
// const parksContainer = document.getElementById('parks') as HTMLDivElement;
// const searchHistoryContainer = document.getElementById(
//    'history'
//  ) as HTMLDivElement;
