import {fetchData} from "./utils/fetchData.js";
import {createCards} from "./utils/createCards.js";
const API = "https://pokeapi.co/api/v2/pokemon/";

const fetchingData = async (url_api) => {
    try {
        const data1 = await fetchData(url_api);
        let pokemonresult = data1.results;
        let pokemonCount = 0;
        for (let pokemon of pokemonresult) {
            const data2 = await fetchData(pokemon.url);
            pokemonCount++;
            createCards(pokemon, data2, pokemonCount);
        }
    } catch(error) {
        console.error(error);
    }
};

fetchingData(API);