import axios from 'axios';

import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosConfig';

const addProductToCart = async (cart) => {
  const response = await axios.post(`${base_url}/user/create-cart`, cart, config);

  if (response.data) return response.data;
};

const getUserAllOwnCarts = async () => {
  const response = await axios.get(`${base_url}/user/cart`, config);
  if (response.data) return response.data;
};

const removeProductFromOwnCart = async (cartItem) => {
  // const response = await axios.delete(`${base_url}/user/remove-product-from-own-cart`, {
  //   cartItemId: cartItem?.cartItemId
  // }, config);
  const response = await axios.delete(`${base_url}/user/remove-product-from-own-cart/${cartItem}`, config);
  if (response.data) return response.data;
};

const cartService = {
  addProductToCart,
  getUserAllOwnCarts,
  removeProductFromOwnCart,
};

export default cartService;