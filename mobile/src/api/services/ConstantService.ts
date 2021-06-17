import axios from 'axios';

const ConstantService = axios.create({
  baseURL: 'http://192.168.0.104:3000',
});

export default ConstantService;