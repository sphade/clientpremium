import { DateRangePickerProps } from "@mui/lab";
import { FormikErrors, FormikProps, FormikValues } from "formik";
import {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  icon?: string | JSX.Element;
  visible?: boolean;
  placeholder: string;
  search?: boolean;
  classes?: string;
  label: string;
}

export type ICustomFormikProps = Omit<
  FormikProps<FormikValues>,
  "setFormikState" | "setValues" | "resetForm"
>;

export interface PrimaryInputProps {
  formik?: ICustomFormikProps;
  name: string;
  endIcon?: string | JSX.Element;
  icon?: string | JSX.Element;
  iconType?: "navigator" | "location";
}

export interface PrimarySelectProps {
  handleSelectChange?: (value: string) => void;
  formik?: ICustomFormikProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: Array<any>;
  placeholder?: string;
  name: string;
  fullWidth?: boolean;
  icon?: string | JSX.Element;
  makeEmpty?: boolean;
  label?: string;
}

export interface DatePickerProps {
  formik?: ICustomFormikProps;
  name: string;
  fullWidth?: boolean;
  type?: "datetime-local" | "date";
}

export interface DateRangeInputProps
  extends Partial<Omit<DateRangePickerProps<Date>, "value" | "onChange">> {
  id?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  fullWidth?: boolean;
  onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: number[];
  required?: boolean;
  format?: string;
  parseValue?: boolean;
  hasError?: boolean;
  disabled?: boolean;
  errorMessage?:
    | string
    | FormikErrors<FormikValues>
    | FormikErrors<FormikValues>[];
  additionalLabel?: JSX.Element | ReactNode;
  showCalendarIcon?: boolean;
  showHelperText?: boolean;
}
