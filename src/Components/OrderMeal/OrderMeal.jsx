import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { allMeals } from '../../assets/FakeData/FakeData';
import { Button, Fade, IconButton, Tooltip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Add, Remove } from '@mui/icons-material';
import GoBackButton from '../GoBackButton/GoBackButton';

const OrderMeal = () => {

    const { mealId } = useParams();
    const navigate = useNavigate();
    const meal = allMeals.find(meal => meal.id === Number.parseInt(mealId));
    const { id, name, description, img, price } = meal;

    const [mealQuantity, setMealQuantity] = useState(1);

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
                                    <Quantity
                                        mealQuantity={mealQuantity}
                                        setMealQuantity={setMealQuantity} />
                                </div>

                                {/* Add To Cart Button */}
                                <Button
                                    onClick={() => navigate('/cart')}
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

// This sub_component manages the meal quantity
const Quantity = ({ mealQuantity, setMealQuantity }) => {

    // Event Handlers
    const handleReduce = () => (
        mealQuantity > 1 && setMealQuantity(mealQuantity - 1)
    )
    const handleIncrease = () => setMealQuantity(mealQuantity + 1)

    return (
        <Tooltip
            placement='top'
            title='Quantity'>
            <div className='flex space-x-3'>

                {/* Reduce Quantity */}
                <IconButton
                    disabled={mealQuantity <= 1}
                    onClick={handleReduce}>
                    <Remove fontSize='inherit' />
                </IconButton>

                {/* Current Quantity*/}
                <h1 className='my-auto sm:text-2xl text-xl'>
                    {mealQuantity}
                </h1>

                {/* Increase Quantity */}
                <IconButton
                    onClick={handleIncrease}
                    color='error'>
                    <Add fontSize='inherit' />
                </IconButton>
            </div>
        </Tooltip>
    )
}

export default OrderMeal;