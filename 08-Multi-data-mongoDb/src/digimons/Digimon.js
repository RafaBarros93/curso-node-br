const Icrud = require("../db/strategy/interfaces/ICrud");
const Digimons = require("./Digimons.model");
const mongoose = require("mongoose");

class Digimon extends Icrud {
    constructor() {
        super();
        this._digimons = null;
        this._driver = null;
    }

    /**
     * @public
     * cria um digimon
     */
    async create(digimon = {}) {
        if (!digimon) return 400;

        await Digimons.insertMany(digimon);

        return true;
    }
}

module.exports = Digimon;
