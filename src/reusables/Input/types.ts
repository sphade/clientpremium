import { InputHTMLAttributes } from 'react';

export interface InputType extends InputHTMLAttributes<HTMLInputElement> {
    icon?: string | JSX.Element;
    visible?: boolean;
    placeholder: string;
    search?: boolean;
    classes?: string;
    label: string;
}
