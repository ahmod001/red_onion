import { createContext, useContext, useMemo, useState } from 'react';
import GoBackButton from '../GoBackButton/GoBackButton';
import { Fade } from '@mui/material';
import DeliveryDetailsForm from "./DeliveryDetailsForm/DeliveryDetailsForm";
import CartSummary from './CartSummary/CartSummary';
import { cartContext } from '../../App';
import { localStorageHandler } from '../../assets/FakeData/FakeData';

export const deliveryFormContext = createContext();

const Cart = () => {
    const [cart, setCart] = useContext(cartContext)
    const [isUserFilledDeliveryForm, setIsUserFilledDeliveryForm] = useState(false);
    const [deliveryDetails, setDeliveryDetails] = useState([])

    useMemo(() => {
        const deliveryDetails = localStorageHandler('get', 'delivery_details');
        if (deliveryDetails) {
            setIsUserFilledDeliveryForm(true)
            setDeliveryDetails(deliveryDetails)
        }
    }, [])

    return (
        <Fade in={true}
            onDurationChange={() => 1500}>
            <section className='min-h-screen '>
                <section className='lg:space-y-9 space-y-5 container px-4 mx-auto'>
                    {/* GoBack Button */}
                    <GoBackButton navigate={'/home'} />

                    <deliveryFormContext.Provider
                        value={{
                            userDeliveryDetails: [deliveryDetails, setDeliveryDetails],
                            isUserFilledForm: [isUserFilledDeliveryForm, setIsUserFilledDeliveryForm]
                        }}>
                        <main className='grid lg:grid-cols-2 lg:pb-10 pb-20 gap-x-8 gap-y-20'>

                            <DeliveryDetailsForm />
                            <CartSummary />

                        </main>
                    </deliveryFormContext.Provider>
                </section>
            </section>
        </Fade>
    );
};

export default Cart;