// CLASS 04
const getDataFromLocalStorage = localStorage?.getItem('customer') ? JSON.parse(localStorage.getItem('customer')) : null;

const getTokenFromLocalStorage = localStorage?.getItem('token') ? localStorage?.getItem('token') : null;

// console.log('getDataFromLocalStorage -> ', getDataFromLocalStorage);
// console.log('Token -> ', getDataFromLocalStorage.token);
// console.log('Token -> ', getTokenFromLocalStorage);

export const config = {
  headers: {
    // Authorization: `Bearer ${getDataFromLocalStorage.token}`,
    // Authorization: `${ getDataFromLocalStorage.token}`,
    // Authorization: `${getDataFromLocalStorage !== null ? getDataFromLocalStorage?.token : ""}`,
    Authorization: `${getTokenFromLocalStorage !== null ? getTokenFromLocalStorage : ""}`,
    Accept: "application/json",
  }
};