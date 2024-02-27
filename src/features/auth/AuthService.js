import axios from 'axios';

import { base_url } from '../../utils/base_url';
// import { config } from '../../utils/axiosConfig';

const userRegistration = async (userData) => {
  // const response = await axios.post(``, userData);
  const response = await axios.post(`${base_url}/user/register`, userData);

  if (response?.data) {
    return response.data;
  }
};

  // if (response?.data) {
    // localStorage.setItem('user', JSON.stringify(response?.data));
  // }
  // return response.data;

const userLogin = async (userData) => {
  const response = await axios.post(`${base_url}/user/login`, userData);

  if (response?.data) {
    // TODO: work with localStorage on add Case
    return response.data;
  }
};

// const getOrders = async () => {
//   const response = await axios.get(`${base_url}/user/get-orders`, config);

//   return response.data;
// };

const authService = {
  userRegistration,
  userLogin,
};

export default authService;