const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mutationSchema = new Schema({
    string: { type: Array, required: true },
    isMutation: { type: Boolean, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Mutation", mutationSchema, "mutations");