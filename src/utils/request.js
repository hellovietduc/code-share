import axios from 'axios';
import config from '../config.json';

const request = axios.create(config.axios);

const getCode = hash => request.get(`/code/${hash}`)
  .then(res => {
    const { code } = res.data;
    if (res.status !== 200 || !code) {
      return console.error('get code failed:', res.data);
    }
    return code;
  })
  .catch(err => {
    console.error('get code error:', err);
  });

export default getCode;
