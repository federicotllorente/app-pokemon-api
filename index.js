import router from "./routes/index";
import fetchingData from "./utils/fetchData";

window.addEventListener("load", router);

const API = "https://pokeapi.co/api/v2/pokemon/";
fetchingData(API);