import axios from 'axios';

const api = axios.create({
  baseURL: 'http://chess-back.herokuapp.com/',
});
export default api;
