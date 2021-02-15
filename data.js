import {fetchData} from "./utils/fetchData.js";
import {createCards} from "./utils/createCards.js";
const API = "https://pokeapi.co/api/v2/pokemon/";
let nextAPIurl;

const fetchingData = async (url_api) => {
    try {
        // Fetch the main data
        const data1 = await fetchData(url_api);
        let pokemonResult = data1.results;
        for(let pokemon of pokemonResult) {
            // Fetch the data of each pokemon
            const data2 = await fetchData(pokemon.url);
            // Create the cards with HTML
            createCards(pokemon, data2);
        }
        // For the new data when the user scroll until the bottom of the page
        nextAPIurl = data1.next;
        document.addEventListener('scroll', () => {
            let bodyHeight = document.body.offsetHeight;
            let scrollEnd = window.scrollY + window.innerHeight;
            if(scrollEnd == bodyHeight) {
                // API new fetch
                fetchingData(nextAPIurl);
            }
        });
    } catch(error) {
        console.error(error);
    }
};

fetchingData(API);