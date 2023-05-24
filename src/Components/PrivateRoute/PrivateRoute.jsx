import React, { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(!false);
    const location = useLocation();

    return (
        isUserLoggedIn ? <Outlet />
            : <Navigate to={{ pathname: '/login', state: { from: location } }} />
    )
};

export default PrivateRoute;