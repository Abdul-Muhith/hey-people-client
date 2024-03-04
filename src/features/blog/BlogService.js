import axios from 'axios';

import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosConfig';
import { removeTag } from '../../utils/removeTags';

// TODO: following admin panel

const getAllBlogs = async () => {
  const response = await axios.get(`${base_url}/blog`);

  if (response.data) return response.data;
};

const getSingleBlog = async (id) => {
  const response = await axios.get(`${base_url}/blog/${id}`, config);

  return response.data;
};

// TODO: last time of class 09

// const createBlog = async (blog) => {
//   const response = await axios.post(`${base_url}/blog/`, blog, config);

//   return response.data;
// };

// TODO: AFTER class 15 I REMOVE P TAG FROM DESCRIPTION

const createBlog = async (blog) => {
  const response = await axios.post(`${base_url}/blog/`, {
    // title: blog.title,
    // category: blog.category,
    ...blog,
    description: removeTag(blog.description),
  }, config);

  return response.data;
};


const deleteBlog = async (id) => {
  const response = await axios.delete(`${base_url}/blog/${id}`, config);

  return response.data;
};

// TODO: following colorService -> updateColor

const updateBlog = async (blog) => {
  const response = await axios.put(`${base_url}/blog/${blog.id}`, {
    title: blog.blogData.title,
    category: blog.blogData.category,
    description: removeTag(blog.blogData.description),
  }, config);

  return response.data;
};

const blogService = {
  getAllBlogs,
  getSingleBlog,
  // createBlog,
  // deleteBlog,
  // updateBlog,
};

export default blogService;