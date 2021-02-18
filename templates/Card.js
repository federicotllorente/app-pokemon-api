const Card = () => {
    const view = `
        <div class="pokemon_card bulbasaur">
            <div class="pokemon_card__image" style="background-image: url(&quot;https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png&quot;);"></div>
            <div class="pokemon_card__description">
                <h3 class="pokemon_card__description__name">Bulbasaur</h3>
                <h4>Types</h4>
                <ul>
                    <li>–Grass</li>
                    <li>–Poison</li>
                </ul>
                <h4>Abilities</h4>
                <ul>
                    <li>–Overgrow</li>
                    <li>–Chlorophyll</li>
                </ul>
                <h4>Height</h4>
                <p>2'4 ft</p>
                <h4>Weight</h4>
                <p>15 lbs</p>
            </div>
        </div>
    `;
    return view;
};

export default Card;