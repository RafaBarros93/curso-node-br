class NotImplementedExeption extends Error {
    constructor() {
        super("Not Implemented Eception");
    }
}

class Icrud {
    create(item = {}) {
        throw new NotImplementedExeption();
    }

    list(query = {}) {
        throw new NotImplementedExeption();
    }

    update(id, item = {}) {
        throw new NotImplementedExeption();
    }

    remove(id) {
        throw new NotImplemented();
    }

    connect() {
        throw new NotImplementedExeption();
    }
}

module.exports = Icrud;
