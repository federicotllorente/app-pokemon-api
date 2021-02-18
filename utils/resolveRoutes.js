const resolveRoutes = route => {
    // There're no more than 9999 pokémons in total
    if(route.length <= 4) {
        // If the route is the root ("/") or a pokémon ID
        let validRoute;
        if(route === "/") {
            validRoute = route;
        } else {
            validRoute = "/:id";
        }
        return validRoute;
    }
    return `/${route}`;
};

export default resolveRoutes;