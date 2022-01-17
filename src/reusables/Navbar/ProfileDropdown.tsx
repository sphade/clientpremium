/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { ReactComponent as ArrowDown } from "../../assets/svgs/caret-down-line.svg";
import { ReactComponent as NavArrow } from "../../assets/svgs/nav-arrow.svg";
import { ReactComponent as Logout } from "../../assets/svgs/logout.svg";
import { PLACEHOLDER_IMAGE, userProfileMenu } from "./constant";
import useGlobalStoreProvider from "../../context";
import { APP_ROUTES } from "../../routes/path";

const ProfileDropDown = ({ buttonText }: { buttonText: string }) => {
  const { state, logoutUser } = useGlobalStoreProvider();

  const {
    user: { name: username = "", email = "", photo = "" },
  } = state;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="drop-down__menu">
      <p
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {buttonText}{" "}
        <span>
          <ArrowDown />
        </span>
      </p>
      <Menu
        className="menu-dropdown nav-custom"
        PaperProps={{
          style: {
            width: 240,
          },
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to={APP_ROUTES.profile}>
          <MenuItem onClick={handleClose} className="nav-item">
            <img src={photo ? photo : PLACEHOLDER_IMAGE} alt="user-avater" />
            <div className="middle">
              <h3>{username}</h3>
              <p>{email}</p>
            </div>
            <NavArrow />
          </MenuItem>
        </Link>
        {userProfileMenu.map(({ icon: Icon, name, link }, index) => (
          <Link key={index} to={link || "#"}>
            <MenuItem onClick={handleClose} className="nav-item secondary">
              <Icon />
              <div className="middle">
                <h3>{name}</h3>
              </div>
              <NavArrow />
            </MenuItem>
          </Link>
        ))}
        <MenuItem
          onClick={() => {
            logoutUser();
            handleClose();
          }}
          className="nav-item tertiary"
        >
          <Logout />
          <div className="middle">
            <h3>Logout</h3>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileDropDown;
