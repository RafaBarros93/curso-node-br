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
