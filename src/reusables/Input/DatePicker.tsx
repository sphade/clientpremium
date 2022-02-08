/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  DateTimePicker,
  MobileDatePicker,
  MobileDateTimePicker,
  MobileTimePicker,
  TimePicker,
} from "@mui/lab";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { DatePickerProps } from "./types";
import { PrimaryInput } from "..";
import { ReactComponent as CalendarIcon } from "./../../assets/svgs/calendar.svg";
import { ReactComponent as ClockIcon } from "./../../assets/svgs/clock-input.svg";

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

  const InputProps = {
    startAdornment: (
      <InputAdornment position="start">
        <CalendarIcon />
      </InputAdornment>
    ),
  };

  if (formik) {
    const { values, handleChange } = formik;

    const changeDate = (newValue: string | null) => {
      if (newValue) {
        const value = new Date(newValue).toUTCString();
        handleChange({ target: { name, value: value } });
      }
    };

    const picker =
      type === "date" ? (
        <MobileDatePicker
          InputProps={InputProps}
          value={values[name]}
          onChange={changeDate}
          renderInput={(params) => (
            <PrimaryInput
              {...params}
              formik={formik}
              name={name}
              type="navigator"
              placeholder="Pick date and time"
              fullWidth={fullWidth}
              {...rest}
            />
          )}
        />
      ) : (
        <MobileDateTimePicker
          InputProps={InputProps}
          value={values[name]}
          onChange={changeDate}
          renderInput={(params) => (
            <PrimaryInput
              {...params}
              formik={formik}
              name={name}
              type="navigator"
              placeholder="Pick date and time"
              fullWidth={fullWidth}
              {...rest}
            />
          )}
        />
      );

    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {picker}
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
        <MobileTimePicker
          value={values[name]}
          onChange={changeTime}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ClockIcon />
              </InputAdornment>
            ),
          }}
          InputAdornmentProps={{ position: "start" }}
          renderInput={(params) => (
            <PrimaryInput
              {...params}
              formik={formik}
              name={name}
              type="navigator"
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
