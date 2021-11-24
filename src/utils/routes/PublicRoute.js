
import React from 'react';
import { Navigate } from 'react-router-dom';
// import { isLogin } from '../utils';

const PublicRoute = ({ children }) => {
    const isLogin = false;
    return (

        !isLogin ?
            <>

                {children}
            </>
            : <Navigate to="/" />

    );
};

export default PublicRoute;