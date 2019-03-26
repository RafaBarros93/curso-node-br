const chai = require("chai");
const assert = chai.assert;
const MongoDb = require("../db/strategy/mongodb");
const ContextStrategy = require("../db/strategy/base/ContextStrategy");

const context = new ContextStrategy(new MongoDb());

describe("Mongo teste", () => {
    beforeEach(async () => {
        await context.connect();
    });

    it("se verifica conexão?", async () => {
        const result = await context.isConnect();

        const expected = "Connect";
        assert.equal(result, expected);
    });
});
