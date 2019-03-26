const { get } = require("axios");
const baseUrl = `https://swapi.co/api/people`;

async function getPeople(name) {
    const url = `${baseUrl}/?search=${name}&format=json`;
    const response = await get(url);

    return response.data.results.map(mapeaPessoa);
}

function mapeaPessoa(item) {
    return {
        name: item.name,
        height: item.height
    };
}

module.exports = {
    getPeople
};
