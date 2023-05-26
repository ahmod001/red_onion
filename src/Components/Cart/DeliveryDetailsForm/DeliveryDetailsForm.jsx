import React from 'react';
import InputField from '../../InputField/InputField';
import { Button} from "@mui/material";
import { useForm } from "react-hook-form";

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

const DeliveryDetailsForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);


    return (
        <div className='col md:space-y-6 sm:space-y-4 space-y-5 mx-auto lg:max-w-[29rem] max-w-[27rem]'>
            {/* Form Title */}
            <header>
                <h1 className='md:text-2xl sm:text-xl text-2xl '>Edit Delivery Details</h1>
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
    );
};

export default DeliveryDetailsForm;