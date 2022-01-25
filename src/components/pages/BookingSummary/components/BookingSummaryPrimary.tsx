import React, { useEffect } from "react";
import { Checkbox } from "@mui/material";
import { Link } from "react-router-dom";

import { ReactComponent as SmallPlane } from "../../../../assets/svgs/small-plane.svg";
import { useDialogHook } from "../../../../hooks";
import { PrimaryButton, CustomAlert, Preloader } from "../../../../reusables";
import { APP_ROUTES } from "../../../../routes/path";
import {
  charterMappings,
  formatNumberToCurrency,
  getUrlQueryEntries,
} from "../../../../utils";
import InsufficientBalanceDialog from "./InsufficientBalanceDialog";
import { useQuery } from "react-query";
import { fetchCharterById } from "../../../../routes/api";
import { DestinationSmall, TripDetails } from "./Widget";

const BookingSummaryPrimary = () => {
  const { open, toggleDialog } = useDialogHook();
  useEffect(() => {
    // toggleDialog();
  }, []);

  const { type, id } = getUrlQueryEntries();

  const charterQuery = charterMappings[type] || "";

  const {
    isLoading,
    error,
    data = [],
  } = useQuery([id, charterQuery], async () => {
    const data = await fetchCharterById(charterQuery, id);
    return data;
  });

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return <h3>Error Fetching</h3>;
  }

  console.log({ data });

  const destination = (data?.AircraftDestinations || [])[0]?.Airport || {};
  const terminal = data?.Airport || {};

  console.log({ destination, terminal });

  const getName = () => {
    const { builder = "", model = "", brand = "" } = data;
    return `${brand || builder}, ${model}`;
  };

  const price = formatNumberToCurrency({ number: data?.price });

  return (
    <div className="booking-summary ">
      <div className="center">
        <article className="booking-summary__top-card">
          <div className="booking-summary__top-card--trip">
            <DestinationSmall destination={terminal} />
            <SmallPlane />
            <DestinationSmall destination={destination} />
          </div>
          <div className="vertical-divider"></div>
          <div className="booking-summary__top-card--trip">
            <DestinationSmall destination={destination} />
            <SmallPlane />
            <DestinationSmall destination={terminal} />
          </div>
          <div className="vertical-divider"></div>

          <button>Edit</button>
        </article>

        <article className="booking-summary__booking-card share__card">
          <h3 className="share__info">
            <span>Would you like to share flight and earn? </span>
            <button>Learn More</button>
          </h3>
          <div className="share__checkbox">
            <Checkbox defaultChecked />
            <h5>Share flight</h5>
          </div>
        </article>

        <article className="booking-summary__booking-card">
          <h3 className="booking-card__title">BOOKING SUMMARY</h3>
          <div className="horizontal-divider"></div>
          <div className="booking-card__content">
            <div className="booking-card__content--list">
              <p>Booking type:</p>
              <p>Return trip</p>
            </div>
            <div className="booking-card__content--list">
              <p>Passengers:</p>
              <p>4</p>
            </div>
            <TripDetails terminal={terminal} destination={destination} />
            <TripDetails terminal={destination} destination={terminal} />
            <div className="booking-card__content--list">
              <p>Aircraft:</p>
              <p>{getName()}</p>
            </div>
            <div className="booking-card__content--list">
              <p>Booking price:</p>
              <p>Tax: N 00:00</p>
            </div>
            <div className="booking-card__content--list">
              <p></p>
              <p>{price}</p>
            </div>
            <div className="horizontal-divider"></div>

            <Link
              to={APP_ROUTES.getPaymentMethod({
                type: type,
                id: id,
                price: data?.price || 0,
              })}
              className="booking-card__content--button"
            >
              <PrimaryButton label="Go to Payment" />
            </Link>

            <CustomAlert
              header="Cancellation Policy"
              content={[
                "All charter cancellations are to be done 24 hours before departure.",
                "All charter cancellations attracts a fine on 10% of the total paid fee.",
              ]}
              hasIcon
            />
          </div>
        </article>
      </div>
      <InsufficientBalanceDialog open={open} handleClose={toggleDialog} />
    </div>
  );
};

export default BookingSummaryPrimary;
