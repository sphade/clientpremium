import React from 'react';
import { DateTimePicker } from '@mui/lab';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';

// eslint-disable-next-line
const DatePicker = (props: any): JSX.Element => {
    const [value] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleChange = (newValue: string | null) => {
        if (newValue) {
            // setValue(newValue);
        }
    };
    // const inputProps = {
    //     ...(icon &&
    //         rest?.type !== 'password' && {
    //             startAdornment: (
    //                 <InputAdornment position="start">
    //                     <SvgIcon color="primary">{icon}</SvgIcon>
    //                 </InputAdornment>
    //             ),
    //         }),

    //     notched: false,
    //     ...rest?.InputProps,
    // };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
                value={value}
                {...props}
                ampmInClock
                // timeIcon={<ClockIcon />}
                onChange={handleChange}
                InputAdornmentProps={{ position: 'start' }}
                renderInput={(params) => <TextField {...params} fullWidth />}
            />
        </LocalizationProvider>
    );
};

export default DatePicker;
