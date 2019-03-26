const Icrud = require("../strategy/interfaces/ICrud");
const mongoose = require("mongoose");

const STATUS = {
    0: "Disconect",
    1: "Connect",
    2: "Connected",
    3: "Disconect"
};

class MongoDb extends Icrud {
    constructor() {
        super();
        this._digimons = null;
        this._driver = null;
    }

    /**
     * @public
     * Valida sé está conectado
     */
    async isConnect() {
        const state = STATUS[this._driver.readyState];

        if (state == "Connect") return true;

        if (state !== "Connected") return true;

        await new Promise((resolve) => setTimeout(resolve, 1000));

        return STATUS[this._driver.readyState];
    }

    /**
     * @public
     * Define um modelo
     */
    defineModel() {
        const digimons = new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            power: {
                type: Number,
                required: true
            },
            race: {
                type: String,
                required: true
            }
        });

        this._digimons = mongoose.model("digimons", digimons);
    }

    /**
     * @public
     * Faz uma conexão
     */
    connect() {
        mongoose.connect(
            "mongodb://localhost:27017/test",
            { useNewUrlParser: true },
            (error) => {
                if (!error) return;

                console.log("falha na conexâo!", error);
            }
        );
        const connection = mongoose.connection;
        this._driver = connection;
        connection.once("open", () => console.log("database rodando!"));
    }

    /**
     * @public
     * cria um digimon
     */
    async create(digimon = {}) {
        const result = await model.create(digmon);

        console.log("Result innsert", result);
    }
}

module.exports = MongoDb;
