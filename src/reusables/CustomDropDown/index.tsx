/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Menu, MenuItem } from "@mui/material";
import { ReactComponent as ArrowDown } from "../../assets/svgs/caret-down-line.svg";

const CustomDropDown = ({
  buttonText,
  menuItems,
}: {
  buttonText: string;
  menuItems: Array<any>;
}) => {
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
        className="flex gap-2 items-center"
      >
        {buttonText}{" "}
        <span>
          <ArrowDown />
        </span>
      </p>
      <Menu
        className="menu-dropdown"
        PaperProps={{
          style: {
            width: 180,
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
        {menuItems.map((menu, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {menu}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CustomDropDown;
