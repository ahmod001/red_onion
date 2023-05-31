import { useMemo, useState } from 'react';
import banner_img from '../../assets/images/banner.png';
import SearchBar from './SearchBar/SearchBar';
import Card from "../Card/Card";
import { Fade, IconButton } from '@mui/material';
import { Close } from "@mui/icons-material";

// Custom Styles For background_Banner 
const backgroundStyle = {
    backgroundColor: '#fcf4e0',
    backgroundImage: `url(${banner_img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
}

const SearchMeals = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchBarError, setSearchBarError] = useState('');

    // Remove searchBar error 
    // Automatically after 2.7 sec
    useMemo(() => setTimeout(() => setSearchBarError(''), 2700), [searchBarError])

    return (
        <section>
            <div className='md:h-96 sm:h-72 h-64 flex align-middle justify-center'
                style={backgroundStyle}>
                {/* Title */}
                <div className='m-auto sm:space-y-5 space-y-3'>
                    <h1 className='md:text-3xl text-center sm:text-2xl text-xl tracking-wide font-medium'> Best food waiting for your hunger</h1>

                    <div className='space-y-3'>
                        {/* SearchBar */}
                        <SearchBar
                            setSearchBarError={setSearchBarError}
                            setSearchResults={setSearchResults} />

                        {/* Error goes here */}
                        {searchBarError &&
                            <Fade in={true}>
                                <h1 className='text-center sm:text-base text-sm font-semibold text-gray-700 tracking-wider font-sans'>
                                    {searchBarError}
                                </h1>
                            </Fade>
                        }
                    </div>
                </div>
            </div>

            {/* Search Results */}
            {searchResults.length > 0 &&
                <Fade onDurationChange={() => 1500}
                    in={true} >
                    <div className='rounded-md shadow-md mb-8 mt-5 p-2 space-y-5 container mx-auto'>
                        {/* Remove all search results button */}
                        <div className='flex space-x-2'>
                            <IconButton onClick={() => setSearchResults([])}>
                                <Close fontSize='inherit' />
                            </IconButton>

                            <h1 className='my-auto text-lg tracking-wider font-semibold'>Search results:</h1>
                        </div>
                        <div className='my-2 pb-8 pt-3 grid whitespace-nowrap md:grid-cols-3 sm:grid-cols-2 md:gap-7 lg:gap-8 gap-8'>
                            {
                                searchResults.slice(0, 3).map(meal => (
                                    <Card key={meal.id} meal={meal} />
                                ))
                            }

                        </div>
                    </div>
                </Fade>}
        </section>
    );
};

export default SearchMeals;