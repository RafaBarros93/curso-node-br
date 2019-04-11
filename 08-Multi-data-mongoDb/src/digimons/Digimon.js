const Icrud = require("../db/strategy/interfaces/ICrud");
const Digimons = require("./Digimons.model");

class Digimon extends Icrud {
    constructor() {
        super();
        this._digimons = Digimons;
    }

    /**
     * @public
     * Cria um digimon
     */
    async create(digimon = {}) {
        if (!digimon) return { status: 400, message: "Objeto vázio!" };

        await this._digimons.insertMany(digimon);

        return true;
    }

    /**
     * @public
     * Atualiza um digimon
     */
    async update(id, digimon = {}) {
        if (!id && !digimon) return 400;

        await this._digimons.update(
            { _id: id },
            {
                $set: {
                    name: digimon.name,
                    power: digimon.power,
                    race: digimon.race
                }
            }
        );

        return true;
    }

    /**
     * @public
     * Deleta um digimon
     */
    async remove(id) {
        try {
            await this._digimons.remove({ _id: id });
        } catch (error) {}

        return true;
    }
    /**
     * @public
     * Lista os digimons
     */
    async list(query = {}) {
        let list;

        try {
            list = await this._digimons.findById(query);
        } catch (error) {}

        return list;
    }
}

module.exports = Digimon;
