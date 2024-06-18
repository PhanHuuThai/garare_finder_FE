import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
    const { auth } = useContext(AuthContext);

    // return auth.isAuthenticated ? children : <Navigate to="/login" />;
    return children
};

export default PrivateRoute;
