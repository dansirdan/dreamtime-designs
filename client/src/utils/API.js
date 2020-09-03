import axios from "axios";

export default {
  getAll: function (medium) {
    return axios.get("/api/art", { params: { medium } });
  },
  getOne: function (id) {
    return axios.get("/api/art/" + id);
  },
  getLatest: function () {
    return axios.get("/api/art/latest");
  },
  sendEmail: function (messageObj) {
    return axios({
      method: 'post',
      url: "/api/sendemail",
      data: messageObj,
    });
  },
};
