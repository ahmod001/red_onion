import { } from 'react';
import { useParams } from "react-router-dom";

const OrderMeal = () => {
    const { mealId } = useParams();

    return (
        <section className='container mx-auto h-screen'>
            <h2>{mealId}</h2>
        </section>
    );
};

export default OrderMeal;