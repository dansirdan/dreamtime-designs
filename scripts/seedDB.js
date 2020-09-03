const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Arts collection and inserts the Arts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dreamtimedesigns"
);

const artSeed = [
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/1.png",
  },
  {
    title: "tbd",
    medium: "portraits",
    size: "tbd",
    path: "/images/2.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/3.png",
  },
  {
    title: "tbd",
    medium: "acrylics",
    size: "tbd",
    path: "/images/4.png",
  },
  {
    title: "tbd",
    medium: "acrylics",
    size: "tbd",
    path: "/images/5.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/6.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/7.png",
  },
  {
    title: "tbd",
    medium: "portraits",
    size: "tbd",
    path: "/images/8.png",
  },
  {
    title: "tbd",
    medium: "portraits",
    size: "tbd",
    path: "/images/9.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/10.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/11.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/12.png",
  },
  {
    title: "tbd",
    medium: "pastels",
    size: "tbd",
    path: "/images/13.png",
  },
  {
    title: "tbd",
    medium: "portraits",
    size: "tbd",
    path: "/images/14.png",
  },
  {
    title: "tbd",
    medium: "portraits",
    size: "tbd",
    path: "/images/15.png",
  },
  {
    title: "tbd",
    medium: "portraits",
    size: "tbd",
    path: "/images/16.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/17.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/18.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/19.png",
  },
  {
    title: "tbd",
    medium: "acrylics",
    size: "tbd",
    path: "/images/20.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/21.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/22.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/23.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/24.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/25.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/26.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/27.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/28.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/29.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/30.png",
  },
  {
    title: "tbd",
    medium: "portraits",
    size: "tbd",
    path: "/images/31.png",
  },
  {
    title: "tbd",
    medium: "pastels",
    size: "tbd",
    path: "/images/32.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/33.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/34.png",
  },
  {
    title: "tbd",
    medium: "watercolor",
    size: "tbd",
    path: "/images/35.png",
  },
  {
    title: "tbd",
    medium: "portraits",
    size: "tbd",
    path: "/images/36.png",
  },
];

// const mediums = [  "watercolor",
// "pastels",
// "acrylics",
// "portraits",
// "cards"];

// for (let i = 0; i < 10; i++) {

//   let rng = Math.floor(Math.random() * mediums.length)

//   artSeed.push( {
//     title: "test" + 1,
//     medium: mediums[rng],
//     size: "4x5",
//     description: "Lorem Ipsum",
//     path: "/images/0.png"
//   })
// }

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
