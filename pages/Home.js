import { fetchingData } from "../utils/fetchData";
const API = "https://pokeapi.co/api/v2/pokemon/";

const Home = () => {
    wrapper.innerHTML = "";
    fetchingData(API);
};

export default Home;