export const createCards = (pokemon, data2) => {
    const wrapper = document.getElementById("wrapper");

    // Create HTML elements
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

    const pokemonHeight = document.createTextNode(data2.height);
    pokemonHeightP.appendChild(pokemonHeight);
    pokemonCardDescription.appendChild(pokemonHeightP);

    // Pokémon weight
    const pokemonWeightTitleText = document.createTextNode("Weight");
    pokemonWeightTitle.appendChild(pokemonWeightTitleText);
    pokemonCardDescription.appendChild(pokemonWeightTitle);

    const pokemonWeight = document.createTextNode(data2.weight);
    pokemonWeightP.appendChild(pokemonWeight);
    pokemonCardDescription.appendChild(pokemonWeightP);

    // Adding items to the wrapper
    pokemonCard.appendChild(pokemonCardImage);
    pokemonCard.appendChild(pokemonCardDescription);
    wrapper.appendChild(pokemonCard);
};

export default createCards;