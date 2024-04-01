import axios from 'axios';

import { base_url } from '../../utils/base_url';
import { config } from '../../utils/axiosConfig';

const getOwnProfile = async (id) => {
  const response = await axios.get(`${base_url}/user/${id}`, config);

  return response.data;
};

const updateOwnProfile = async (user) => {

  // const response = await axios.put(`${base_url}/user/edit-user`, {
  //TODO: এভাবে কাজ না করার কারণ হলো, ব্যাকএন্ডে আমরা firstname.firstname বলতে কিছু পাচ্ছি না। body মাসে সরাসরি একটা অবজেক্ট পাস করতে হবে।
    //   firstname: user.userData.firstname,
    //   lastname: user.userData.lastname,
    //   email: user.userData.email,
    //   role: user.userData.role,
    //   mobile: user.userData.mobile,
    //   password: user.userData.password,
    // }, config);
    // console.log('service after -> ', user);

  const response = await axios.put(`${base_url}/user/edit-user`, user, config);

  // console.log('profile service -> ', user);
  // const response = await axios.put(`${base_url}/user/edit-user`, user.data, user.config);

  // return response.data;
};

const profileService = {
  updateOwnProfile,
  getOwnProfile,
};

export default profileService;