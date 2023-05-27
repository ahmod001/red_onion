import { Add, Remove } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useContext } from 'react';
import { cartContext, updateCartContext } from '../../App';
import { localStorageHandler } from '../../assets/FakeData/FakeData';

const QuantityController = ({ cartItemCard, meal, mealQuantity, setMealQuantity }) => {
    const [cart, setCart] = useContext(cartContext);
    const [updatedCart, setUpdatedCart] = useContext(updateCartContext);

    // Event Handlers
    const handleReduce = () => {

        if (mealQuantity > 1) {

            if (cartItemCard) {
                const { price } = meal;

                // Update Meal Quantity in updatedCart
                const updateMeal = {
                    ...meal,
                    total: (mealQuantity - 1) * price,
                    quantity: mealQuantity - 1
                }

                const newUpdatedCart = updatedCart.filter(cartItem => cartItem.id !== updateMeal.id)
                setUpdatedCart([updateMeal, ...newUpdatedCart])

                // Set CartItem on In localStorage
                localStorageHandler('set', 'cart', [updateMeal, ...newUpdatedCart])
            }
            // Update MealQuantity State
            setMealQuantity(mealQuantity - 1)
        }
    }

    const handleIncrease = () => {

        // Update MealQuantity State
        setMealQuantity(mealQuantity + 1)

        if (cartItemCard) {
            const { price } = meal;

            // Update Meal Quantity in updatedCart
            const updateMeal = {
                ...meal,
                total: (mealQuantity + 1) * price,
                quantity: mealQuantity + 1
            }

            const newUpdatedCart = updatedCart.filter(cartItem => cartItem.id !== updateMeal.id)
            setUpdatedCart([updateMeal, ...newUpdatedCart])

            // Set CartItem on In localStorage
            localStorageHandler('set', 'cart', [updateMeal, ...newUpdatedCart])
        }

    }

    return (
        <Tooltip
            placement='top'
            title='Quantity'>
            <div className={`flex my-auto ${cartItemCard ? 'md:space-x-1.5 space-x-2' : 'space-x-3'}`}>

                {/* Reduce Quantity */}
                <IconButton
                    size={cartItemCard ? 'small' : 'normal'}
                    disabled={mealQuantity <= 1}
                    onClick={handleReduce}>
                    <Remove fontSize='inherit' />
                </IconButton>

                {/* Current Quantity*/}
                <h1 className={`my-auto ${cartItemCard ? 'lg:text-lg text-xl' : 'text-xl lg:text-2xl'}`}>
                    {cartItemCard ?
                        mealQuantity.toString().padStart(2, '0')
                        : mealQuantity}
                </h1>

                {/* Increase Quantity */}
                <IconButton
                    size={cartItemCard ? 'small' : 'normal'}
                    onClick={handleIncrease}
                    color='error'>
                    <Add fontSize='inherit' />
                </IconButton>
            </div>
        </Tooltip>
    )
}
export default QuantityController;