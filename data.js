const fetchData = require("./utils/fetchData");
const API = "https://pokeapi.co/api/v2/pokemon/";

const fetchingData = async (url_api) => {
    try {
        const data1 = await fetchData(url_api);
        const data2 = await fetchData(data1.results[0].url);
        console.log("Name: " + data1.results[0].name);
        console.log("Type 1: " + data2.types[0].type.name);
        console.log("Type 2: " + data2.types[1].type.name);
        console.log("Weight: " + data2.weight);
        console.log("Height: " + data2.height);
        console.log("Ability 1: " + data2.abilities[0].ability.name);
        console.log("Ability 1: " + data2.abilities[1].ability.name);
    } catch(error) {
        console.error(error);
    }
};

console.log("Pokémon Information");
fetchingData(API);
