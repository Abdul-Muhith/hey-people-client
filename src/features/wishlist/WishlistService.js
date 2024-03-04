import axios from 'axios';

import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosConfig';

const addProductToWishlist = async (productId) => {
  const response = await axios.put(`${base_url}/product/wishlist`, {prodId: productId}, config);

  if (response.data) return response.data;
};

const getAllOwnWishlists = async () => {
  const response = await axios.get(`${base_url}/user/all-own-wishlist`, config);
  if (response.data) return response.data;
};

const wishlistService = {
  addProductToWishlist,
  getAllOwnWishlists,
};

export default wishlistService;