const mongoose = require("mongoose");
const initWomenData = require("./womensData.js");
const WomenListing = require("../schema/womens.js"); 

const MONGO_URL = "mongodb://127.0.0.1:27017/FashionFusion";

main()
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await WomenListing.deleteMany({});
  await WomenListing.insertMany(initWomenData.womensData);
  console.log("Data was initialized");
};

initDB();
