import { Zoom, IconButton, Tooltip, useMediaQuery } from '@mui/material';
import React from 'react';
import { ChevronLeft } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

const GoBackButton = ({ navigate }) => {
    const redirect = useNavigate();
    const isSmallScreen = useMediaQuery('(min-width: 640px)')
    return (
        <div className='mt-3'>
            <Tooltip
                placement='right'
                title={'Go Back'}>
                <IconButton
                size={isSmallScreen?'medium': 'small'}
                    onClick={() => redirect(navigate)}
                    color='error'>
                    <ChevronLeft fontSize='large' />
                </IconButton>
            </Tooltip>
        </div>
    );
};

export default GoBackButton;