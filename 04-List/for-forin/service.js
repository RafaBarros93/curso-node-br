const axios = require("axios");
const baseUrl = `https://swapi.co/api/people`;

async function getPeople(name) {
    const url = `${baseUrl}/?search=${name}&format=json`;
    const response = await axios.get(url);

    return response.data;
}

module.exports = {
    getPeople
};
