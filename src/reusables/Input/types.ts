import { FormikProps, FormikValues } from 'formik';
import { InputHTMLAttributes } from 'react';

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
  iconType?: 'navigator' | 'location'
}

export interface PrimarySelectProps {
  handleSelectChange?: (value: string) => void,
  formik?: ICustomFormikProps;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: Array<any>;
  placeholder?: string;
  name: string;
  fullWidth?: boolean;
  icon?: string | JSX.Element;
}

export interface DatePickerProps {
     formik?: ICustomFormikProps;
      name: string;
      fullWidth?: boolean;
    type?: 'datetime-local' | 'date'
}