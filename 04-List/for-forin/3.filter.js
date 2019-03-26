const { getPeople } = require("./service");

class Filter {
    async main() {
        try {
            const { results } = await getPeople("a");

            const familiy = results.filter(
                (item) => item.name.toLowerCase().indexOf("skywalker") !== -1
            );

            const names2 = familiy.map((pessoa) => pessoa.name);

            console.log("Familia Skywalker:", names2);
        } catch (error) {
            console.error("Deu Ruim", error);
        }
    }
}
const filter = new Filter();

filter.main();
