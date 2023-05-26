import { useContext, useState } from 'react';
import QuantityController from '../../QuantityController/QuantityController';
import { cartContext } from '../../../App';
import { Fade, IconButton, Tooltip } from '@mui/material';
import { Close } from '@mui/icons-material';
import { localStorageHandler } from '../../../assets/FakeData/FakeData';


const CartItemCard = ({ meal }) => {
    const [cart, setCart] = useContext(cartContext);
    const { id, name, price, img, quantity } = meal;
    const [mealQuantity, setMealQuantity] = useState(quantity);

    // Remove Cart_item Button Handler
    const handleRemove = () => {
        const trimmedCart = cart.filter(cartItem => cartItem.id !== id);
        localStorageHandler('set', 'cart', trimmedCart)
        setCart(trimmedCart)
    }

    return (
        <Fade in={true}>
            <div className='grid grid-cols-3 gap-x-2.5 rounded-xl w-full py-2 px-2.5  bg-gray-100'>
                {/* Meal Img */}
                <div className='col'>
                    <img src={img} className='cursor-pointer' alt={name} />
                </div>

                {/* Meal Name & Price*/}
                <div className='col flex'>
                    <div className='my-auto overflow-hidden space-y-1'>
                        <h4 className='font-semibold text-xs'>{name}</h4>
                        <h4 className='text-lg font-bold text-red-600'>${price}</h4>
                        <h6 className='text-xs text-gray-400'>Best in quality</h6>
                    </div>
                </div>

                {/* Actions */}
                <div className='space-y-3.5'>
                    {/* Remove_from_cart Btn */}
                    <div className='flex justify-end'>
                        <Tooltip
                            placement='top-end'
                            title={'Remove'}>
                            <IconButton
                                onClick={handleRemove}
                                size='small'>
                                <Close fontSize='inherit' />
                            </IconButton>
                        </Tooltip>
                    </div>

                    {/* set Quantity */}
                    <QuantityController
                        cartItemCard={true}
                        meal={meal}
                        mealQuantity={mealQuantity}
                        setMealQuantity={setMealQuantity} />
                </div>
            </div>
        </Fade>
    );
};

export default CartItemCard;