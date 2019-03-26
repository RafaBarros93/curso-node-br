const Commander = require("commander");
const Database = require("./database");
const Heroi = require("./heroi");
async function main() {
    Commander.version("v1")
        .option("-n, --nome [value]", "Nome do Heroi")
        .option("-p, --poder [value]", "Poder do Heroi")
        .option("-i, --id [value]", "Id do Heroi")
        .option("-c,--cadastrar", "Cadastrar um Heroi")
        .option("-l --listar", "Listar um Heroi")
        .option("-r --remover [value]", "Remove um Heroi pelo ID")
        .parse(process.argv);
    const heroi = new Heroi(Commander);

    try {
        /**
         * node cli.js --cadastrar params...
         * node cli.js -c -n Hulk -p Forca
         */
        if (Commander.cadastrar) {
            await Database.cadastrar(heroi);
            console.log("item cadastrado com sucesso!");
            return;
        }

        /**
         * node cli.js --listar
         * node cli.js -r
         * node cli.js -r 1
         */
        if (Commander.listar) {
            const id = Commander.listar;
            const result = await Database.listar(id);
            console.log(result);
            return;
        }

        /**
         * node cli.js --atualizar
         * node cli.js -u 1 -n papa
         * node cli.js -u 1 -n thor -p trovao
         */
        if (Commander.atualizar) {
            const id = Commander.atualizar;
            console.log("id", id);
            await Database.atualizar(id, heroi);
            console.log("item atualizado com sucesso!");
            return;
        }
        /**
         * node cli.js --remover
         * node cli.js -d 1
         */
        if (Commander.remover) {
            const id = Commander.remover;
            await Database.remover(id);
            console.log("item removido com sucesso!");
            return;
        }
    } catch (error) {
        console.error("DEU RUIM", error);
        return;
    }
}

main();
