import galleryDB from "../resources/galleryDB.json"

export default {
  getAll: function (medium) {
    console.log(galleryDB);
    return galleryDB.filter(art => art.medium.includes(medium));
  },
  getOne: function (id) {
    return console.log(id);
  },
  getLatest: function () {
    return galleryDB[galleryDB.length-1];
  },
  sendEmail: function (messageObj) {
    return console.log(messageObj);
  },
};
