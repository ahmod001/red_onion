import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo_dark from "../../assets/images/logo_dark.png";
import { Fab, IconButton, Tooltip } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

// This function Applies a visual effect to the navbar 
// when scrolling.
function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const Navbar = (props) => {
    const navigate = useNavigate();
    const [isFoodAddedToCart, setIsFoodAddedToCart] = React.useState(false)
    const [isUserLoggedIn, setIsUserLoggedIn] = React.useState(false)

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar sx={{ height: '3.7rem', backgroundColor: 'white' }}>
                    <div className='flex my-auto sm:px-9 px-5 justify-between'>

                        {/* Brand Icon*/}
                        <img onClick={() => navigate('/home')}
                            className='h-8 my-auto cursor-pointer'
                            src={logo_dark}
                            onLoad={React.lazy}
                            alt="red_onion" />

                        {/* Buttons Goes here*/}
                        <div className='sm:space-x-4 space-x-2'>
                            {/* Cart button*/}
                            <Tooltip
                                placement='left'
                                title='Cart'>
                                <span>
                                    <IconButton
                                        onClick={() => navigate('/cart')}
                                        disabled={!isFoodAddedToCart}
                                        aria-label="Cart">
                                        <ShoppingCartIcon fontSize='inherit' />
                                    </IconButton>
                                </span>
                            </Tooltip>
                            <>
                                {isUserLoggedIn ?
                                    // LogOut
                                    <Fab
                                        sx={{ px: 2, textTransform: 'capitalize' }}
                                        variant="extended"
                                        size="small"
                                        color='error'>
                                        Logout
                                    </Fab>

                                    // Login 
                                    : <Fab
                                        sx={{ px: 2, textTransform: 'capitalize' }}
                                        variant="extended"
                                        size="small"
                                        color='error'>
                                        Login
                                    </Fab>}
                            </>
                        </div>
                    </div>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    )
};

export default Navbar;