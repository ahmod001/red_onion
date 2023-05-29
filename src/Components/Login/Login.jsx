import { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import { Fade } from '@mui/material';
import logo_dark from "../../assets/images/logo_dark.png";
import MassagePopup from '../MassagePopup/MassagePopup';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    // Authentication Error goes here 
    const [authenticationError, setAuthenticationError] = useState('');

    // Error Pop-up Handler
    const handleErrorPopup = () => {
        setAuthenticationError('')
    }

    return (
        <main className='h-screen'>
            {/* Show Error...
            If authentication fails */}
            <MassagePopup
                error={true}
                message={authenticationError}
                open={authenticationError !== ''}
                handleClose={handleErrorPopup} />

            <section className='container pt-14 sm:pt-10 px-4 m-auto space-y-12 sm:space-y-16'>
                {/* Brand Icon */}
                <img className='max-h-12 mx-auto sm:max-h-14'
                    src={logo_dark}
                    alt="red-onion" />

                {/* Form */}
                <div className='text-center space-y-4'>
                    <LoginForm isSignIn={isSignIn}
                        showError={setAuthenticationError} />

                    {/* Toggle Form */}
                    <span onClick={() => setIsSignIn(!isSignIn)} className='inline-block text-sm text-red-500'>

                        {isSignIn ?
                            'Already have account? Login'
                            : "Don't have account? Sign in"}
                    </span>
                </div>
            </section>
        </main>
    );
};

export default Login;