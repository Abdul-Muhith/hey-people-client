import axios from 'axios';

// import { base_url } from '../../utils/base_url';
// import { config } from '../../utils/axiosConfig';

const userRegistration = async (userData) => {
  const response = await axios.post(``, userData);

  if (response?.data) {
    return response.data;
  }
};

// const userRegistration = async (user) => {
//   const response = await axios.post(`${base_url}/user/admin-login`, user);
//   // console.log('authservice -> ', response.data);

//   if (response?.data) {
//     localStorage.setItem('user', JSON.stringify(response?.data));
//   }

//   return response.data;
// };

// const login = async (user) => {
//   const response = await axios.post(`${base_url}/user/admin-login`, user);
//   // console.log('authservice -> ', response.data);

//   if (response?.data) {
//     localStorage.setItem('user', JSON.stringify(response?.data));
//   }

//   return response.data;
// };

// const getOrders = async () => {
//   const response = await axios.get(`${base_url}/user/get-orders`, config);

//   return response.data;
// };

const authService = {
  userRegistration,
};

export default authService;