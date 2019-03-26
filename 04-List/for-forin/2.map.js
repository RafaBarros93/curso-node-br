const service = require("./service");

async function main() {
    try {
        const result = await service.getPeople("Darth");

        /*  result.results.forEach((element) => {
            name.push(element.name);

            console.log(name);
        }); */
        const names = result.results.map((pessoa) => pessoa.name);

        console.log("Nomes:", names);
    } catch (error) {
        console.error("Erro interno", error);
    }
}

main();
