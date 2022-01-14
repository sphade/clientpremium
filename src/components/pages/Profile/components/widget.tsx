import React, { ReactNode } from "react";
import useGlobalStoreProvider from "../../../../context";

export const ProfileListItem = ({
  detail,
  handleAction,
  children,
}: {
  // eslint-disable-next-line
  detail: Record<string, any>;
  handleAction?: (action: string) => void;
  children?: ReactNode;
}) => {
  const { state } = useGlobalStoreProvider();

  const { user } = state;
  const { label, text, hasAction, action, key } = detail;

  return (
    <div className="profile__list--item">
      <h3>{label}</h3>
      <div className="flex justify-between">
        <div>{children ? children : <p>{user[key] || text}</p>}</div>
        {hasAction && (
          <button
            className="action-tertiary"
            onClick={() => {
              if (handleAction && action) {
                handleAction(action);
              }
            }}
          >
            Change
          </button>
        )}
      </div>
    </div>
  );
};
