import React from "react";
import clsx from "clsx";
import useGlobalStoreProvider from "../../../../context";

const UserAvatar = ({ small }: { small?: boolean }) => {
  const { state } = useGlobalStoreProvider();

  const {
    user: { name = "" },
  } = state;

  const username = `${name[0]}${name[1]}`;
  return (
    <p className={clsx("user__avatar--text", small && "small")}>{username}</p>
  );
};

export default UserAvatar;
