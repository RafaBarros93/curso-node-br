const ICrud = require("../interfaces/ICrud");

class Context extends ICrud {
    constructor(strategy) {
        this._database = strategy;
    }

    create(item = {}) {
        return this._database.create(item);
    }

    read(query = {}) {
        return this._database.read(item);
    }

    update(id, item = {}) {
        return this._database.update(id, item);
    }

    remove(id) {
        return this._database.remove(id, item);
    }
}

module.exports = Context;
