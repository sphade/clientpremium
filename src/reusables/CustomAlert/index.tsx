import React from 'react';
import { ReactComponent as AlertIcon } from './../../assets/svgs/alert.svg';

export type AlertType = {
    hasIcon?: boolean;
    content: string | JSX.Element;
    header?: string;
    cssClass?: string;
};

const CustomAlert = ({ hasIcon, content, header, cssClass }: AlertType) => {
    return (
        <div className={`alert ${cssClass} `}>
            {hasIcon && <AlertIcon />}
            <div className="alert__content">
                <h3>{header}</h3>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default CustomAlert;
