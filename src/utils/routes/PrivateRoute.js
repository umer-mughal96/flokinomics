import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {


  const isLogin = true;
  return (
    <>
      {
        isLogin ?
          children
          :
          <Navigate to='/signin'></Navigate>
      }
    </>
  );
};

export default PrivateRoute;
