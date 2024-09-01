const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const womenSchema = new Schema({
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
        default: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set: (v) => {
            return v === "" ? "https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v;
        },
    },
    price: Number,
    size: String,
});

const womenListing = mongoose.model("womenListing", womenSchema);
module.exports = womenListing;
