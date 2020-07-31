import axios from 'axios';

export default {
  getArt: function () {
    return axios.get('/api/art');
  }
}