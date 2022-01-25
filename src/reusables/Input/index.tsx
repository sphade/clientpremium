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
import { FormikProps, FormikValues } from "formik";
import { ReactComponent as EyeIcon } from "./../../assets/svgs/eye.svg";

const HiddenEye = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // className="h-6 w-6"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
    />
  </svg>
);

export type ICustomFormikProps = Omit<
  FormikProps<FormikValues>,
  "setFormikState" | "setValues" | "resetForm"
>;

export interface PrimaryInputProps {
  formik?: ICustomFormikProps;
  name: string;
  endIcon?: string | JSX.Element;
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
  endIcon,
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
        onChange={handleChange}
        value={values[name]}
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

    // ...rest?.inputProps,
  };
  if (formik) {
    const { handleChange, handleBlur, values, errors, touched } = formik;

    return (
      <TextField
        select
        {...rest}
        name={name}
        className={`primary__input ${className}`}
        onChange={handleChange}
        value={values[name]}
        onBlur={handleBlur}
        error={touched[name] && Boolean(errors[name])}
        helperText={touched[name] && errors[name]}
        variant="outlined"
        InputProps={inputProps}
        fullWidth={fullWidth}
      >
        <MenuItem value="">
          <em>{placeholder || "Select"}</em>
        </MenuItem>
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
      <MenuItem value="">
        <em>{placeholder || "Select"}</em>
      </MenuItem>
      {options.map(({ value, name }, index) => (
        <MenuItem key={index} value={value}>
          {capitalize(name)}
        </MenuItem>
      ))}
    </TextField>
  );
};
