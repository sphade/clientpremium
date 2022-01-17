import React from "react";
import { mockNotification } from "../constants";
import { ReactComponent as BossBusLogoSmall } from "../../../../assets/svgs/bossbuss-small-icon.svg";
import { ReactComponent as CloseIcon } from "../../../../assets/svgs/close-black-icon.svg";
import { IconButton, Stack } from "@mui/material";

const NotificationBox = () => {
  return (
    <div className="premium__filter notification">
      <h3 className="premium__filter--title">Notifications</h3>
      <Stack className="notification__contents">
        {mockNotification.map(({ message, date }, index) => (
          <div className="notification__contents--tile" key={index}>
            <BossBusLogoSmall />
            <div className="message">
              <h3>{message}</h3>
              <p>{date}</p>
            </div>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </div>
        ))}
      </Stack>
    </div>
  );
};

export default NotificationBox;
