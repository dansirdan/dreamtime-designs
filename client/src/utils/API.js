import axios from 'axios';

export default {
  getAll: function () {
    return axios.get('/api/art');
  },
  getOne: function (id) {
    return axios.get('/api/art/' + id)
  }
}