import createCards from "./createCards";
let nextAPIurl;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4) {
                if(xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    reject(new Error("Error " + url_api));
                }
            }
        });
        xhttp.send();
    });
};

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

export default fetchingData;