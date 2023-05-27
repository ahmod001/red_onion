import React, { useContext } from 'react';
import InputField from '../../InputField/InputField';
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { localStorageHandler } from '../../../assets/FakeData/FakeData';
import { deliveryFormContext } from '../Cart';

const DeliveryDetailsForm = () => {
    // Get States from Context
    const { isUserFilledForm, userDeliveryDetails } = useContext(deliveryFormContext);
    const [isUserFilledDeliveryForm, setIsUserFilledDeliveryForm] = isUserFilledForm;
    const [deliveryDetails, setDeliveryDetails] = userDeliveryDetails;
   const { name, email, buisness_name, address } =   deliveryDetails;

    const { register, handleSubmit, formState: { errors } } = useForm()

    // Form Submit Handler
    const onSubmit = data => {
        localStorageHandler('set', 'delivery_details', data)
        setDeliveryDetails(data)
        setIsUserFilledDeliveryForm(false)
    }

    return (
        <div className={`col lg:order-none ${!isUserFilledDeliveryForm ? 'order-last' : 'order-first'} md:space-y-6 sm:space-y-4 space-y-5 mx-auto lg:max-w-[29rem] max-w-[25rem]`}>

            {/* Form Title */}
            <header>
                <h1 className='lg:text-2xl text-xl '>
                    {!isUserFilledDeliveryForm ? 'Edit ' : 'Fill '}
                    Delivery Details</h1>
                <hr className='md:mt-2 sm:mt-1.5 mt-2' />
            </header>

            {/* Form */}
            <form action="post"
                className='lg:space-y-5 space-y-4'
                onSubmit={handleSubmit(onSubmit)} >
                {/* Input Fields */}
                {
                    [
                        {
                            id: 0,
                            name: 'name',
                            default_value: name,
                            required: true,
                            placeholder: 'Name*'
                        },
                        {
                            id: 1,
                            name: 'email',
                            default_value: email,
                            required: true,
                            placeholder: 'Email*'
                        },
                        {
                            id: 2,
                            name: 'address',
                            default_value: address,
                            required: true,
                            placeholder: 'Address*'
                        },
                        {
                            id: 3,
                            name: 'buisness_name',
                            default_value: buisness_name,
                            placeholder: 'Business Name (optional)'
                        },

                    ].map(field => (
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
                    {!isUserFilledDeliveryForm ? 'Update' : 'Save & Continue'}
                </Button>
            </form>
        </div>
    );
};

export default DeliveryDetailsForm;