import axios from 'axios';

import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosConfig';

const addProductToCart = async (cart) => {
  const response = await axios.post(`${base_url}/user/create-cart`, cart, config);

  if (response.data) return response.data;
};

const getAllOwnWishlists = async () => {
  const response = await axios.get(`${base_url}/user/all-own-wishlist`, config);
  if (response.data) return response.data;
};

const cartService = {
  addProductToCart,
};

export default cartService;