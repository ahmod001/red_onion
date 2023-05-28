import { useState } from 'react';
import InputField, { Field } from '../../InputField/InputField';
import { useForm } from 'react-hook-form';
import { Button, Fade } from '@mui/material';
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import firebaseConfig, { } from ".././LoginManager/Firebase.config";

const LoginForm = ({ showError, isSignIn }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isBothPasswordMatched, setIsBothPasswordMatched] = useState(true);

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // Submit Handler
    const onSubmit = data => {

        // Sign in
        if (isSignIn) {
            if (data.password === data.confirm_password) {
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
            console.log(user);
        }

    }

    return (
        <div className='max-w-[26rem] mx-auto'>

            {/*  Form */}
            <Fade in={true}
                onDurationChange={() => 1500}>
                <form action="post"
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
                            new Field(1, 'email', 'Email', '', true),
                            new Field(2, 'password', 'Password', '', true),

                        ].map(field => (
                            <InputField
                                key={field.id}
                                field={field}
                                errors={errors}
                                passwordError={isBothPasswordMatched}
                                register={register} />
                        ))}

                    {/* Submit Btn */}
                    <Button fullWidth
                        sx={{ textTransform: 'capitalize' }}
                        type='submit'
                        variant='contained'
                        color='error' >
                        {isSignIn ? 'Create Account' : 'Login'}
                    </Button>
                </form>
            </Fade>
        </div>
    );
};

export default LoginForm;