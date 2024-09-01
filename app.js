const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const menListing = require("./schema/mens");
const womenListing = require("./schema/womens");



// Connect to MongoDB
const MONGO_URL = "mongodb://127.0.0.1:27017/FashionFusion";

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("connected to db");
  } catch (err) {
    console.log(err);
  }
}

main();

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.get("/index", (req, res) => {
  res.render("index");
});

app.get("/index/mens", async (req, res) => {
  const menData = await menListing.find({});
  res.render("mens/mens", { menData });
});

app.get("/index/womens", async (req, res) => {
  const womenData = await womenListing.find({});
  res.render("womens/womens", { womenData });
});



app.get("/index/:id", async (req, res) => {
  const menlisting = await menListing.findById(req.params.id);
  res.render("mens/show", { menlisting });
});

app.get("/index/womens/:id", async (req, res) => {
  const womenItem = await womenListing.findById(req.params.id);
  res.render("womens/showwomen", { womenItem });
});


app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
