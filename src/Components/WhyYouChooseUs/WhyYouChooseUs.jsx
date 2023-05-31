import { } from 'react';
import AboutUsCard from './AboutUsCard/AboutUsCard';
import employee_1 from "../../assets/images/why_us/employee_1.png"
import cook_2 from "../../assets/images/why_us/cook_2.png"
import customer_3 from "../../assets/images/why_us/customer_3.png"
import bus from "../../assets/images/icons/bus.png"
import bell from "../../assets/images/icons/bell.png"
import truck from "../../assets/images/icons/truck.png"

const aboutUs = [
    {
        id: 0,
        title: 'Fast Delivery',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem inventore nam voluptatem molestiae modi a cum magnam itaque eveniet sunt ipsa accusantium neque dignissimos, ea, nihil suscipit, velit minus sequi.',
        banner_img: employee_1,
        icon: bus
    },
    {
        id: 1,
        title: 'A Good Auto Responder',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem inventore nam voluptatem molestiae modi a cum magnam itaque eveniet sunt ipsa accusantium neque dignissimos, ea, nihil suscipit, velit minus sequi.',
        banner_img: cook_2,
        icon: bell
    },
    {
        id: 3,
        title: 'Home Delivery',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem inventore nam voluptatem molestiae modi a cum magnam itaque eveniet sunt ipsa accusantium neque dignissimos, ea, nihil suscipit, velit minus sequi.',
        banner_img: customer_3,
        icon: truck
    }
]

const WhyYouChooseUs = () => {
    return (
        <section className='space-y-8 pt-4 lg:px-5'>
            <div className='lg:space-y-3 sm:space-y-2 space-y-1  xl:ms-5'>
                <h1 className='lg:text-3xl sm:text-2xl text-xl font-medium  sm:tracking-normal tracking-wide '>Why You Choose Us</h1>
                <p className='md:text-base text-sm text-justify'>
                    Lorem ipsum dolor sit amet consectetur, adipi <br/> sicing   elit.Nesciunt dolore, quod ipsam quos nam animi
                </p>
            </div>

            {/* About Us Cards */}
            <div className='grid md:grid-cols-3 sm:grid-cols-2 xl:gap-0 gap-x-5 gap-y-7'>
                {aboutUs.map(ourInfo => (
                    <AboutUsCard
                        key={ourInfo.id}
                        ourInfo={ourInfo} />
                ))}
            </div>
        </section>
    );
};

export default WhyYouChooseUs;