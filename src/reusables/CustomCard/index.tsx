import React, { ReactNode } from "react";
import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../assets/svgs/arrow-left-bg.svg";

const CustomCard = ({
  header,
  children,
  goBack,
}: {
  header?: string;
  children: ReactNode | ReactNode[];
  goBack?: () => void;
}) => {
  const history = useHistory();
  return (
    <div className="customCard booking-summary">
      <div className="center">
        <div className="customCard__card">
          {header && (
            <div className="customCard__card--header">
              <IconButton
                onClick={() => (goBack ? goBack() : history.goBack())}
              >
                <ArrowLeft />
              </IconButton>
              <h3>{header}</h3>
            </div>
          )}
          <div className="customCard__card--details">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
