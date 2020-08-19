import axios from 'axios';

export default {
  getAll: function (medium) {
    return axios.get('/api/art', {params: {medium}});
  },
  getOne: function (id) {
    return axios.get('/api/art/' + id)
  }
}