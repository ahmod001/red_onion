import { } from 'react';
import Meals from '../Meals/Meals';
import SearchMeals from '../SearchMeals/SearchMeals';
import WhyYouChooseUs from '../WhyYouChooseUs/WhyYouChooseUs';

const Home = () => {
    return (
        <main>
            <SearchMeals />
            
            <section className='container sm:space-y-12 space-y-10 mt-6 
            mb-10 mx-auto lg:px-0 sm:px-6 px-4'>
                <Meals />
                <WhyYouChooseUs />
            </section>
        </main>
    );
};

export default Home;