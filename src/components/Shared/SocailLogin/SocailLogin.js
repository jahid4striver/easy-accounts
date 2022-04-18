import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase';
import google from '../../../images/google.png'


const SocailLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleGoogleSignIn= ()=>{

        signInWithGoogle();
    }
    return (
        <div className='text-center'>
        <button onClick={handleGoogleSignIn} style={{ backgroundColor: '#ffe400' }} className='p-3 border-0'> <img width='30px' src={google} alt="" /> Sign In With Google</button>     
        </div>
    );
};

export default SocailLogin;