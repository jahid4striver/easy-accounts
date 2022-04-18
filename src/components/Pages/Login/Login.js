import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase';
import SocailLogin from '../../Shared/SocailLogin/SocailLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, { replace: true });
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }




    return (
        <div className='text-center'>
            <div className='m-5'>
                <div style={{ width: '32rem', borderRadius: '20px', border: ' 1px solid #ffe400' }} className='p-5 mb-5 mx-auto'>
                    <h2 className='fw-bold my-2'>Please Login</h2>
                    <form onSubmit={handleSubmit}>
                        <input onBlur={handleEmail} style={{ width: '26rem', outline: '0', border: '1px solid #ffe400' }} className='d-block p-3 mb-3' type="email" name="email" id="" placeholder='Your Email' />
                        <input onBlur={handlePassword} style={{ width: '26rem', outline: '0', border: '1px solid #ffe400' }} className='d-block p-3 mb-3' type="password" name="password" id="" placeholder='Your Password' />
                        <input style={{ width: '26rem', border: '0', backgroundColor: '#ffe400' }} className='d-block p-3 mb-3 mx-auto' type="submit" value="Login" />
                    </form>
                    <p>Not Have a Account? <Link style={{ color: 'tomato' }} className='fw-bold text-decoration-none' to='/signup'>Register</Link></p>
                    <div className='d-flex'>
                        <div style={{ border: '1px solid #ffe400', height: '1px' }} className='w-50'></div>
                        <p className=''>or</p>
                        <div style={{ border: '1px solid #ffe400', height: '1px' }} className='w-50'></div>
                    </div>
                    <SocailLogin></SocailLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;