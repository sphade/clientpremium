/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { DateTimePicker, TimePicker } from "@mui/lab";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField, TextFieldProps } from "@mui/material";
import { DatePickerProps } from "./types";
import { PrimaryInput } from "..";

// eslint-disable-next-line
export const DatePicker = ({
  formik,
  name,
  fullWidth,
  type = "datetime-local",
  ...rest
}: DatePickerProps & TextFieldProps): JSX.Element => {
  const [value] = React.useState(new Date("2014-08-18T21:11:54"));

  const onChange = (newValue: string | null) => {
    if (newValue) {
      // setValue(newValue);
    }
  };

  if (formik) {
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <PrimaryInput
          type={type}
          formik={formik}
          name={name}
          placeholder="Pick date and time"
          fullWidth={fullWidth}
          {...rest}
        />
      </LocalizationProvider>
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        value={value}
        ampmInClock
        onChange={onChange}
        InputAdornmentProps={{ position: "start" }}
        renderInput={(params) => <TextField {...rest} {...params} fullWidth />}
      />
    </LocalizationProvider>
  );
};

export const CustomTimePicker = ({
  formik,
  name,
  fullWidth,
  ...rest
}: DatePickerProps & TextFieldProps): JSX.Element => {
  const [value] = React.useState(new Date("2014-08-18T21:11:54"));

  const onChange = (newValue: string | null) => {
    console.log(newValue);
  };

  if (formik) {
    const { values, handleChange } = formik;

    const changeTime = (newValue: string | null) => {
      if (newValue) {
        const value = new Date(newValue).getTime();
        handleChange({ target: { name, value: value } });
      }
    };

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <TimePicker
          value={values[name]}
          onChange={changeTime}
          InputAdornmentProps={{ position: "start" }}
          renderInput={(params) => (
            <PrimaryInput
              disabled
              {...params}
              formik={formik}
              name={name}
              placeholder="Pick date and time"
              fullWidth={fullWidth}
              {...rest}
            />
          )}
        />
      </LocalizationProvider>
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        value={value}
        ampmInClock
        // timeIcon={<ClockIcon />}
        onChange={onChange}
        InputAdornmentProps={{ position: "start" }}
        renderInput={(params) => <TextField {...rest} {...params} fullWidth />}
      />
    </LocalizationProvider>
  );
};
