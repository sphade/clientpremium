import * as React from "react";
import TextField from "@mui/material/TextField";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Box from "@mui/material/Box";
import { RangeInput } from "@mui/lab/DateRangePicker/RangeTypes";
import { FormControl, InputAdornment, SvgIcon } from "@mui/material";
import { ReactComponent as CalendarIcon } from "./../../assets/svgs/calendar.svg";

export default function BasicDateRangePicker() {
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

  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          startText="Start From"
          endText="To"
          minDate={new Date()}
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
