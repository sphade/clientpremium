import React, { useState } from "react";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";
import { Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { CustomAlert, CustomCounter, PrimaryButton } from "../../../reusables";
import BaseModal from "../../../reusables/BaseModal";
import { ReactComponent as AirPlaneIcon } from "../../../assets/svgs/air-plane-icon.svg";
import { APP_ROUTES } from "../../../routes/path";
import { singleSettings } from "../CharterPage/components/CharterCard";
import { formatNumberToCurrency } from "../../../utils";
import { PAYMENT_ENUM } from "../../../utils/constants";

const useDialogStyles = makeStyles({
  paper: {
    width: "700px!important",
  },
});

const JetPoolingDialog = ({
  open,
  handleClose,
  data = {},
}: {
  open: boolean;
  handleClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: Record<string, any>;
}) => {
  const dialogClasses = useDialogStyles();

  const [currentCount, setCurrentCount] = useState(1);

  const history = useHistory();

  const getCount = (count: number) => {
    setCurrentCount(count);
  };

  //Destructure from props
  const {
    id,
    availableFrom = "",
    mappedImages = "",
    departureCity = "",
    destinationCity = "",
    currentPrice = 0,
    startingPrice = 0,
    availableSeats = "",
  } = data;

  const handleCharterJetpooling = () => {
    history.push(APP_ROUTES.getPaymentMethod, {
      id,
      passengers: currentCount,
      price: currentPrice * currentCount,
      type: PAYMENT_ENUM.JET_POOLING,
    });
  };

  return (
    <BaseModal
      classes={dialogClasses}
      maxWidth="sm"
      open={open}
      onClose={handleClose}
    >
      <div className="trip__dialog">
        <div className="trip__dialog--image">
          <Slider {...singleSettings}>
            {mappedImages.map((image: string) => (
              <img key={image} src={image} alt="plane" />
            ))}
          </Slider>
          {/* <Link to={APP_ROUTES.charterDetailPage("air", "2")}>
            <PrimaryButton small classes="image-button" label="jet details" />
          </Link> */}
        </div>
        <div className="trip__details">
          <div>
            <p>Departure </p>
            <h3>{availableFrom}</h3>
          </div>
          <div className="trip__details--flight">
            <div>
              <p>09:30</p>
              <h3>{departureCity} (Nigeria)</h3>
              <p>Nnamdi Azikiwe Int...</p>
            </div>
            <AirPlaneIcon />
            <div>
              <p>09:30</p>
              <h3>{destinationCity} (Nigeria)</h3>
              <p>Nnamdi Azikiwe Int...</p>
            </div>
          </div>
        </div>
        <div className="trip__passengers">
          <h3>Select number of passengers</h3>
          <p>
            {availableSeats - currentCount} of {availableSeats} seats left
          </p>
          <CustomCounter getCount={getCount} />
        </div>
        <CustomAlert
          header="Notice"
          content={[
            "Prices may end cheaper depending on final number of seats booked,",
            "This service requires you to have an active Bossbus premium wallet. This is needed to credit additional gains to your wallet. Activate your Wallet.",
          ]}
        />
        <div className="trip__pricing">
          <div>
            <p>Starting price per seat:</p>
            <p>{formatNumberToCurrency({ number: startingPrice })}</p>
          </div>
          <Divider />
          <div>
            <p>Current price per seat:</p>
            <h3>{formatNumberToCurrency({ number: currentPrice })}</h3>
          </div>
          <div onClick={handleCharterJetpooling}>
            <PrimaryButton label="Join flight" />
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default JetPoolingDialog;
