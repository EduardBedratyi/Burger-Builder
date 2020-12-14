import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-project-8c2a2.firebaseio.com/',
});

export default instance;
