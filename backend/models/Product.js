const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    name: { type: String, required: true },
    date: { type: Date, default: Date.now },
    author: { type: String, required: true },
    owner: { type: Types.ObjectId, ref: "User" },
});

module.exports = model("Product", schema);