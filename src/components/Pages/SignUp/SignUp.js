import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../Firebase/Firebase';
import google from '../../../images/google.png'


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConPassword] = useState('');
    const [errors, setErrors]= useState('');
    const navigate= useNavigate()


    const [ createUserWithEmailAndPassword,user,loading,error,] = useCreateUserWithEmailAndPassword(auth);


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPassword = (e) => {
        setConPassword(e.target.value);
    }
if(user){
    navigate('/')
}
    const handleSubmit = (e) => {
        e.preventDefault();
        if(password!== conPassword){
          return  setErrors('Confirm Password Not Match');
        }
       createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='text-center'>
        <ToastContainer/>
        <div className='m-5'>
        <div style={{width: '32rem', borderRadius: '20px', border:' 1px solid #ffe400'}} className='p-5 mb-5 mx-auto'>
            <h2 className='fw-bold my-2'>Please Register</h2>
            <form onSubmit={handleSubmit}>
                <input onBlur={handleEmail} style={{ width: '26rem', outline:'0', border:'1px solid #ffe400' }} className='d-block p-3 mb-3' type="email" name="" id="" placeholder='Your Email' />
                <input onBlur={handlePassword} style={{ width: '26rem', outline:'0', border:'1px solid #ffe400' }} className='d-block p-3 mb-3' type="password" name="" id="" placeholder='Password' />
                <input onBlur={handleConfirmPassword} style={{ width: '26rem', outline:'0', border:'1px solid #ffe400' }} className='d-block p-3 mb-3' type="password" name="" id="" placeholder='Confirm Password' />
                <p className='text-danger fw-bold'>{errors}</p>
                <input style={{ width: '26rem', border:'0', backgroundColor:'#ffe400' }} className='d-block p-3 mb-3 mx-auto' type="submit" value="Register" />
            </form>
            <p>Have a Account? <Link style={{color:'tomato'}} className='fw-bold text-decoration-none' to='/login'>Login</Link></p>
            <div className='d-flex'>
                <div style={{border:'1px solid #ffe400', height:'1px'}} className='w-50'></div>
                <p className=''>or</p>
                <div style={{border:'1px solid #ffe400', height:'1px'}} className='w-50'></div>
            </div>
            <button style={{backgroundColor:'#ffe400'}} className='p-3 border-0'> <img width='30px' src={google} alt="" /> Sign In With Google</button>
        </div>
        </div>
    </div>
    );
};

export default SignUp;