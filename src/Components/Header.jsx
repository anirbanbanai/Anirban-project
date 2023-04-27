import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider ';

const Header = () => {
    const { user } = useContext(AuthContext);
    // console.log(user)
    const { logOut } = useContext(AuthContext);

    const logg = () => {
        logOut()
            .then(result => {
                const logg = result.user;
                console.log(logg)
            })
            .catch(error => error.message)
    }
    return (
        <div className='text-center'>
            <Link className='text-3xl font-semibold mr-3' to='/'>Home</Link>
            {!user && <Link className='text-3xl font-semibold mr-3' to='/login'>Login</Link>}
            <Link className='text-3xl font-semibold mr-3' to='/register'>Register</Link>

            {user && <button onClick={logg} className='btn bg-blue-600'>Log Out</button>}


            <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn btn-warning m-1">About me</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href='/'>My Home</a></li>
                    <li><Link to='/edu'>EDucatiopn</Link></li>
                    <li><Link to='/job'>JObliFe</Link></li>
                </ul>
            </div>
            <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="btn btn-success m-1">contact</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href='/'>My Home</a></li>
                    <li><Link to='/edu'>EDucatiopn</Link></li>
                    <li><Link to='/job'>JObliFe</Link></li>
                </ul>
            </div>
        </div>

    );
};

export default Header;