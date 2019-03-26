const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/test",
    { useNewUrlParser: true },
    (error) => {
        if (!error) return;

        console.log("falha na conexâo!", error);
    }
);
const connection = mongoose.connection;
connection.once("open", () => console.log("database rodando!"));

setTimeout(() => {
    const state = connection.readyState;
    console.log("estados:", state);
}, 1000);

const digimonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    power: {
        type: Number,
        required: true
    },
    race: {
        type: String,
        required: true
    }
});

const model = mongoose.model("digimons", digimonSchema);

async function main(digmon = {}) {
    const result = await model.create(digmon);

    console.log("Result innsert", result);
}

main({ name: "Garurumon", power: 2500, race: "Dino" });
