// This file is no longer necessary. Now, there's a function in Home.js.

export const createCards = (pokemon, data2, openedCard) => {
    const wrapper = document.getElementById("wrapper");
    // Making sure that the Pokémon doesn't exist already
    let existentPokemonCards = document.querySelectorAll(`.${pokemon.name}`);
    if(existentPokemonCards.length == 0) {
        // Create HTML elements
        const pokemonCardAnchor = document.createElement("a");
        const pokemonCard = document.createElement("div");
        const pokemonCardImage = document.createElement("div");
        const pokemonCardDescription = document.createElement("div");
        const pokemonNameH3 = document.createElement("h3");
        const pokemonTypesTitle = document.createElement("h4");
        const pokemonTypesUL = document.createElement("ul");
        const pokemonAbilitiesTitle = document.createElement("h4");
        const pokemonAbilitiesUL = document.createElement("ul");
        const pokemonHeightTitle = document.createElement("h4");
        const pokemonHeightP = document.createElement("p");
        const pokemonWeightTitle = document.createElement("h4");
        const pokemonWeightP = document.createElement("p");

        // Add the class names
        pokemonCard.classList.add("pokemon_card");
        pokemonCard.classList.add(pokemon.name);
        // pokemonCard.setAttribute("id", pokemon.name);
        pokemonCardImage.classList.add("pokemon_card__image");
        pokemonCardDescription.classList.add("pokemon_card__description");
        pokemonNameH3.classList.add("pokemon_card__description__name");

        // Pokémon name
        let pokemonNameText = pokemon.name;
        let pokemonNameTextCapitalized = pokemonNameText.charAt(0).toUpperCase() + pokemonNameText.slice(1);
        const pokemonName = document.createTextNode(pokemonNameTextCapitalized);
        pokemonNameH3.appendChild(pokemonName);
        pokemonCardDescription.appendChild(pokemonNameH3);

        // Pokémon types
        let types = data2.types;
        let x = 0;
        let pokemonTypesTitleText;

        for (let el of types) {
            x++;
            const pokemonTypesLI = document.createElement("li");
            let typeName = el.type.name;
            let typeNameCapitalized = typeName.charAt(0).toUpperCase() + typeName.slice(1);
            const pokemonTypesLIText = document.createTextNode(`–${typeNameCapitalized}`);
            pokemonTypesLI.appendChild(pokemonTypesLIText);
            pokemonTypesUL.appendChild(pokemonTypesLI);
        }

        if(x == 1) {
            pokemonTypesTitleText = document.createTextNode("Type");
        } else {
            pokemonTypesTitleText = document.createTextNode("Types");
        }

        pokemonTypesTitle.appendChild(pokemonTypesTitleText);
        pokemonCardDescription.appendChild(pokemonTypesTitle);
        pokemonCardDescription.appendChild(pokemonTypesUL);

        // Pokémon abilities
        let abilities = data2.abilities;
        let y = 0;
        let pokemonAbilitiesTitleText;

        for (let el of abilities) {
            y++;
            const pokemonAbilitiesLI = document.createElement("li");
            let abilityName = el.ability.name;
            let abilityNameCapitalized = abilityName.charAt(0).toUpperCase() + abilityName.slice(1);
            const pokemonAbilitiesLIText = document.createTextNode(`–${abilityNameCapitalized}`);
            pokemonAbilitiesLI.appendChild(pokemonAbilitiesLIText);
            pokemonAbilitiesUL.appendChild(pokemonAbilitiesLI);
        }

        if(y == 1) {
            pokemonAbilitiesTitleText = document.createTextNode("Ability");
        } else {
            pokemonAbilitiesTitleText = document.createTextNode("Abilities");
        }

        pokemonAbilitiesTitle.appendChild(pokemonAbilitiesTitleText);
        pokemonCardDescription.appendChild(pokemonAbilitiesTitle);
        pokemonCardDescription.appendChild(pokemonAbilitiesUL);

        // Pokémon height
        const pokemonHeightTitleText = document.createTextNode("Height");
        pokemonHeightTitle.appendChild(pokemonHeightTitleText);
        pokemonCardDescription.appendChild(pokemonHeightTitle);

        let pokemonHeight = data2.height / 10; // In meters
        let pokemonHeightFeet = pokemonHeight * 3.281;
        let pokemonHeightFeetRounded = Math.round(pokemonHeight * 3.281);
        let a1 = `${pokemonHeightFeet}`;
        let a2 = a1.substring(1);
        let a3 = `0${a2}`;
        let pokemonHeightInches = Math.round(a3 * 12);
        const pokemonHeightText = document.createTextNode(`${pokemonHeightFeetRounded}'${pokemonHeightInches} ft`);
        pokemonHeightP.appendChild(pokemonHeightText);
        pokemonCardDescription.appendChild(pokemonHeightP);

        // Pokémon weight
        const pokemonWeightTitleText = document.createTextNode("Weight");
        pokemonWeightTitle.appendChild(pokemonWeightTitleText);
        pokemonCardDescription.appendChild(pokemonWeightTitle);
        
        let pokemonWeight = data2.weight / 10; // In kgs
        let pokemonWeightPounds = Math.round(pokemonWeight * 2.205);
        const pokemonWeightText = document.createTextNode(`${pokemonWeightPounds} lbs`);
        pokemonWeightP.appendChild(pokemonWeightText);
        pokemonCardDescription.appendChild(pokemonWeightP);

        // Anchor properties
        const pokemonID = data2.id;
        pokemonCardAnchor.setAttribute("href", `#/${pokemonID}`);

        // Adding items to the wrapper
        pokemonCard.appendChild(pokemonCardImage);
        pokemonCard.appendChild(pokemonCardDescription);
        pokemonCardAnchor.appendChild(pokemonCard);
        wrapper.appendChild(pokemonCardAnchor);

        // Image
        let pokemonImageSRC;
        if(pokemonID > 0 && pokemonID <= 9) {
            pokemonImageSRC = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemonID}.png`;
        } else if(pokemonID >= 10 && pokemonID <= 99) {
            pokemonImageSRC = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${pokemonID}.png`;
        } else {
            pokemonImageSRC = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonID}.png`;
        }
        pokemonCardImage.style.backgroundImage = `url(${pokemonImageSRC})`;

        // Open/"closed" card styles
        let body = document.querySelector("body");
        let header = document.querySelector("header");
        if(openedCard) {
            // If the current page is a Pokémon one
            pokemonCard.classList.remove("pokemon_card");
            pokemonCard.classList.add("pokemon_card--open");
            body.classList.add("body--card_open");
            header.classList.add("header--card_open");
        } else {
            // If it's the Homepage or another page
            pokemonCard.classList.remove("pokemon_card--open");
            body.classList.remove("body--card_open");
            header.classList.remove("header--card_open");
            pokemonCard.classList.add("pokemon_card");
        }
    }
};

export default createCards;