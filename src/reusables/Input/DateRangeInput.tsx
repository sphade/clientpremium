/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";

import { TextFieldProps } from "@mui/material";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { RangeInput } from "@mui/lab/DateRangePicker/RangeTypes";
import { FormControl, InputAdornment, SvgIcon } from "@mui/material";
import { ReactComponent as CalendarIcon } from "./../../assets/svgs/calendar.svg";
import { DatePickerProps } from "./types";

export default function BasicDateRangePicker({
  formik,
  name,
  ...rest
}: DatePickerProps & TextFieldProps) {
  const [value, setValue] = React.useState<RangeInput<Date>>([
    new Date(),
    new Date(),
  ]);

  const calendarAdornment = {
    InputProps: {
      startAdornment: (
        <InputAdornment position="start">
          <SvgIcon>
            <CalendarIcon />
          </SvgIcon>
        </InputAdornment>
      ),
    },
  };

  if (formik) {
    const { values, handleChange, touched, errors } = formik;

    const changeDate = (newValue: any) => {
      if (newValue) {
        const value = newValue.map((value: any) =>
          new Date(value).toDateString()
        );

        handleChange({ target: { name, value: value } });
      }
    };

    return (
      <div>
        <FormControl fullWidth>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
              startText="Start From"
              endText="To"
              minDate={new Date()}
              value={values[name]}
              {...calendarAdornment}
              calendars={1}
              onChange={changeDate}
              renderInput={(startProps, endProps) => (
                <div className="flex items-center flex-wrap gap-8 md:flex-nowrap md:gap-0 w-full">
                  <TextField fullWidth {...startProps} {...calendarAdornment} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField fullWidth {...endProps} {...calendarAdornment} />
                </div>
              )}
            />
          </LocalizationProvider>
          {touched[name] && errors[name] && (
            <small className="block text-red-600 pt-1 text-sm">
              {errors[name]}
            </small>
          )}
        </FormControl>
      </div>
    );
  }

  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          startText="Start From"
          endText="To"
          // minDate={new Date()}
          value={value}
          {...calendarAdornment}
          calendars={1}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} {...calendarAdornment} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} {...calendarAdornment} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
}
