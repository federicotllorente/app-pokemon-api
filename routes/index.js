import Header from "../templates/Header";
import Card from "../templates/Card";
import CardOpen from "../templates/CardOpen";
import Error404 from "../templates/Error404";
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";

const routes = {
    "/": Home,
    "/:id": Pokemon
}

const router = async () => {
    const header = null || document.querySelector("header");
    const wrapper = null || document.getElementById("wrapper");
    header.innerHTML = await Header();
};

export default router;