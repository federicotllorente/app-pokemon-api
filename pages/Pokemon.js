import { fetchingData2 } from "../utils/fetchData";
// const API = "https://pokeapi.co/api/v2/pokemon/";

const Pokemon = hash => {
    wrapper.innerHTML = "";
    fetchingData2(`${API}${hash}/`);
};

export default Pokemon;