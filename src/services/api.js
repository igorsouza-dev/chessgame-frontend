import axios from 'axios';

const api = axios.create({
  baseURL: 'https://chess-back.herokuapp.com/',
});
export default api;
