import React from 'react';
import { ButtonType } from './type';

export const PrimaryButton = (props: ButtonType): JSX.Element => {
    const {
        small,
        fullWidth = false,
        label,
        children,
        classes,
        noRounded = false,
        ...rest
    } = props;
    return (
        <button
            {...rest}
            data-testid="button"
            className={`${classes} primary__button ${small ? '' : 'large'} ${
                fullWidth ? 'full__width' : ''
            } ${noRounded && 'no__rounded'}`}
        >
            {label ? label : children}
        </button>
    );
};

export const OutlineButton = (props: ButtonType): JSX.Element => {
    const {
        small,
        fullWidth = false,
        label,
        children,
        classes,
        noRounded = false,
        ...rest
    } = props;
    return (
        <button
            {...rest}
            data-testid="button"
            className={`${classes} outline__button 
            ${small ? '' : 'large'}
            ${fullWidth ? 'full__width' : ''}  ${noRounded && 'no__rounded'}`}
        >
            {label ? label : children}
        </button>
    );
};
export const LinkButton = (props: ButtonType): JSX.Element => {
    return (
        <button {...props} data-testid="button" className={`${props.classes} link__button`}>
            {props.label ? props.label : props.children}
        </button>
    );
};
