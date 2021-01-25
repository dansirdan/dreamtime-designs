// {
//     title: "test" + 1,
//     medium: [[mediums[rng],
//], ],     size: "4x5",
//     description: "Lorem Ipsum",
//     path: "/images/0.png"
//   }
const mediums = ["watercolor", "pastels", "acrylics", "portraits", "cards"];

// TO DO: add functionality to have multiple mediums on an image
const gallery = [
  {
    title: "Dreaming of Scotland",
    medium: ["watercolor"],
    size: '13 3/4" x 10 1/2"',
    path: "/images/1.png",
  },
  {
    title: "First Grandchild",
    medium: ["portraits"," watercolor"],
    size: '13 1/2" x 10 1/2"',
    path: "/images/2.png",
  },
  {
    title: "Eilean Donan Castle",
    medium: ["watercolor"],
    size: '13 3/4" x 9 3/4"',
    path: "/images/3.png",
  },
  {
    title: "Highland Living",
    medium: ["acrylics"],
    size: '20 x 15 1/2"',
    path: "/images/4.png",
  },
  {
    title: "Sligachan Bridge",
    medium: ["acrylics"],
    size: '20 x 15 1/2"',
    path: "/images/5.png",
  },
  {
    title: "Doune Castle",
    medium: ["watercolor"],
    size: '10" x 14"',
    path: "/images/6.png",
  },
  {
    title: "Barn Owl",
    medium: ["watercolor"],
    size: '13" x 8 1/2"',
    path: "/images/7.png",
  },
  {
    title: "Second Grandchild",
    medium: ["portraits"],
    size: '10 1/2" x 13 1/2"',
    path: "/images/8.png",
  },
  {
    title: "Young Girl",
    medium: ["portraits"," watercolor"],
    size: '15" x 11"',
    path: "/images/9.png",
  },
  {
    title: "Bald Eagle",
    medium: ["watercolor","birds-of-prey"],
    size: '22" x 15"',
    path: "/images/10.png",
  },
  {
    title: "Red Tailed Hawk",
    medium: ["watercolor","birds-of-prey"],
    size: '15" x 10 3/4"',
    path: "/images/11.png",
  },
  {
    title: "Peregrine Falcon",
    medium: ["watercolor","birds-of-prey"],
    size: '22" x 15"',
    path: "/images/12.png",
  },
  {
    title: "Old Man of Storr",
    medium: ["pastels"],
    size: '27" x 19"',
    path: "/images/13.png",
  },
  {
    title: "Cousins",
    medium: ["portraits"," watercolor"],
    size: '13" x 10"',
    path: "/images/14.png",
  },
  {
    title: "Christmas Twins I",
    medium: ["portraits"," watercolor"],
    size: '13" x 10"',
    path: "/images/15.png",
  },
  {
    title: "Christmas Twins II",
    medium: ["portraits"," watercolor"],
    size: '13" x 10"',
    path: "/images/16.png",
  },
  {
    title: "Kyoo",
    medium: ["watercolor","cats"],
    size: '13" x 10"',
    path: "/images/17.png",
  },
  {
    title: "Melani",
    medium: ["watercolor","cats"],
    size: '13 1/2" x 10 1/2"',
    path: "/images/18.png",
  },
  {
    title: "Shab",
    medium: ["watercolor","cats"],
    size: '16" x 11 1/2"',
    path: "/images/19.png",
  },
  {
    title: "Judy's Koi",
    medium: ["acrylics"],
    size: '15 1/2" x 20"',
    path: "/images/20.png",
  },
  {
    title: "Poppies",
    medium: ["watercolor","flowers"],
    size: '7" x 9"',
    path: "/images/21.png",
  },
  {
    title: "Iris",
    medium: ["watercolor","flowers"],
    size: '10 1/2" x 14"',
    path: "/images/22.png",
  },
  {
    title: "Rifle Falls",
    medium: ["watercolor"],
    size: '14" x 10 1/2"',
    path: "/images/23.png",
  },
  {
    title: "White Thistle",
    medium: ["watercolor","flowers"],
    size: '10 1/2" x 6 1/2"',
    path: "/images/24.png",
  },
  {
    title: "Daisies",
    medium: ["watercolor","flowers"],
    size: '10 1/2" x 7"',
    path: "/images/25.png",
  },
  {
    title: "Baby Deers",
    medium: ["watercolor"],
    size: '13 1/2" x 10 1/2"',
    path: "/images/26.png",
  },
  {
    title: "Black Eyed Susans",
    medium: ["watercolor","flowers"],
    size: '14" x 8 1/2"',
    path: "/images/27.png",
  },
  {
    title: "Mont St Michel I",
    medium: ["watercolor"],
    size: '10 1/2" x 13"',
    path: "/images/28.png",
  },
  {
    title: "Passage",
    medium: ["watercolor"],
    size: '10" x 7"',
    path: "/images/29.png",
  },
  {
    title: "Mont St Michel II",
    medium: ["watercolor"],
    size: '14" x 10 1/2"',
    path: "/images/30.png",
  },
  {
    title: "Portrait Study",
    medium: ["portraits"," watercolor"],
    size: '10 1/2" x 10 1/2"',
    path: "/images/31.png",
  },
  {
    title: "Pompeii",
    medium: ["pastels"],
    size: '9" x 11 1/2"',
    path: "/images/32.png",
  },
  {
    title: "Church of San Giorgio Maggiore",
    medium: ["watercolor","venice"],
    size: '13" x 9 3/4"',
    path: "/images/33.png",
  },
  {
    title: "Basilica di Santa Maria",
    medium: ["watercolor","venice"],
    size: '13" x 9 3/4"',
    path: "/images/34.png",
  },
  {
    title: "Venice Canals",
    medium: ["watercolor","venice"],
    size: '10" x 13 3/4"',
    path: "/images/35.png",
  },
  {
    title: "Denver Powwow I",
    medium: ["portraits","pastels"],
    size: '9" x 12"',
    path: "/images/36.png",
  },
  {
    title: 'Great Horned Owl',
    medium: [ 'watercolor', 'birds-of-prey' ],
    size: '10 1/2" x 14"',
    path: '/images/37.jpg'
  },
  {
    title: 'Portrait Study II',
    medium: [ 'watercolor', 'portraits' ],
    size: '13" x 10"',
    path: '/images/38.jpg'
  },
  {
    title: 'Baby Portrait',
    medium: [ 'watercolor', 'portraits' ],
    size: '20" x 15"',
    path: '/images/39.jpg'
  },
  {
    title: 'Scotland Lochs',
    medium: [ 'watercolor' ],
    size: '10 1/2" x 14 1/2"',
    path: '/images/40.jpg'
  },
  {
    title: 'Maroon Bells',
    medium: [ 'watercolor' ],
    size: '10 1/2" x 14 1/2"',
    path: '/images/41.jpg'
  },
  {
    title: 'The Cullin Moutntains',
    medium: [ 'pastel' ],
    size: '27 "x 19"',
    path: '/images/42.jpg'
  },
  {
    title: 'Texas Grasslands',
    medium: [ 'watercolor' ],
    size: '10 1/2" x 14 1/2"',
    path: '/images/43.jpg'
  },
  {
    title: 'Eastern Point Lighthouse',
    medium: [ 'watercolor' ],
    size: '14" x 10"',
    path: '/images/44.jpg'
  },
  {
    title: 'Assisi',
    medium: [ 'watercolor' ],
    size: '14 1/2" x 10 1/2"',
    path: '/images/45.jpg'
  },
  {
    title: 'Grand Canyon',
    medium: [ 'acrylic' ],
    size: '16" x 11 1/2"',
    path: '/images/46.jpg'
  },
  {
    title: 'Winston',
    medium: [ 'watercolor' ],
    size: '14 1/2" x 10 1/2"',
    path: '/images/47.jpg'
  },
  {
    title: 'Gus',
    medium: [ 'watercolor' ],
    size: '14 1/2" x 10 1/2"',
    path: '/images/48.jpg'
  },
  {
    title: 'White Ranch Park',
    medium: [ 'watercolor' ],
    size: '14" x 10 1/2"',
    path: '/images/49.jpg'
  },
  {
    title: 'Sylvan Lake',
    medium: [ 'watercolor' ],
    size: '14" x 10"',
    path: '/images/50.jpg'
  },
  {
    title: 'Montana Fishing I',
    medium: [ 'watercolor' ],
    size: '14" x 10"',
    path: '/images/51.jpg'
  },
  {
    title: 'Sweet Magnolia',
    medium: [ 'watercolor' ],
    size: '14" x 10"',
    path: '/images/52.jpg'
  },
  {
    title: 'Montana Fishing II',
    medium: [ 'watercolor' ],
    size: '14" x 10"',
    path: '/images/53.jpg'
  },
  {
    title: 'Sammie',
    medium: [ 'watercolor', 'cats' ],
    size: '15" x 10"',
    path: '/images/54.jpg'
  },
  {
    title: 'Aspen Delight',
    medium: [ 'watercolor' ],
    size: '10" x 6"',
    path: '/images/55.jpg'
  },
  {
    title: 'Creede Mountain Range',
    medium: [ 'watercolor' ],
    size: '10" x 6"',
    path: '/images/56.jpg'
  },
  {
    title: 'Creede Ghost Mines',
    medium: [ 'watercolor' ],
    size: '14" x 10 1/2"',
    path: '/images/57.jpg'
  },
  {
    title: 'Wedding Bliss',
    medium: [ 'watercolor', 'portraits' ],
    size: '22" x 15"',
    path: '/images/58.jpg'
  },
  {
    title: 'Secret Courtyard',
    medium: [ 'watercolor' ],
    size: '14" x 10"',
    path: '/images/59.jpg'
  },
  {
    title: 'Wedding Promises',
    medium: [ 'watercolor', 'portraits' ],
    size: '14" x 10"',
    path: '/images/60.jpg'
  },
  {
    title: 'Baby Portrait II',
    medium: [ 'watercolor', 'portraits' ],
    size: '14" x 10"',
    path: '/images/61.jpg'
  },
  {
    title: "Monet's Garden",
    medium: [ 'acrylic' ],
    size: '12" x 10"',
    path: '/images/63.jpg'
  },
  {
    title: "Monet's Cat",
    medium: [ 'alcohol-ink' ],
    size: '8 1/2" x 11"',
    path: '/images/64.jpg'
  },
  {
    title: 'Giverny',
    medium: [ 'alcohol-ink' ],
    size: '8 1/2" x 11"',
    path: '/images/65.jpg'
  },
  {
    title: 'Swiss Alps',
    medium: [ 'watercolor' ],
    size: '14" x 10"',
    path: '/images/66.jpg'
  },
  {
    title: 'The Giverny Geese',
    medium: [ 'alcohol-ink' ],
    size: '8 1/2" x 11"',
    path: '/images/67.jpg'
  },
  {
    title: 'Cruising the Canals',
    medium: [ 'watercolor' ],
    size: '14" x 10"',
    path: '/images/68.jpg'
  },
  {
    title: 'Tulips',
    medium: [ 'watercolor flowers' ],
    size: '6 1/2" x 10"',
    path: '/images/70.jpg'
  },
  {
    title: 'South Clear Creek Falls',
    medium: [ 'watercolor' ],
    size: '19" x 15"',
    path: '/images/71.jpg'
  },
  {
    title: 'South Clear Creek Falls Bear',
    medium: [ 'watercolor' ],
    size: '14 1/2" x 10"',
    path: '/images/72.jpg'
  },
  {
    title: 'Love Lake',
    medium: [ 'watercolor' ],
    size: '10 1/2" x 6 1/2"',
    path: '/images/81.jpg'
  },
  {
    title: 'Homestead Wildflowers',
    medium: [ 'watercolor' ],
    size: '13 1/2" x 10 1/2"',
    path: '/images/74.jpg'
  },
  {
    title: 'Pinehurst Homestead',
    medium: [ 'watercolor' ],
    size: '13 1/2" x 10 1/2"',
    path: '/images/75.jpg'
  },
  {
    title: 'Imogen Pass',
    medium: [ 'watercolor' ],
    size: '7" x 10 1/2"',
    path: '/images/76.jpg'
  },
  {
    title: 'Cool Lake',
    medium: [ 'watercolor' ],
    size: '7" x 10 1/2"',
    path: '/images/77.jpg'
  },
  {
    title: 'Italian Mill',
    medium: [ 'acrylic' ],
    size: '13" x 10"',
    path: '/images/78.jpg'
  },
  {
    title: 'Garden Mushrooms',
    medium: [ 'watercolor' ],
    size: '11" x 10 1/2"',
    path: '/images/79.jpg'
  },
  {
    title: "Monet's Grand Allee",
    medium: [ 'watercolor' ],
    size: '10" x 7 1/2"',
    path: '/images/80.jpg'
  },
  {
    title: 'Winston',
    medium: [ 'watercolor' ],
    size: '14 1/2" x 10 1/2"',
    path: '/images/81.jpg'
  },
  {
    title: 'Resting Hummingbird',
    medium: [ 'acrylic' ],
    size: '14" x 18"',
    path: '/images/82.jpg'
  },
  {
    title: 'Future Cowboy',
    medium: [ 'watercolor' ],
    size: '14" x 10"',
    path: '/images/83.jpg'
  },
  {
    title: 'Portugal Cathedral',
    medium: [ 'watercolor' ],
    size: '10" x 12 1/2"',
    path: '/images/84.jpg'
  },
  {
    title: 'Pet Portrait',
    medium: [ 'watercolor' ],
    size: '9" x 12"',
    path: '/images/85.jpg'
  },
  {
    title: 'Canal Shadows',
    medium: [ 'watercolor' ],
    size: '9" x 7 1/2"',
    path: '/images/86.jpg'
  },
  {
    title: 'The Resting Cat in Oia',
    medium: [ 'watercolor' ],
    size: '10" x 6"',
    path: '/images/87.jpg'
  },
  {
    title: 'The Kiss',
    medium: [ 'watercolor', 'portraits' ],
    size: '20" x 15"',
    path: '/images/88.jpg'
  },
  {
    title: 'Sailing at Dusk',
    medium: [ 'pastel' ],
    size: '18" x 13"',
    path: '/images/89.jpg'
  }
];
