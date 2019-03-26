const { getPeople } = require("./service");

class Reduce {
    async main() {
        try {
            const { results } = await getPeople("a");

            const pesso = results.map((item) => parseInt(item.height));

            const somapesos = pesso.reduce(
                (accumulator, currentValue) => accumulator + currentValue
            );

            console.log("A soma dos pessoa é:", somapesos);
        } catch (error) {
            console.error("Deu Ruim", error);
        }
    }

    async list() {
        try {
            const minhaLista = [["Rafael", "Lopes"], ["NodeBr", "BrazilJS"]];
            const total = minhaLista
                .reduce((accumulator, currentValue) => {
                    return accumulator.concat(currentValue);
                }, [])
                .join(",");
            console.log("Total:", total);
        } catch (error) {
            console.error("Deu Ruim", error);
        }
    }
}

const reduce = new Reduce();

reduce.main();

reduce.list();
