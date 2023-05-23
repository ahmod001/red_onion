import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { } from 'react';

const MenuToggler = ({ currentMenu, setCurrentMenu }) => {

    const handleChange = (event, newAlignment) => {
        newAlignment && setCurrentMenu(newAlignment);
    };

    return (
        <Box textAlign={'center'} >
            <ToggleButtonGroup
                size='small'
                value={currentMenu}
                color='error'
                exclusive
                onChange={handleChange}
            >
                {['breakfast', 'lunch', 'dinner'].map((foodType, i) => (
                    <ToggleButton
                        key={i}
                        sx={{ textTransform: 'capitalize',border: 'none', mx:1.2}}
                        value={foodType}>
                        {foodType}
                    </ToggleButton>
                ))
                }
            </ToggleButtonGroup >
        </Box>
    );
};

export default MenuToggler;