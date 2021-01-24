let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = "https://pokeapi.co/api/v2/pokemon/";

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = function() {
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }
        } else {
            const error = new Error("Error " + url_api);
            return callback(error, null);
        }
    };
    xhttp.send();
}

// Calls the API (all characters)
fetchData(API, (error1, data1) => {
    if(error1) {
        return console.error(error1);
    }
    // Looks for the Pokémon no.1 data
    fetchData(data1.results[0].url, (error2, data2) => {
        if(error2) {
            return console.error(error2);
        }
        // Show the data
        console.log("Name: " + data1.results[0].name);
        console.log("Type 1: " + data2.types[0].type.name);
        console.log("Type 2: " + data2.types[1].type.name);
        console.log("Weight: " + data2.weight);
        console.log("Height: " + data2.height);
        console.log("Ability 1: " + data2.abilities[0].ability.name);
        console.log("Ability 1: " + data2.abilities[1].ability.name);
    });
});
