const mongoose = require("mongoose");

const DigimonsSchema = new mongoose.Schema({
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
    },
    createAt: {
        type: Date,
        default: Date.now
    }
});

const Digimons = mongoose.model("digimons", DigimonsSchema);

module.exports = Digimons;
