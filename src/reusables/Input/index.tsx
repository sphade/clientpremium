/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { MouseEvent, useState } from "react";
import {
  IconButton,
  InputAdornment,
  MenuItem,
  SvgIcon,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { capitalize } from "lodash";
import { ReactComponent as EyeIcon } from "./../../assets/svgs/eye.svg";
import { PrimaryInputProps, PrimarySelectProps } from "./types";
import { HiddenEye, IconType } from "./constants";

export const PrimaryInput = ({
  formik,
  name,
  icon,
  endIcon,
  iconType,
  fullWidth = true,
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
      rest?.type !== "password" && {
        startAdornment: (
          <InputAdornment position="start">
            <SvgIcon color="primary">{icon}</SvgIcon>
          </InputAdornment>
        ),
      }),
    ...(iconType && {
      startAdornment: (
        <InputAdornment position="start">{IconType[iconType]}</InputAdornment>
      ),
    }),
    ...(rest?.type === "password" && {
      // If the input type is a password, add ability to toggle views
      endAdornment: (
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            onMouseDown={handleMouseDownPassword}
          >
            {!showPassword ? <EyeIcon /> : <HiddenEye />}
          </IconButton>
        </InputAdornment>
      ),
    }),
    ...(endIcon && {
      // If the input type is a password, add ability to toggle views
      endAdornment: (
        <InputAdornment position="end">
          <IconButton>
            <SvgIcon color="primary">{endIcon}</SvgIcon>
          </IconButton>
        </InputAdornment>
      ),
    }),
    notched: false,
    ...rest?.InputProps,
  };

  if (formik) {
    const { handleChange, handleBlur, values, errors, touched } = formik;

    const newValue =
      rest?.type === "amount"
        ? values[name] &&
          Number(values[name])
            .toFixed()
            .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
        : values[name];

    const handleValueChange = (event: any) => {
      if (rest?.type === "amount") {
        const {
          target: { value: inputValue },
        } = event;

        // eslint-disable-next-line no-param-reassign
        event.target.value = Number(inputValue.replace(/[,\D]+/g, ""));

        handleChange(event);
      } else {
        handleChange(event);
      }
    };

    return (
      <TextField
        className="primary__input"
        {...rest}
        type={
          rest.type === "password" && showPassword
            ? "text"
            : rest.type === "password" && !showPassword
            ? "password"
            : rest?.type || "text"
        }
        name={name}
        onChange={handleValueChange}
        value={newValue}
        onBlur={handleBlur}
        error={touched[name] && Boolean(errors[name])}
        helperText={touched[name] && errors[name]}
        variant="outlined"
        InputProps={inputProps}
        fullWidth={fullWidth}
      />
    );
  }

  return (
    <TextField
      className="primary__input"
      type={
        rest.type === "password" && showPassword
          ? "text"
          : rest.type === "password" && !showPassword
          ? "password"
          : rest?.type || "text"
      }
      {...rest}
      name={name}
      variant="outlined"
      InputProps={inputProps}
      fullWidth={fullWidth}
    />
  );
};

export const PrimarySelect = ({
  formik,
  options = [],
  placeholder,
  name,
  icon,
  fullWidth = true,
  className = "",
  handleSelectChange,
  makeEmpty = true,
  ...rest
}: PrimarySelectProps & TextFieldProps) => {
  const inputProps = {
    ...(icon &&
      rest?.type !== "password" && {
        startAdornment: (
          <InputAdornment position="start">
            <SvgIcon color="primary">{icon}</SvgIcon>
          </InputAdornment>
        ),
      }),
  };
  if (formik) {
    const { handleChange, handleBlur, values, errors, touched } = formik;

    return (
      <TextField
        select
        {...rest}
        name={name}
        className={`primary__input ${className}`}
        onChange={(e) => {
          if (handleSelectChange) {
            handleSelectChange(e.target.value);
          }
          handleChange(e);
        }}
        value={values[name]}
        onBlur={handleBlur}
        error={touched[name] && Boolean(errors[name])}
        helperText={touched[name] && errors[name]}
        variant="outlined"
        InputProps={inputProps}
        fullWidth={fullWidth}
      >
        {makeEmpty && (
          <MenuItem value="" disabled>
            <em>{placeholder || "Select"}</em>
          </MenuItem>
        )}
        {options.map(({ value, name }, index) => (
          <MenuItem key={index} value={value}>
            {capitalize(name)}
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
      className="primary__input"
      variant="outlined"
      InputProps={inputProps}
      fullWidth={fullWidth}
    >
      {makeEmpty && (
        <MenuItem value="" disabled>
          <em>{placeholder || "Select"}</em>
        </MenuItem>
      )}
      {options.map(({ value, name }, index) => (
        <MenuItem key={index} value={value}>
          {capitalize(name)}
        </MenuItem>
      ))}
    </TextField>
  );
};
