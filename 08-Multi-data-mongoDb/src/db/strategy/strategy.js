class NotImplementedExeption extends Error {
    constructor() {
        super("Not Implemented Eception");
    }
}

class Icrud {
    create(item = {}) {
        throw new NotImplementedExeption();
    }

    read(query = {}) {
        throw new NotImplementedExeption();
    }

    update(id, item = {}) {
        throw new NotImplementedExeption();
    }

    remove(id) {
        throw new NotImplemented();
    }
}

class MongoDb extends Icrud {
    constructor() {
        super();
    }

    create(item = {}) {
        console.log("Item criado!");
    }
}

class Context {
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

const context = new Context(new MongoDb());

context.create();
