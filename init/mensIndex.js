const mongoose = require("mongoose");
const initMenData = require("./mensData.js");
const MenListing = require("../schema/mens.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/FashionFusion";


mongoose.connect(MONGO_URL)
  .then(() => {
    console.log("Connected to DB");
    initDB();
  })
  .catch((err) => {
    console.log("Connection error:", err);
  });

const initDB = async () => {
  await MenListing.deleteMany({});
  await MenListing.insertMany(initMenData.mensData);
  console.log("Data was initialized");
};
