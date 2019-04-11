const mongoose = require("mongoose");

class Connection {
    constructor() {
        this.STATUS = {
            0: "Disconect",
            1: "Connect",
            2: "Connected",
            3: "Disconect"
        };
    }

    /**
     * @public
     * Faz uma conexão
     */
    connect() {
        mongoose.connect(
            "mongodb+srv://admin:123@cluster0-kgkln.mongodb.net/digimons?retryWrites=true",
            { useNewUrlParser: true },
            (error) => {
                if (!error) return;

                console.log("falha na conexâo!", error);
            }
        );
    }

    /**
     * @public
     * Valida sé está conectado
     */
    async isConnect() {
        this.driver = mongoose.connection;

        const state = this.STATUS[this.driver.readyState];

        if (state == "Connect") return true;

        if (state !== "Connected") return true;

        await new Promise((resolve) => setTimeout(resolve, 1000));

        return this.STATUS[this.driver.readyState];
    }
}

module.exports = Connection;
