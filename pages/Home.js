import getData from "../utils/getData";
// import getHash from "../utils/getHash";
const urlAPI = "https://pokeapi.co/api/v2/pokemon/";

const Home = async () => {
    const getPokemons = async (myAPI) => {
        // Fetch the Pokémons data
        const data = await getData(myAPI);
        const pokemonResults = data.results;
        for (let pokemonResult of pokemonResults) {
            // Fetch the data of a single Pokémon
            const pokemon = await getData(pokemonResult.url);
            // Making sure that the Pokémon doesn't exist already
            let existentPokemonCards = document.querySelectorAll(`.${pokemon.name}`);
            if (existentPokemonCards.length == 0) {
                // Create the cards
                let pokemonNameText = pokemon.name;
                let pokemonNameTextCapitalized = pokemonNameText.charAt(0).toUpperCase() + pokemonNameText.slice(1);
                let pokemonID = pokemon.id;

                // Pokémon image
                let pokemonImageSRC;
                if (pokemonID > 0 && pokemonID <= 9) {
                    pokemonImageSRC = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemonID}.png`;
                } else if (pokemonID >= 10 && pokemonID <= 99) {
                    pokemonImageSRC = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${pokemonID}.png`;
                } else {
                    pokemonImageSRC = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonID}.png`;
                }

                // Types title
                let x = 0;
                for (const el of pokemon.types) { x++; }
                let pokemonTypesTitleText = x == 1 ? "Type" : "Types";

                // Abilities title
                let y = 0;
                for (const el of pokemon.abilities) { y++; }
                let pokemonAbilitiesTitleText = y == 1 ? "Ability" : "Abilities";

                // Pokémon height
                let pokemonHeight = pokemon.height / 10; // In meters
                let pokemonHeightFeet = pokemonHeight * 3.281;
                let pokemonHeightFeetRounded = Math.round(pokemonHeight * 3.281);
                let a1 = `${pokemonHeightFeet}`;
                let a2 = a1.substring(1);
                let a3 = `0${a2}`;
                let pokemonHeightInches = Math.round(a3 * 12);

                // Pokémon weight
                let pokemonWeight = pokemon.weight / 10; // In kgs
                let pokemonWeightPounds = Math.round(pokemonWeight * 2.205);

                wrapper.innerHTML += `
                    <a href="#/${pokemonID}">
                        <div id="${pokemonID}" class="pokemon_card ${pokemon.name}">
                            <div class="pokemon_card__image" style="background-image: url(${pokemonImageSRC});"></div>
                            <div class="pokemon_card__description">
                                <h3 class="pokemon_card__description__name">${pokemonNameTextCapitalized}</h3>
                                <h4>${pokemonTypesTitleText}</h4>
                                <ul>
                                    ${pokemon.types.map(el => `
                                        <li>–${el.type.name.charAt(0).toUpperCase() + el.type.name.slice(1)}</li>
                                    `).join("")}
                                </ul>
                                <h4>${pokemonAbilitiesTitleText}</h4>
                                <ul>
                                    ${pokemon.abilities.map(el => `
                                        <li>–${el.ability.name.charAt(0).toUpperCase() + el.ability.name.slice(1)}</li>
                                    `).join("")}
                                </ul>
                                <h4>Height</h4>
                                <p>${pokemonHeightFeetRounded}'${pokemonHeightInches} ft</p>
                                <h4>Weight</h4>
                                <p>${pokemonWeightPounds} lbs</p>
                            </div>
                        </div>
                    </a>
                `;
            }
        }
        let nextAPIurl = data.next;
        // If the user scrolls down at the very bottom of the page
        document.addEventListener('scroll', () => {
            let bodyHeight = document.body.offsetHeight;
            let scrollEnd = window.scrollY + window.innerHeight;
            if (scrollEnd == bodyHeight) {
                seePokemons(nextAPIurl);
            }
        });
    };

    // If there are not Pokémons yet, fetch the data and show the first Pokémons
    // If there are Pokémons, fetch the new data and then show them
    const seePokemons = newUrlAPI => {
        let pokemonsYet = document.querySelectorAll(".pokemon_card");
        if (pokemonsYet.length == 0) {
            getPokemons(urlAPI);
        } else {
            getPokemons(newUrlAPI);
        }
    };
    seePokemons();
};

export default Home;