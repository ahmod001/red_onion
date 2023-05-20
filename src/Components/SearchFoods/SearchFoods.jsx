import { } from 'react';
import banner_img from '../../assets/images/banner.png';
import { } from '@mui/material';
import SearchBar from '../SearchBar/SearchBar';

const SearchFoods = () => {
    const backgroundStyle = {
        backgroundColor: '#fcf4e0',
        backgroundImage: `url(${banner_img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }

    return (
        <div className='md:h-96 h-80 flex align-middle justify-center'
            style={backgroundStyle}>
            <div className='m-auto sm:space-y-5 space-y-3'>
                <h1 className='md:text-4xl sm:text-3xl text-xl tracking-wide font-medium'> Best food waiting for your hunger</h1>

                <SearchBar />
            </div>
        </div>
    );
};

export default SearchFoods;