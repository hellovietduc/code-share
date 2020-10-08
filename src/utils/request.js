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

const postCode = code => request.post('/code', { code })
  .then(res => {
    const { url } = res.data;
    if (res.status !== 201 || !url) {
      return console.error('post code failed:', res.data);
    }
    return url;
  })
  .catch(err => {
    console.error('post code error:', err);
  });

export {
  getCode,
  postCode
};
