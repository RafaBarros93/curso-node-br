const ICrud = require("../interfaces/ICrud");

class ContextStrategy extends ICrud {
    constructor(strategy) {
        super();
        this._database = strategy;
    }

    create(item = {}) {
        return this._database.create(item);
    }

    list(query = {}) {
        return this._database.list(query);
    }

    update(id, item = {}) {
        return this._database.update(id, item);
    }

    remove(id) {
        return this._database.remove(id);
    }

    connect() {
        return this._database.connect();
    }

    isConnect() {
        return this._database.isConnect();
    }

    defineModel() {
        return this._database.defineModel();
    }
}

module.exports = ContextStrategy;
