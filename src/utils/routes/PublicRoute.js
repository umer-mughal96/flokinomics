
import React from 'react';
import { Navigate } from 'react-router-dom';


const PublicRoute = ({ children }) => {
    const isLogin = false;
    return (
        <>
            {
                !isLogin ?
                    children
                    :
                    <Navigate to='/'></Navigate>
            }
        </>

    );
};

export default PublicRoute;