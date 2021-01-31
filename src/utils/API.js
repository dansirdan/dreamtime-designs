import galleryDB from "../resources/galleryDB.json";

export default {
  getAll: function (medium) {
    return galleryDB.filter((art) => art.medium.includes(medium));
  },
  getLatest: function () {
    return galleryDB[galleryDB.length - 1];
  },
  sendEmail: function (messageObj) {
    return console.log(messageObj);
  },
};
