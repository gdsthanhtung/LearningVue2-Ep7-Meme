import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://apiluc.zendvn.com/api/',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default axiosInstance;
