const { deepEqual, ok } = require("assert");

const database = require("./database");
const DEFAULT_ITEM_CADASTRAR = { nome: "Flash", poder: "Speed", id: 1 };
const DEFAULT_ITEM_ATULIZAR = {
    nome: "Super-Homem",
    poder: "Super Força",
    id: 2
};

describe("Switch de manipulação de Herois", () => {
    before(async () => {
        await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
        await database.cadastrar(DEFAULT_ITEM_ATULIZAR);
    });

    it("deve pesquisar um Heroi na lista em si", async () => {
        const expected = DEFAULT_ITEM_CADASTRAR;
        const [resultado] = await database.listar(expected.id);
        deepEqual(resultado, expected);
    });

    it("Deve se cadastrar Herois,usando arquivos", async () => {
        const expected = DEFAULT_ITEM_CADASTRAR;
        const resultado = await database.cadastrar(DEFAULT_ITEM_CADASTRAR);
        const [actual] = await database.listar(DEFAULT_ITEM_CADASTRAR.id);

        deepEqual(actual, expected);
    });

    it("Deve Remover um heroi por id", async () => {
        const expected = true;
        const resultado = await database.remover(DEFAULT_ITEM_CADASTRAR.id);

        deepEqual(resultado, expected);
    });

    it("Deve atulizar um heroi por id", async () => {
        const expected = {
            ...DEFAULT_ITEM_ATULIZAR,
            nome: "Batman",
            poder: "Dinheiro"
        };
        const novoDado = {
            nome: "Batman",
            poder: "Dinheiro"
        };

        await database.atualizar(DEFAULT_ITEM_ATULIZAR.id, novoDado);
        const [resultado] = await database.listar(DEFAULT_ITEM_ATULIZAR.id);
        console.log("Resultado", resultado);
        deepEqual(resultado, expected);
    });
});
