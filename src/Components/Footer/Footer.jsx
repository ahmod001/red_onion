import { lazy } from 'react';
import logo_white from "../../assets/images/logo_white.png";
import { Fade } from '@mui/material';

const Footer = () => {
    return (
        <footer className='bg-black md:py-8 pt-6 pb-2'>
            <div className='container px-5 md:space-y-16 space-y-14 mx-auto'>
                <div className=' grid gap-y-4 lg:grid-cols-12  grid-cols-2'>
                    {/* Brand_icon */}
                    <div className='col lg:col-span-7'>
                        <img
                            className='h-9 bg-cover'
                            onLoad={lazy}
                            src={logo_white}
                            alt="red_onion" />
                    </div>

                    {/*  Links*/}
                    <div className='text-gray-100 md:gap-y-0 gap-y-4 grid md:grid-cols-2 lg:col-span-5 '>
                        <Ul links={
                            ['About online food', 'Read our blog', 'Sign up to the deliver', 'Add your restaurant']
                        } />

                        <Ul links={
                            ['Get help', "Read FAQ's", 'View all cities', 'Restaurants near me']
                        } />
                    </div>
                </div>

                <div className='grid gap-y-9 lg:grid-cols-12 md:grid-cols-2 grid-cols-1'>
                    {/* Copyright*/}
                    <div className='col lg:col-span-7 md:text-start text-center  md:order-first order-last'>
                        {/* Redirect to Hasan's Github */}
                        <a href="https://github.com/ahmod001" 
                        target="_blank" rel="noopener noreferrer">
                            <span className='md:text-gray-400 text-gray-500 text-xs'>
                                Developed By Ahmod Hasan
                            </span>
                        </a>
                    </div>

                    {/* Privacy & Policy */}
                    <ul className='text-gray-200 col mx-auto lg:col-span-5 md:flex w-full md:justify-evenly grid grid-cols-3 text-sm text-center'>
                        {
                            ['Privacy Policy', 'Term of use', 'Pricing'].map((link, i) => (
                                <li key={i}
                                    className='col text-sm '>
                                    <a className='sm:tracking-wider hover:underline'
                                        href='#'>
                                        {link}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </footer>
    );
};

// This sub_component will be utilized in the unordered list (ul) of the footer.
const Ul = ({ links }) => {

    return (
        <ul className='md:space-y-2 space-y-1.5 mx-auto col'>
            {
                links.map((link, i) => {
                    return (
                        <li key={i}
                            className='text-sm'>
                            <a className='text-gray-300 sm:tracking-wider hover:underline'
                                href='#'>
                                {link}
                            </a>
                        </li>
                    )
                })
            }

        </ul>
    )
}


export default Footer;