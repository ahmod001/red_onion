import { useContext, useEffect, useRef, useState } from 'react';
import InputField, { Field } from '../../InputField/InputField';
import { useForm } from 'react-hook-form';
import { Button, Checkbox, Fade, FormControlLabel } from '@mui/material';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import firebaseConfig, { } from ".././LoginManager/Firebase.config";
import { useLocation, useNavigate } from 'react-router-dom';
import { localStorageHandler } from '../../../assets/FakeData/FakeData';
import { userContext } from '../../../App';

const LoginForm = ({ showError, isSignIn }) => {

    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const [isBothPasswordMatched, setIsBothPasswordMatched] = useState(true);
    const [isRememberMe, setIsRemember] = useState(true);

    const { isUserLoggedInState } = useContext(userContext);
    const [isUserLoggedIn, setIsUserLoggedIn] = isUserLoggedInState;

    // Get user previous location and redirect back to that location
    const location = useLocation();
    const navigate = useNavigate();
    const { from } = location.state || { from: { pathname: '/' } };

    // Get Default user LogIn Info
    const logInInfo = localStorageHandler('get', 'loginInfo') || { email: '', password: '' };
    const { email, password } = logInInfo;

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // Submit Handler
    const onSubmit = data => {
        console.log(data);
        // Sign in
        if (isSignIn) {
            if (data.password === data.confirm_password) {
                // Firebase
                createUserWithEmailAndPassword(auth, data.email, data.confirm_password)
                    .then((res) => firebaseResponse(res))
                    .catch(error => showError(error.code));
            }
            else {
                setIsBothPasswordMatched(!isBothPasswordMatched)
            }
        }
        // Login
        else {
            // Set Login-info at LocalStorage 
            isRememberMe &&
                localStorageHandler('set', 'loginInfo',
                    {
                        email: data.email,
                        password: data.password
                    })
            // Firebase
            signInWithEmailAndPassword(auth, data.email, data.password)
                .then((res) => firebaseResponse(res))
                .catch(error => showError(error.code));
        }

        // This callback_Function will use in Firebase Authentication
        const firebaseResponse = res => {
            //Sign in
            if (isSignIn) {
                // Registering User Name with Email & Password
                updateProfile(auth.currentUser, {
                    displayName: data.name,

                }).then(res => console.log(res))
                    .catch((error) => console.error(error))
            }

            const user = res.user;
            const userData = {
                name: user.name,
                email: user.email
            }
            localStorageHandler('set', 'userInfo', userData)
            setIsUserLoggedIn(!isUserLoggedIn)
            navigate(from)
        }

    }

    // /Reset the form when switching between Sign-in and Login.
    const formRef = useRef(null);
    useEffect(() => {
        formRef.current.reset()
        reset()
    }, [isSignIn])

    return (
        <div className='max-w-[26rem] mx-auto'>

            {/*  Form */}
            <Fade in={true}
                onDurationChange={() => 1500}>
                <form ref={formRef}
                    action="post"
                    className='lg:space-y-5 space-y-4'
                    onSubmit={handleSubmit(onSubmit)} >

                    {/* Sign in Fields */}
                    {isSignIn ? [
                        new Field(0, 'name', 'Full Name', '', true),
                        new Field(1, 'email', 'Email', '', true),
                        new Field(2, 'password', 'Password', '', true),
                        new Field(3, 'confirm_password', 'Confirm Password', '', true)

                    ].map(field => (
                        <InputField
                            key={field.id}
                            field={field}
                            errors={errors}
                            passwordError={isBothPasswordMatched}
                            register={register} />
                    ))

                        // Login Fields
                        : [
                            new Field(9, 'email', 'Email', email, true),
                            new Field(10, 'password', 'Password', password, true),

                        ].map(field => (
                            <InputField
                                key={field.id}
                                field={field}
                                errors={errors}
                                register={register} />
                        ))}

                    {/* Remember Me 
                            when Login */}
                    <div className='text-start'>
                        {!isSignIn &&
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        color='error'
                                        size='small'
                                        onChange={() => setIsRemember(!isRememberMe)}
                                        defaultChecked />}
                                label="Remember me" />}
                    </div>

                    {/* Submit Btn */}
                    <div className='pt-0.5'>
                        <Button fullWidth
                            sx={{ textTransform: 'capitalize' }}
                            type='submit'
                            variant='contained'
                            color='error' >
                            {isSignIn ? 'Create Account' : 'Login'}
                        </Button>
                    </div>
                </form>
            </Fade>
        </div>
    );
};

export default LoginForm;