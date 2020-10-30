const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Arts collection and inserts the Arts below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dreamtimedesigns"
);

const artSeed = [
  {
    title: "Dreaming of Scotland",
    medium: ["watercolor"],
    size: '13 3/4" x 10 1/2"',
    path: "/images/1.jpg",
  },
  {
    title: "First Grandchild",
    medium: ["portraits","watercolor"],
    size: '13 1/2" x 10 1/2"',
    path: "/images/2.jpg",
  },
  {
    title: "Eilean Donan Castle",
    medium: ["watercolor"],
    size: '13 3/4" x 9 3/4"',
    path: "/images/3.jpg",
  },
  {
    title: "Highland Living",
    medium: ["acrylics"],
    size: '20 x 15 1/2"',
    path: "/images/4.jpg",
  },
  {
    title: "Sligachan Bridge",
    medium: ["acrylics"],
    size: '20 x 15 1/2"',
    path: "/images/5.jpg",
  },
  {
    title: "Doune Castle",
    medium: ["watercolor"],
    size: '10" x 14"',
    path: "/images/6.jpg",
  },
  {
    title: "Barn Owl",
    medium: ["watercolor"],
    size: '13" x 8 1/2"',
    path: "/images/7.jpg",
  },
  {
    title: "Second Grandchild",
    medium: ["portraits"],
    size: '10 1/2" x 13 1/2"',
    path: "/images/8.jpg",
  },
  {
    title: "Young Girl",
    medium: ["portraits","watercolor"],
    size: '15" x 11"',
    path: "/images/9.jpg",
  },
  {
    title: "Bald Eagle",
    medium: ["watercolor","birds-of-prey"],
    size: '22" x 15"',
    path: "/images/10.jpg",
  },
  {
    title: "Red Tailed Hawk",
    medium: ["watercolor","birds-of-prey"],
    size: '15" x 10 3/4"',
    path: "/images/11.jpg",
  },
  {
    title: "Peregrine Falcon",
    medium: ["watercolor","birds-of-prey"],
    size: '22" x 15"',
    path: "/images/12.jpg",
  },
  {
    title: "Old Man of Storr",
    medium: ["pastels"],
    size: '27" x 19"',
    path: "/images/13.jpg",
  },
  {
    title: "Cousins",
    medium: ["portraits","watercolor"],
    size: '13" x 10"',
    path: "/images/14.jpg",
  },
  {
    title: "Christmas Twins I",
    medium: ["portraits","watercolor"],
    size: '13" x 10"',
    path: "/images/15.jpg",
  },
  {
    title: "Christmas Twins II",
    medium: ["portraits","watercolor"],
    size: '13" x 10"',
    path: "/images/16.jpg",
  },
  {
    title: "Kyoo",
    medium: ["watercolor","cats"],
    size: '13" x 10"',
    path: "/images/17.jpg",
  },
  {
    title: "Melani",
    medium: ["watercolor","cats"],
    size: '13 1/2" x 10 1/2"',
    path: "/images/18.jpg",
  },
  {
    title: "Shab",
    medium: ["watercolor","cats"],
    size: '16" x 11 1/2"',
    path: "/images/19.jpg",
  },
  {
    title: "Judy's Koi",
    medium: ["acrylics"],
    size: '15 1/2" x 20"',
    path: "/images/20.jpg",
  },
  {
    title: "Poppies",
    medium: ["watercolor","flowers"],
    size: '7" x 9"',
    path: "/images/21.jpg",
  },
  {
    title: "Iris",
    medium: ["watercolor","flowers"],
    size: '10 1/2" x 14"',
    path: "/images/22.jpg",
  },
  {
    title: "Rifle Falls",
    medium: ["watercolor"],
    size: '14" x 10 1/2"',
    path: "/images/23.jpg",
  },
  {
    title: "White Thistle",
    medium: ["watercolor","flowers"],
    size: '10 1/2" x 6 1/2"',
    path: "/images/24.jpg",
  },
  {
    title: "Daisies",
    medium: ["watercolor","flowers"],
    size: '10 1/2" x 7"',
    path: "/images/25.jpg",
  },
  {
    title: "Baby Deers",
    medium: ["watercolor"],
    size: '13 1/2" x 10 1/2"',
    path: "/images/26.jpg",
  },
  {
    title: "Black Eyed Susans",
    medium: ["watercolor","flowers"],
    size: '14" x 8 1/2"',
    path: "/images/27.jpg",
  },
  {
    title: "Mont St Michel I",
    medium: ["watercolor"],
    size: '10 1/2" x 13"',
    path: "/images/28.jpg",
  },
  {
    title: "Passage",
    medium: ["watercolor"],
    size: '10" x 7"',
    path: "/images/29.jpg",
  },
  {
    title: "Mont St Michel II",
    medium: ["watercolor"],
    size: '14" x 10 1/2"',
    path: "/images/30.jpg",
  },
  {
    title: "Portrait Study",
    medium: ["portraits","watercolor"],
    size: '10 1/2" x 10 1/2"',
    path: "/images/31.jpg",
  },
  {
    title: "Pompeii",
    medium: ["pastels"],
    size: '9" x 11 1/2"',
    path: "/images/32.jpg",
  },
  {
    title: "Church of San Giorgio Maggiore",
    medium: ["watercolor","venice"],
    size: '13" x 9 3/4"',
    path: "/images/33.jpg",
  },
  {
    title: "Basilica di Santa Maria",
    medium: ["watercolor","venice"],
    size: '13" x 9 3/4"',
    path: "/images/34.jpg",
  },
  {
    title: "Venice Canals",
    medium: ["watercolor","venice"],
    size: '10" x 13 3/4"',
    path: "/images/35.jpg",
  },
  {
    title: "Denver Powwow I",
    medium: ["portraits","pastels"],
    size: '9" x 12"',
    path: "/images/36.jpg",
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
//     path: "/images/0.jpg"
//   })
// }

db.Art
  .deleteMany({})
  .then(() => db.Art.collection.insertMany(artSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
