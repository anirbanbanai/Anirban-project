import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider ';

const Header = () => {
    const {user } = useContext(AuthContext);
    // console.log(user)
    const {logOut} = useContext(AuthContext);

    const logg = ()=>{
        logOut()
        .then(result =>{
            const logg = result.user;
            console.log(logg)
        })
        .catch(error =>error.message)
    }
    return (
        <div className='text-center'>
            <Link className='text-3xl font-semibold mr-3' to='/'>Home</Link>
           {!user && <Link className='text-3xl font-semibold mr-3' to='/login'>Login</Link>}
            <Link className='text-3xl font-semibold mr-3' to='/register'>Register</Link>

          { user &&  <button onClick={logg} className='btn bg-blue-600'>Log Out</button>}
        </div>
    );
};

export default Header;