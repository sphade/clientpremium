import dayjs from "dayjs";
import React from "react";
import { ReactComponent as ArrowRight } from "../../../../assets/svgs/arrow-right-secondary.svg";
import { useDialogHook } from "../../../../hooks";
import { getFullDate } from "../../../../utils";
import JetPoolingDialog from "../JetPoolingDialog";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const JetpoolingCard = ({ data = {} }: { data?: Record<string, any> }) => {
  const { open, toggleDialog } = useDialogHook();

  const {
    departureAirport = {},
    destinationAirport = {},
    Aircraft = {},
    createdAt,
  } = data;

  const { ProductImages = [] } = Aircraft;
  const availableFrom = dayjs(createdAt).format("dddd D, MMMM YYYY");

  const mappedImages = ProductImages.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (image: Record<string, any>) => image?.url
  );

  return (
    <>
      <div onClick={toggleDialog} className="jet-pooling__card">
        <div className="image">
          <img src={mappedImages[0]} alt="" />
        </div>
        <div className="content">
          <div>
            <h3>{departureAirport?.address} (Nigeria)</h3>
          </div>
          <ArrowRight />
          <div>
            <h3>{destinationAirport?.address} (Nigeria)</h3>
          </div>
        </div>
        <div className="available__cta">
          <span>Available from</span>
          <span className="action"> {availableFrom}</span>
        </div>
      </div>

      <JetPoolingDialog
        open={open}
        handleClose={toggleDialog}
        data={{ ...data, availableFrom, mappedImages }}
      />
    </>
  );
};

export default JetpoolingCard;
