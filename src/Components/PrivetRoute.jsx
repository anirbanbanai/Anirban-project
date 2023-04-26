import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider ';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const { user,loading } = useContext(AuthContext);
    if(user){
        return children;
    }
    if(loading){
        return <div className='text-center text-5xl '>Loading ......</div>
    }
    return <Navigate to='/login'  state={{from: location}} replace ></Navigate>
};

export default PrivetRoute;