import {fetchData} from "./utils/fetchData.js";
import {createCards} from "./utils/createCards.js";
const API = "https://pokeapi.co/api/v2/pokemon/";
let nextAPIurl;

const fetchingData = async (url_api) => {
    try {
        const data1 = await fetchData(url_api);
        let pokemonresult = data1.results;
        for (let pokemon of pokemonresult) {
            const data2 = await fetchData(pokemon.url);
            createCards(pokemon, data2);
        }
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