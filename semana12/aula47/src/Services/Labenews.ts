import axios, { AxiosInstance } from 'axios';

const labenews: AxiosInstance = axios.create({
  baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/labenews',
});

export { labenews };
