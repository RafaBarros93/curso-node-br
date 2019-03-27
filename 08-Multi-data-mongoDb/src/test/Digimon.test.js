const chai = require("chai");
const Digimon = require("../digimons/Digimon");
const ContextStrategy = require("../db/strategy/base/ContextStrategy");
const Connection = require("../db/connection/Connection");
const context = new ContextStrategy(new Digimon());

describe("Digimon teste", () => {
    beforeEach(async () => {
        await new Connection().connect();
    });

    it("se verifica conexão?", async () => {
        let result;

        try {
            result = await new Connection().isConnect();
        } catch (error) {
            result = error;
        }

        chai.expect(result).to.be.equal("Connect");
    });

    it("se insere digimon ?", async () => {
        let result;

        const digimon = [
            {
                name: "Garurumon",
                power: 2500,
                race: "wolf"
            },
            {
                name: "Agumon",
                power: 3500,
                race: "Dino"
            }
        ];

        try {
            result = await context.create(digimon);
        } catch (error) {}

        chai.expect(result).to.be.true;
    });
});
