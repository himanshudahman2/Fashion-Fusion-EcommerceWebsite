const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://media.istockphoto.com/id/1776475600/photo/indoor-portrait-of-a-stylish-man.jpg?s=2048x2048&w=is&k=20&c=O3l9mTqcSqP2_5sLgXRTiwE2fhda_g2J1TRaC3BtFnE=",
        set: (v) => {
            return v === "" ? "https://media.istockphoto.com/id/1776475600/photo/indoor-portrait-of-a-stylish-man.jpg?s=2048x2048&w=is&k=20&c=O3l9mTqcSqP2_5sLgXRTiwE2fhda_g2J1TRaC3BtFnE=" : v;
        },
    },
    price: Number,
    size: String,
});

const menListing = mongoose.model("menListing", menSchema);
module.exports = menListing;
