import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner/LoadingSpinner';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    // console.log(children);

    if (loading) {
        return <LoadingSpinner />
    }

    if (!user) {
        return <Navigate to="/login"
            state={{ from: location }} replace />
    }
    return children;
};

export default RequireAuth;