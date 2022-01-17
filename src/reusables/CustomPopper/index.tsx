import React from "react";
import { Popover, PopoverOrigin, PopoverPosition } from "@mui/material";

const CustomerPopper = ({
  buttonElement,
  children,
  anchorOrigin,
  anchorPosition,
  transformOrigin,
}: {
  buttonElement: JSX.Element;
  anchorOrigin?: PopoverOrigin;
  children: JSX.Element[] | JSX.Element;
  anchorPosition?: PopoverPosition;
  transformOrigin?: PopoverOrigin;
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <button aria-describedby={id} onClick={handleClick}>
        {buttonElement}
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorPosition={anchorPosition}
        transformOrigin={transformOrigin && transformOrigin}
        anchorOrigin={
          anchorOrigin || {
            vertical: "bottom",
            horizontal: "left",
          }
        }
      >
        {children}
      </Popover>
    </div>
  );
};

export default CustomerPopper;
