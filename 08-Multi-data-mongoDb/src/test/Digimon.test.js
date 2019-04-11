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

    it("se atualiza um digimon ?", async () => {
        let result;

        const data = {
            name: "WarGreymon",
            power: 85000,
            race: "Dragon"
        };

        try {
            result = await context.update("5c9b8189ed62c03ce4838c3a", data);
        } catch (error) {}

        chai.expect(result).to.be.true;
    });

    it("se remove um digimon?", async () => {
        let result;

        try {
            result = await context.remove("5c9b8189ed62c03ce4838c39");
        } catch (error) {}

        chai.expect(result).to.be.true;
    });

    it("se lista um digimon pelo _id?", async () => {
        let result;

        const query = {
            _id: "5c9b8666d89970464f8e063d"
        };

        try {
            result = await context.list(query);
        } catch (error) {}

        const { power, race } = result;

        chai.expect(power).to.be.equal(3500);
        chai.expect(race).to.be.equal("Dino");
    });
});
