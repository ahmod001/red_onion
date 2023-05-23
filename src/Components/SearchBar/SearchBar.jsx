import styled from '@emotion/styled';
import { Fab, InputBase, alpha } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useRef } from 'react';
import { allMeals } from "../../assets/FakeData/FakeData";

const SearchBar = ({ setSearchResults }) => {
    const inputRef = useRef(null);

    // Search Btn handler 
    const handleSearch = () => {
        const searchPrompt = inputRef.current.value;

        setSearchResults(allMeals.filter(meal => {
            const mealName = meal.name.toLowerCase();
            return mealName.includes(searchPrompt.toLowerCase());
        }))
    }

    // This MUI sub-components for SearchBar
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingRight: '0.1rem',
        borderRadius: '1.5rem',
        backgroundColor: alpha(theme.palette.common.white, 1),
        marginRight: 'auto',
        marginLeft: 'auto',
        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        width: '85%',
        [theme.breakpoints.up('md')]: {
            width: '73%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '77%',
        }
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '60%',
            [theme.breakpoints.up('md')]: {
                width: '25ch',
            },
        },
    }));

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
                inputRef={inputRef}
                autoFocus
                placeholder="Search meal items..."
                inputProps={{ 'aria-label': 'search' }} />

            {/* Search Button */}
            <Fab onClick={handleSearch}
                sx={{ marginLeft: 'auto', px: 2, py: 2.25, textTransform: 'capitalize', boxShadow: 'none', ":active": { boxShadow: 'none' } }}
                variant="extended"
                size='small'
                color='error'>
                Search
            </Fab>
        </Search>
    )
};

export default SearchBar;