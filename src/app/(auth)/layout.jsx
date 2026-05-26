import Navbar from '../../components/shared/navbar';
import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default AuthLayout;