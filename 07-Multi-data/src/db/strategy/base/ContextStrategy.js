const ICrud = require("../interfaces/ICrud");

class ContextStrategy extends ICrud {
    constructor(strategy) {
        super();
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

module.exports = ContextStrategy;
