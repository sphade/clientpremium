import React, { ReactNode} from 'react';


export const ProfileListItem = ({detail, handleAction, children}: {
    detail: Record<string, any>,
    handleAction?: (action: string) => void,
    children?: ReactNode
}) =>  {
    const { label, text, hasAction, action} = detail;

  

    return(
        <div className="profile__list--item">
            <h3>{label}</h3>
            <div className="flex justify-between">
            <div>

            {children ? children: <p>{text}</p>}
            </div>
            {
                hasAction && <button className="action-tertiary"
                
                onClick={() => {
                    if (handleAction && action) {
                        handleAction(action)
                    }
                }}
                >Change</button>
            }

            </div>
        </div>
    )
}