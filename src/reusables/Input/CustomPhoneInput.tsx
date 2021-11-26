import React from 'react';
import { FormHelperText, TextFieldProps } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import { PrimaryInputProps } from '.';

const CustomPhoneInput = ({ formik, name }: PrimaryInputProps & TextFieldProps) => {
    if (formik) {
        const { handleBlur, values, errors, touched, setFieldValue } = formik;

        return (
            <div style={{ width: '100%', marginBottom: '3rem' }}>
                <PhoneInput
                    inputProps={{ name: name }}
                    country={'ng'}
                    value={values[name]}
                    onChange={(phone: string) => {
                        setFieldValue(name, phone);
                    }}
                    onBlur={handleBlur}
                    containerStyle={{ width: '100%' }}
                    containerClass={touched[name] && Boolean(errors[name]) ? 'error-input' : ''}
                    inputStyle={{ width: '100%' }}
                    countryCodeEditable={false}
                />
                {touched[name] && Boolean(errors[name]) && (
                    <FormHelperText
                        style={{ paddingLeft: '2rem', color: '#d32f2f' }}
                        id="component-error-text"
                    >
                        {touched[name] && errors[name]}
                    </FormHelperText>
                )}
            </div>
        );
    }

    return (
        <PhoneInput
            inputProps={{ name: name }}
            country={'ng'}
            containerStyle={{ width: '100%' }}
            inputStyle={{ width: '100%' }}
            countryCodeEditable={false}
        />
    );
};

export default CustomPhoneInput;
