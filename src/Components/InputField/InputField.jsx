import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from "@mui/icons-material";

// This Function will use inputField for validation
const getValidationRules = (fieldName, required) => {

    if (required) {
        // Validate Email
        if (fieldName === 'email') {
            return {
                required: 'This field is required',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                }
            };

            // Validate Password
        } else if (fieldName === 'password' || fieldName === 'confirm_password') {
            return {
                required: 'This field is required',
                pattern: {
                    value: /^.{6,}$/,
                    message: 'Password must be at least 6 characters '
                }
            };
        } else return {
            required: 'This field required'
        }
    }

    return {
        required: false
    };
};

// This function will toggle the input-field type Text-Password
const fieldType = (fieldName, showPassword) => {

    // For Password
    if (fieldName === 'password' || fieldName === 'confirm_password') {
        return showPassword ? 'text' : 'password'
    }
    else {
        return 'text'
    }
}

// Main Component
const InputField = ({ field, register, errors, passwordError }) => {

    const { name, placeholder, required, default_value } = field;
    const [showPassword, setShowPassword] = useState(false);

    return (
        <TextField
            {...register(name, getValidationRules(name, required))}
            fullWidth
            hiddenLabel
            defaultValue={default_value}
            placeholder={placeholder || ''}
            error={!!errors[name]}
            size='small'
            color='error'
            variant='filled'

            // Error goes here
            helperText={`${errors[name] ? errors[name].message :
                name === 'confirm_password' && !passwordError ? "Password didn't matched" : ''}`}

            type={fieldType(name, showPassword)}

            // Password Visibility Button
            InputProps={name === 'password' || name === 'confirm_password' ? {
                endAdornment: (
                    <InputAdornment position='end'>
                        <IconButton
                            size='small'
                            onClick={() => setShowPassword(!showPassword)}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                            edge='end'
                        >
                            {showPassword ?
                                <VisibilityOff fontSize='inherit' />
                                : <Visibility fontSize='inherit' />}
                        </IconButton>
                    </InputAdornment>
                ),
            } : {}} />
    )
}

// This will used to create Input-Field perimeter "Field"
export class Field {
    constructor(id, name, placeholder, default_value, required) {
        this.id = id;
        this.name = name;
        this.placeholder = placeholder;
        this.default_value = default_value;
        this.required = required;

    }
}

export default InputField;