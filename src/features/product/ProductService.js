import axios from 'axios';

import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosConfig';

const getAllProducts = async () => {
  const response = await axios.get(`${base_url}/product/all-products`);
  if (response.data) return response.data;
};

// TODO: move to wishlist service
// const addProductToWishlist = async (productId) => {
//   const response = await axios.put(`${base_url}/product/wishlist`, {prodId: productId}, config);

//   if (response.data) return response.data;
// };

const productService = {
  getAllProducts,
};

export default productService;