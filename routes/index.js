import Header from "../templates/Header";
import Error404 from "../templates/Error404";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
    "/": Home,
    "/:id": Pokemon
}

const router = async () => {
    const header = null || document.querySelector("header");
    const wrapper = null || document.getElementById("wrapper");

    header.innerHTML = await Header();
    // This is the current Hash
    let hash = getHash();
    // Redirecting to the Hash
    let route = await resolveRoutes(hash);

    let render;
    if(routes[route]) {
        render = routes[route];
        await render(hash);
    } else {
        // Reset the styles
        let body = document.querySelector("body");
        let header = document.querySelector("header");
        // let pokemonCards = document.querySelectorAll("pokemon_card--open");
        body.classList.remove("body--card_open");
        header.classList.remove("header--card_open");
        // pokemonCards.classList.remove("pokemon_card--open");
        // pokemonCards.classList.add("pokemon_card");
        // Show the error 404
        render = Error404;
        wrapper.innerHTML = await render();
    }
};

export default router;