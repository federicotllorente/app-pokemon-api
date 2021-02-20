const getData = async urlAPI => {
    try {
        const results = await fetch(urlAPI);
        // Parsing the results
        const data = results.json();
        return data;
    } catch {
        console.error(error);
    }
};

export default getData;