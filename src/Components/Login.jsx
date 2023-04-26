import React, { useContext, useState } from 'react';
import { AuthContext } from './AuthProvider ';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const { logIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || ' ';

    const handleSubmit = event => {
        event.preventDefault()
        
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const logg = result.user;
                console.log(logg);
                form.reset();
                navigate(from, {replace:true})
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered"  />
                                <h1 className='text-xl font-bold text-red-700' onClick={()=>setShow(!show)}>{show ? 'Hide' : 'Show'}</h1>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                                <h2 className='text-red-600'>{error}</h2>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <h2>New to User? <Link to='/register'> Register</Link></h2>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;