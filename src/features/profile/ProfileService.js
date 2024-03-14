import axios from 'axios';

import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosConfig';

const getProducts = async () => {
  const response = await axios.get(`${base_url}/product/all-products`);

  return response.data;
};

const createProduct = async (product) => {
  const response = await axios.post(`${base_url}/product/`, product, config);

  return response.data;
};

const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}/product/${id}`, config);

  return response.data;
};

const updateOwnProfile = async (user) => {

  // const response = await axios.put(`${base_url}/user/edit-user`, {
    //   firstname: user.userData.firstname,
    //   lastname: user.userData.lastname,
    //   email: user.userData.email,
    //   role: user.userData.role,
    //   mobile: user.userData.mobile,
    //   password: user.userData.password,
    // }, config);
    // console.log('service after -> ', user);

    const response = await axios.put(`${base_url}/user/edit-user`, user, config);

  return response.data;
};

const profileService = {
  updateOwnProfile,
};

export default profileService;