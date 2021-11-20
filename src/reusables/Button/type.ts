import { ButtonHTMLAttributes } from "react";


export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => void;
    classes?: string;
    label: string;
    fullWidth?: boolean;
    noRounded?: boolean;
    small?: boolean;
}