import { } from 'react';
import { Button, Fade, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import GoBackButton from '../GoBackButton/GoBackButton';

const inputFields = [
    {
        id: 0,
        name: 'name',
        required: true,
        placeholder: 'Name*'
    },
    {
        id: 1,
        name: 'email',
        required: true,
        placeholder: 'Email*'
    },
    {
        id: 2,
        name: 'address',
        required: true,
        placeholder: 'Address*'
    },
    {
        id: 3,
        name: 'buisness_name',
        placeholder: 'Business Name (optional)'
    },

]

const Cart = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Fade in={true}
            onDurationChange={() => 1500}>
            <section className='h-screen space-y-9 container px-4 mx-auto'>
                {/* GoBack Button */}
                <GoBackButton navigate={'/home'} />

                <main className='grid sm:grid-cols-2 gap-3'>

                    {/* Delivery form */}
                    <div className='col md:space-y-6 sm:space-y-4 space-y-5 mx-auto lg:max-w-[29rem] max-w-[27rem]'>
                        {/* For */}
                        <header>
                            <h1 className='md:text-2xl sm:text-xl text-2xl '>Fill Delivery Details</h1>
                            <hr className='md:mt-2 sm:mt-1.5 mt-2' />
                        </header>

                        {/* Form */}
                        <form action="post"
                            className='space-y-4'
                            onSubmit={handleSubmit(onSubmit)} >
                            {
                                inputFields.map(field => (
                                    <InputField
                                        key={field.id}
                                        field={field}
                                        register={register}
                                        errors={errors} />
                                ))
                            }
                            {/* Submit Button */}
                            <Button type='submit'
                                variant='contained'
                                fullWidth
                                sx={{ textTransform: 'capitalize' }}
                                color='error'>
                                Save & Continue
                            </Button>
                        </form>
                    </div>

                    {/* Cart */}
                    <div className='col'></div>
                </main>
            </section>
        </Fade>
    );
};

// This Sub_Component will use inside React-hook-form
const InputField = ({ field, register, errors }) => {
    const { name, placeholder, required } = field;

    return (
        <TextField
            {...register(name, { required: required || false })}
            fullWidth
            hiddenLabel
            placeholder={placeholder || ''}
            error={!!errors[name]}
            helperText={`${errors[name] ? 'This Field Required' : ''}`}
            size='small'
            color='error'
            variant='filled' />
    )
}

export default Cart;