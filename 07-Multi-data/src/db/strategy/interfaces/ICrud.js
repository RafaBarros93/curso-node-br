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

module.exports = Icrud;
