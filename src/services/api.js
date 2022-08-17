import axios from 'axios';

const api = axios.create({baseURL: 'http://10.111.143.242:3333' });

export default api;