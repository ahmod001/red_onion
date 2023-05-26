import { createContext, useContext, useMemo, useState } from 'react';
import GoBackButton from '../GoBackButton/GoBackButton';
import { Fade } from '@mui/material';
import DeliveryDetailsForm from "./DeliveryDetailsForm/DeliveryDetailsForm";
import CartSummary from './CartSummary/CartSummary';
import { cartContext, updateCartContext } from '../../App';


const Cart = () => {
    const [cart, setCart] = useContext(cartContext)

    return (
        <Fade in={true}
            onDurationChange={() => 1500}>
            <section className='min-h-screen mb-6 space-y-9 container px-4 mx-auto'>
                {/* GoBack Button */}
                <GoBackButton navigate={'/home'} />

                <main className='grid sm:grid-cols-2 gap-x-8 gap-y-12'>

                    <DeliveryDetailsForm />
                    <CartSummary />

                </main>
            </section>
        </Fade>
    );
};

export default Cart;