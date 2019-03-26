const Icrud = require("../strategy/interfaces/ICrud");

class MongoDb extends Icrud {
    constructor() {
        super();
    }

    create(item = {}) {
        console.log("Item criado!");
    }
}

module.exports = MongoDb;
