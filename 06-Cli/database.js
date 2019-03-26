const { readFile, writeFile } = require("fs");
const { promisify } = require("util");

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

class DataBase {
    constructor() {
        this.NOME_ARQUIVO = "herois.json";
    }

    async obterArquivo() {
        const arquivo = await readFileAsync(this.NOME_ARQUIVO, "utf8");

        return JSON.parse(arquivo.toString());
    }

    async escreverArquivo(dados) {
        await writeFileAsync(this.NOME_ARQUIVO, JSON.stringify(dados));
        return true;
    }
    async cadastrar(heroi) {
        const dados = await this.obterArquivo();

        //workaround para simular um id
        const id = heroi.id <= 2 ? heroi.id : Date.now();
        const heroiComId = {
            ...heroi,
            id
        };

        return await this.escreverArquivo([...dados, heroiComId]);
    }

    async listar(id) {
        const dados = await this.obterArquivo();
        const dadosFiltrados = dados.filter((item) =>
            id ? item.id === id : true
        );

        return dadosFiltrados;
    }
    async remover(id) {
        if (!id) {
            return await this.escreverArquivo([]);
        }
        const dados = await this.obterDadosArquivos();
        console.log("id", id);
        const index = dados.findIndex((item) => item.id === parseInt(id));

        if (index === -1) {
            throw Error("Esse Heroi Não Existe");
        }
        dados.splice(index, 1);
        return await this.escreverArquivo(dados);
    }
    async atualizar(id, modify) {
        const dados = await this.obterDadosArquivos();
        const index = dados.findIndex((item) => item.id === parseInt(id));
        if (index === -1) {
            throw Error("Esse Heroi Não Existe");
        }
        const atual = dados[index];
        const objetoAtulizar = {
            ...atual,
            ...modify
        };

        dados.splice(index, 1);

        return await this.escreverArquivo([...dados, objetoAtulizar]);
    }
}
module.exports = new DataBase();
