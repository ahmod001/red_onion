import React, { useContext, useMemo, useState } from 'react';
import InputField, { Field } from '../../InputField/InputField';
import { Alert, Button, Fade, useMediaQuery } from "@mui/material";
import { useForm } from "react-hook-form";
import { localStorageHandler } from '../../../assets/FakeData/FakeData';
import { deliveryFormContext } from '../Cart';
import { updateCartContext } from '../../../App';

const DeliveryDetailsForm = () => {
    // Get States from Context
    const { isUserFilledForm, userDeliveryDetails } = useContext(deliveryFormContext);
    const [isUserFilledDeliveryForm, setIsUserFilledDeliveryForm] = isUserFilledForm;
    const [deliveryDetails, setDeliveryDetails] = userDeliveryDetails;
    const [updatedCart, setUpdatedCart] = useContext(updateCartContext);
    const { name, email, buisness_name, address } = deliveryDetails;

    const { register, handleSubmit, formState: { errors } } = useForm();

    // Media Query
    const isLargeScreen = useMediaQuery('(min-width: 1024px)')

    // Form Submit Handler
    const onSubmit = data => {
        localStorageHandler('set', 'delivery_details', data)
        setDeliveryDetails(data)
        setIsUserFilledDeliveryForm(true)
    }

    return (
        <div className={`col lg:order-none ${isUserFilledDeliveryForm ? 'order-last' : 'order-first'} md:space-y-6 sm:space-y-4 space-y-5 mx-auto lg:max-w-[29rem] max-w-[25rem]`}>

            {/* Form Title */}
            <header>
                <h1 className='lg:text-2xl text-xl '>
                    {isUserFilledDeliveryForm ? 'Edit ' : 'Fill '}
                    Delivery Details</h1>
                <hr className='md:mt-2 sm:mt-1.5 mt-2' />
            </header>

            {/*New to the Cart Section? Show the instruction*/}
            {!isUserFilledDeliveryForm &&
                <Fade in={true}>
                    <Alert color='error' icon={isLargeScreen? undefined: false} severity="info">
                        Please complete the delivery form to place your order.
                    </Alert>
                </Fade> }

            {/* Form */}
            <form action="post"
                className='lg:space-y-5 space-y-4'
                onSubmit={handleSubmit(onSubmit)} >
                {/* Input Fields */}
                {[
                    new Field(0, 'name', 'Full Name*', name, true),
                    new Field(1, 'email', 'Email*', email, true),
                    new Field(2, 'address', 'Address*', address, true),
                    new Field(3, 'buisness_name', 'Business Name (optional)', buisness_name, false),

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
                    {isUserFilledDeliveryForm ? 'Update' : 'Save & Continue'}
                </Button>
            </form>
        </div>
    );
};

export default DeliveryDetailsForm;