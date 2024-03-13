import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children }) => {
  const getTokenFromLocalStorage = JSON.parse(localStorage.getItem("customer"));

  // console.log('PrivateRoutes TOKEN -> ', getTokenFromLocalStorage?.token);

  return getTokenFromLocalStorage?.token !== undefined
    ? children
    : (<Navigate to='/account/login' replace={ true } />);
};