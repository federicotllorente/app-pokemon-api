const fetchData = require("./utils/fetchData");
const API = "https://pokeapi.co/api/v2/pokemon/";

fetchData(API).then(
    (data1) => {
        console.log("Name: " + data1.results[0].name);
        fetchData(data1.results[0].url).then(
            (data2) => {
                console.log("Type 1: " + data2.types[0].type.name);
                console.log("Type 2: " + data2.types[1].type.name);
                console.log("Weight: " + data2.weight);
                console.log("Height: " + data2.height);
                console.log("Ability 1: " + data2.abilities[0].ability.name);
                console.log("Ability 1: " + data2.abilities[1].ability.name);
            },
            () => {}
        );
    },
    (error1) => { console.error(error1); }
);
