import React, { MouseEvent, useState } from 'react';
import {
    IconButton,
    InputAdornment,
    MenuItem,
    SvgIcon,
    TextField,
    TextFieldProps,
} from '@mui/material';
import { FormikProps, FormikValues } from 'formik';
import { ReactComponent as EyeIcon } from './../../assets/svgs/eye.svg';
import { ReactComponent as HiddenEyeIcon } from './../../assets/svgs/hidden-eye.svg';

export type ICustomFormikProps = Omit<
    FormikProps<FormikValues>,
    'setFormikState' | 'setValues' | 'resetForm'
>;

export interface PrimaryInputProps {
    formik?: ICustomFormikProps;
    name: string;
    icon?: string | JSX.Element;
}

export interface PrimarySelectProps {
    formik?: ICustomFormikProps;
    options: Array<any>;
    placeholder?: string;
    name: string;
    fullWidth?: boolean;
    icon?: string | JSX.Element;
}

export const PrimaryInput = ({
    formik,
    name,
    icon,
    ...rest
}: PrimaryInputProps & TextFieldProps) => {
    // Toggle password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Handle mouse down event
    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const inputProps = {
        ...(icon &&
            rest?.type !== 'password' && {
                startAdornment: (
                    <InputAdornment position="start">
                        <SvgIcon color="primary">{icon}</SvgIcon>
                    </InputAdornment>
                ),
            }),
        ...(rest?.type === 'password' && {
            // If the input type is a password, add ability to toggle views
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword((prevState) => !prevState)}
                        onMouseDown={handleMouseDownPassword}
                    >
                        {showPassword ? <HiddenEyeIcon /> : <EyeIcon />}
                    </IconButton>
                </InputAdornment>
            ),
        }),
        notched: false,
        ...rest?.InputProps,
    };

    if (formik) {
        const { handleChange, handleBlur, values, errors, touched } = formik;

        return (
            <TextField
                {...rest}
                name={name}
                onChange={handleChange}
                value={values[name]}
                onBlur={handleBlur}
                error={touched[name] && Boolean(errors[name])}
                helperText={touched[name] && errors[name]}
                variant="outlined"
                InputProps={inputProps}
                fullWidth
            />
        );
    }

    return <TextField {...rest} name={name} variant="outlined" InputProps={inputProps} fullWidth />;
};

export const PrimarySelect = ({
    formik,
    options = [],
    placeholder,
    name,
    icon,
    ...rest
}: PrimarySelectProps & TextFieldProps) => {
    const inputProps = {
        ...(icon &&
            rest?.type !== 'password' && {
                startAdornment: (
                    <InputAdornment position="start">
                        <SvgIcon color="primary">{icon}</SvgIcon>
                    </InputAdornment>
                ),
            }),

        // ...rest?.inputProps,
    };
    if (formik) {
        const { handleChange, handleBlur, values, errors, touched } = formik;

        return (
            <TextField
                select
                {...rest}
                name={name}
                onChange={handleChange}
                value={values[name]}
                onBlur={handleBlur}
                error={touched[name] && Boolean(errors[name])}
                helperText={touched[name] && errors[name]}
                variant="outlined"
                InputProps={inputProps}
                fullWidth
            >
                <MenuItem value="">
                    <em>{placeholder || 'Select'}</em>
                </MenuItem>
                {options.map(({ value, name }, index) => (
                    <MenuItem key={index} value={value}>
                        {name}
                    </MenuItem>
                ))}
            </TextField>
        );
    }

    return (
        <TextField
            select
            {...rest}
            name={name}
            variant="outlined"
            InputProps={inputProps}
            fullWidth
        >
            <MenuItem value="">
                <em>{placeholder || 'Select'}</em>
            </MenuItem>
            {options.map(({ value, name }, index) => (
                <MenuItem key={index} value={value}>
                    {name}
                </MenuItem>
            ))}
        </TextField>
    );
};
