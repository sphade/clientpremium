import React from 'react';
import { ReactComponent as AlertIcon } from './../../assets/svgs/alert.svg';

export type AlertType = {
    hasIcon?: boolean;
    content: string[] | JSX.Element[];
    header?: string;
    cssClass?: string;
};

const CustomAlert = ({ hasIcon =true, content, header, cssClass }: AlertType) => {
    return (
        <div className={`alert ${cssClass} `}>
            <div className="alert__header"
            >
                
            {hasIcon && <AlertIcon />}
                <h3>{header}</h3>
            </div>
            
            <div className="alert__content">
               { content.map(
                   (text, index) => (
                       <div key={index} className="alert__content--content">
                           
                           <div className="alert__content--bullet"></div>
                          <p key={index}>{text}</p>
                       </div>

                   )
               )
               
               }
            </div>
        </div>
    );
};

export default CustomAlert;
