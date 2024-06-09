import axios from 'axios';

const Request = axios.create({
  baseURL: 'https://easeback.onrender.com/',
  withCredentials: true,
});
//https://easeback.onrender.com
export default Request;
