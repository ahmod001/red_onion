import { useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { localStorageHandler } from '../../assets/FakeData/FakeData';

const PrivateRoute = () => {
    const location = useLocation();
    const isUserLoggedIn = localStorageHandler('get', 'userInfo');

    return (
        isUserLoggedIn ? <Outlet />
            : <Navigate
                to='/login'
                state={{ from: location }} />
    )
};

export default PrivateRoute;