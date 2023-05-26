import { TextField } from '@mui/material';
import React from 'react';

const InputField = ({ field, register, errors }) => {
    const { name, placeholder, required } = field;

    return (
        <TextField
            {...register(name, { required: required || false })}
            fullWidth
            hiddenLabel
            placeholder={placeholder || ''}
            error={!!errors[name]}
            helperText={`${errors[name] ? 'This Field Required' : ''}`}
            size='small'
            color='error'
            variant='filled' />
    )
}

export default InputField;