const service = require("./service");

async function main() {
    try {
        const result = await service.getPeople("R");
        const names = [];
        //
        console.time("Com for");

        for (let index = 0; index < result.results.length; index++) {
            const pessoa = result.results[index];
            names.push(pessoa.name);
        }
        console.timeEnd("Com for");

        console.time("Com for in");
        for (let key in result.results) {
            const pessoa = result.results[key];
            names.push(pessoa.name);
        }
        console.timeEnd("Com for in");

        console.time("Com for of");
        for (const pessoa of result.results) {
            names.push(pessoa.name);
        }
        console.timeEnd("Com for of");

        console.log("Nomes:", names);
    } catch (error) {
        console.error("Erro interno", error);
    }
}

main();
