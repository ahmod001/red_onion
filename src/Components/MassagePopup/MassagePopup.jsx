import { Box, Button, Dialog, DialogActions, DialogTitle, Fade, Zoom } from '@mui/material';
import { forwardRef } from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

const transition = forwardRef(function Transition(props, ref) {
    return <Fade ref={ref} {...props} />;
});

const MassagePopup = ({ error, message, open, handleClose }) => {
    return (
        <Dialog
            TransitionComponent={transition}
            open={open}
            onClose={handleClose}>
            <Box sx={{
                backgroundColor: 'white',
                width: '20rem',
            }}>
                {/* Success Icon */}
                <DialogTitle
                    sx={{
                        fontSize: '5rem',
                        pt: 0,
                        pb: 0,
                        textAlign: 'center',
                    }}>
                    <Zoom
                        in={true}>
                        {error ?
                            <ErrorRoundedIcon
                                color='action'
                                fontSize={'inherit'} />
                            :
                            <CheckCircleRoundedIcon
                                color='action'
                                fontSize={'inherit'} />}
                    </Zoom>
                </DialogTitle>

                {/* Massage */}
                <DialogTitle
                    sx={{
                        fontSize: '1.03rem',
                        pt: 0,
                        pb: 2,
                        textAlign: 'center',
                    }}>
                    {message}
                </DialogTitle>

                {/* OK Button */}
                <DialogActions
                    sx={{
                        pb: 2.5,
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                >
                    <Button
                        color='error'
                        onClick={handleClose}
                        size='small'
                        variant='contained'>
                        Ok
                    </Button>
                </DialogActions>

            </Box>
        </Dialog>
    );
};

export default MassagePopup;