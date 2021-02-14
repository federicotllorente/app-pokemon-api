// const fetchData = require("./utils/fetchData");
import {fetchData} from "./utils/fetchData.js";
const API = "https://pokeapi.co/api/v2/pokemon/";

const fetchingData = async (url_api) => {
    try {
        const data1 = await fetchData(url_api);
        let pokemonresult = data1.results;
        for (let pokemon of pokemonresult) {
            const data2 = await fetchData(pokemon.url);
            console.log(`Name: ${pokemon.name}`);
            let types = data2.types;
            let x = 0;
            for (let el of types) {
                x++;
                console.log(`Type ${x}: ${el.type.name}`);
            }
            console.log("Weight: " + data2.weight);
            console.log("Height: " + data2.height);
            let abilities = data2.abilities;
            let y = 0;
            for (let el of abilities) {
                y++;
                console.log(`Ability ${y}: ${el.ability.name}`);
            }
        }
    } catch(error) {
        console.error(error);
    }
};

console.log("Pokémon Information");
fetchingData(API);
