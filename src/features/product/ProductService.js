import axios from 'axios';

import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosConfig';

// const getAllProducts = async () => {
//   const response = await axios.get(`${base_url}/product/all-products`);
//   if (response.data) return response.data;
// };

const getAllProducts = async (data) => {
  // console.log('product service -> ', data);

  const brandQuery = `${ data?.brand ? `brand=${data?.brand}&&` : "" }`;
  const tagQuery = `${data?.tag ? `tags=${data?.tag}&&` : ""}`;
  const categoryQuery = `${data?.category ? `category=${data?.category}&&` : ""}`;
  const minPriceQuery = `${data?.minPrice ? `price[gte]=${data?.minPrice}&&` : ""}`;
  const maxPriceQuery = `${data?.maxPrice ? `price[lte]=${data?.maxPrice}&&` : ""}`;
  const sortQuery = `${data?.sort ? `sort=${data?.sort}&&` : ""}`;

  const response = await axios.get(`${base_url}/product/all-products?${brandQuery}${tagQuery}${categoryQuery}${minPriceQuery}${maxPriceQuery}${sortQuery}`);

  if (response.data) return response.data;
};

const rateProduct = async (userData) => {
  const response = await axios.put(`${base_url}/product/rate`, userData, config);

  return response.data;
}

// TODO: move to wishlist service
// const addProductToWishlist = async (productId) => {
//   const response = await axios.put(`${base_url}/product/wishlist`, {prodId: productId}, config);

//   if (response.data) return response.data;
// };

const getSingleProduct = async (id) => {
  const response = await axios.get(`${base_url}/product/${id}`, config);

  return response.data;
};

const productService = {
  getAllProducts,
  getSingleProduct,
  rateProduct,
};

export default productService;