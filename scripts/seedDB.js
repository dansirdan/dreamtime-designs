const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Arts collection and inserts the Arts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dreamtimedesigns"
);

const artSeed = [];

for (let i = 0; i < 10; i++) {
  artSeed.push( {
    title: "test" + 1,
    medium: i % 2 === 0 ? "watercolor" : "pastels",
    size: "4x5",
    description: "Lorem Ipsum",
    path: "/images/1.jpg"
  })
}

db.Art
  .remove({})
  .then(() => db.Art.collection.insertMany(artSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
