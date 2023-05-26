import { useContext, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { allMeals, localStorageHandler } from '../../assets/FakeData/FakeData';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GoBackButton from '../GoBackButton/GoBackButton';
import QuantityController from '../QuantityController/QuantityController';
import { Button, Fade } from '@mui/material';
import { cartContext, updateCartContext } from '../../App';

const OrderMeal = () => {
    // Get clicked Meal by its Id
    const { mealId } = useParams();
    const meal = allMeals.find(meal => meal.id === Number.parseInt(mealId));
    const { id, name, description, img, price } = meal;

    const [mealQuantity, setMealQuantity] = useState(1);
    const [cart, setCart] = useContext(cartContext);
    const [updatedCart, setUpdatedCart] = useContext(updateCartContext)

    // Add To Cart Handler
    const handleAddToCart = () => {
        const orderedMeal = {
            ...meal,
            total: price * mealQuantity,
            quantity: mealQuantity
        }
        const newCart = cart.filter(cartItem => cartItem.id !== orderedMeal.id)
        setCart([orderedMeal, ...newCart])
        localStorageHandler('set', 'cart', [orderedMeal, ...newCart])
    }

    return (
        <Fade in={true}
            onDurationChange={() => 1500}>
            <main className=' min-h-screen container space-y-6 px-4 mb-10 mx-auto'>

                {/* GoBack Button */}
                <GoBackButton navigate={'/home'} />

                <div className=' container flex align-middle mx-auto'>
                    <section className='flex sm:flex-row flex-col-reverse my-auto'>
                        <div className='md:w-6/12 sm:w-7/12 flex align-middle px-8'>
                            <div className='lg:space-y-10 md:space-y-5 space-y-6 my-auto'>

                                {/* Meal Details */}
                                <div className='xl:space-y-7 lg:space-y-5 md:space-y-4 space-y-2'>
                                    <h1 className='xl:text-5xl lg:text-4xl md:text-3xl text-2xl'>
                                        {name}
                                    </h1>
                                    <p className='text-gray-700 lg:text-base text-sm'>
                                        {description}
                                    </p>
                                </div>

                                <div className='flex align-middle sm:space-x-12 space-x-16'>
                                    {/* Price  */}
                                    <h1 className='my-auto xl:text-4xl sm:text-3xl text-2xl font-sans'>
                                        ${price}
                                    </h1>

                                    {/* Quantity Count */}
                                    <QuantityController
                                        cartItemCard={false}
                                        mealQuantity={mealQuantity}
                                        setMealQuantity={setMealQuantity} />
                                </div>

                                {/* Add To Cart Button */}
                                <Button
                                    onClick={handleAddToCart}
                                    sx={{ borderRadius: 20, textTransform: 'capitalize' }}
                                    size={'large'}
                                    color='error'
                                    variant="contained"
                                    startIcon={<ShoppingCartIcon />}>
                                    Add
                                </Button>
                            </div>
                        </div>

                        {/* Meal Image */}
                        <div className='md:w-6/12 sm:w-5/12 sm:mb-0 mb-6'>
                            <img
                                className='h-60 sm:h-72 md:h-96 mx-auto my-auto cursor-pointer'
                                src={img}
                                alt={name} />
                        </div>
                    </section>
                </div>
            </main>
        </Fade>
    );
};

export default OrderMeal;