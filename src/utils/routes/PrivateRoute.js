import { Flex } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
  const [width, setwidth] = useState(window.innerWidth)
  console.log("🚀 ~ file: PrivateRoute.js ~ line 13 ~ PrivateRoute ~ width", width)
  window.onresize = () => setwidth(window.innerWidth)

  const isLogin = true;
  return isLogin ? (

    { children }

  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoute;
