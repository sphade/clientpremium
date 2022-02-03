import React, { ReactNode } from "react";
import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../../assets/svgs/arrow-left-bg.svg";

const CustomCard = ({
  header,
  children,
  goBack,
  isModal = false,
}: {
  header?: string;
  children: ReactNode | ReactNode[];
  goBack?: () => void;
  isModal?: boolean;
}) => {
  const history = useHistory();
  return (
    <div className="customCard booking-summary">
      <div className={isModal ? "" : "center"}>
        <div className="customCard__card">
          {header && (
            <div className="customCard__card--header">
              {goBack && (
                <IconButton
                  onClick={() => (goBack ? goBack() : history.goBack())}
                >
                  <ArrowLeft />
                </IconButton>
              )}
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
