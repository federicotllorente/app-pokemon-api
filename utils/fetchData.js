// let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

export const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", url_api, true);
        xhttp.onreadystatechange = (() => {
            if(xhttp.readyState === 4) {
                if(xhttp.status === 200) {
                    resolve(JSON.parse(xhttp.responseText));
                } else {
                    reject(new Error("Error " + url_api));
                }
            }
        });
        xhttp.send();
    });
};

// module.exports = fetchData;
export default fetchData;
