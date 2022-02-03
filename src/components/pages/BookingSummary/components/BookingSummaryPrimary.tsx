/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { Checkbox } from "@mui/material";
import { Link, useHistory, useLocation } from "react-router-dom";

import { ReactComponent as SmallPlane } from "../../../../assets/svgs/small-plane.svg";
import {
  useCheckCharterType,
  useDialogHook,
  useRouterState,
} from "../../../../hooks";
import { PrimaryButton, CustomAlert, Preloader } from "../../../../reusables";
import { APP_ROUTES } from "../../../../routes/path";
import {
  charterMappings,
  formatNumberToCurrency,
  getCharterName,
  getUrlQueryEntries,
} from "../../../../utils";
import InsufficientBalanceDialog from "./InsufficientBalanceDialog";
import { useQuery } from "react-query";
import { fetchCharterById } from "../../../../routes/api";
import { DestinationSmall, NoDestinalTripDetails, TripDetails } from "./Widget";
import { isEmpty } from "lodash";

const BookingSummaryPrimary = () => {
  const { isLand, charterType } = useCheckCharterType();

  const { open, toggleDialog } = useDialogHook();
  useEffect(() => {
    // toggleDialog();
  }, []);

  const [routerState] = useRouterState();

  const history = useHistory();

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

  if (error || isEmpty(routerState)) {
    return <h3>Error Fetching</h3>;
  }

  const {
    tripType,
    departureDate,
    duration,
    destination,
    passenger,
    departureTime,
  } = routerState;

  let { pickup } = routerState;

  const noDestination = isLand || ["boat cruise"].includes(tripType);
  const noTerminal = isLand;

  pickup = { name: pickup, departureDate, departureTime };

  const destinationTerminal = (data?.destinations || [])[0];

  if (!noTerminal) {
    pickup = { ...pickup, ...data?.pickupTerminal };
  }

  const getName = () => {
    const { builder = "", model = "", brand = "" } = data;
    return `${brand || builder}, ${model}`;
  };

  const price = formatNumberToCurrency({ number: data?.price });

  const charterTypeName = getCharterName(charterType);

  //functions
  const goToPayment = () => {
    history.push(
      APP_ROUTES.getPaymentMethod({
        type: type,
        id: id,
        price: data?.price || 0,
      }),
      {
        ...routerState,
        price: data?.price || 0,
        type,
        id,
        ...(pickup?.id && { terminalId: pickup?.id }),
        ...(destinationTerminal &&
          destinationTerminal?.id && {
            destinationTerminalId: destinationTerminal?.id,
          }),
      }
    );
  };

  return (
    <div className="booking-summary ">
      <div className="center">
        {/* <article className="booking-summary__top-card">
          <div className="booking-summary__top-card--trip">
            <DestinationSmall destination={terminal} />
            <SmallPlane />
            <DestinationSmall departure={false} destination={destination} />
          </div>
          <div className="vertical-divider"></div>
          <div className="booking-summary__top-card--trip">
            <DestinationSmall destination={destination} />
            <SmallPlane />
            <DestinationSmall destination={terminal} />
          </div>
          <div className="vertical-divider"></div>

          <button>Edit</button>
        </article> */}

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
            {tripType && (
              <div className="booking-card__content--list">
                <p>Booking type:</p>
                <p>{tripType}</p>
              </div>
            )}
            <div className="booking-card__content--list">
              <p>Passengers:</p>
              <p>{passenger}</p>
            </div>
            {noDestination ? (
              <NoDestinalTripDetails terminal={pickup} />
            ) : (
              <TripDetails
                terminal={pickup}
                destination={destinationTerminal}
              />
            )}
            <div className="booking-card__content--list">
              <p>{charterTypeName}:</p>
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

            <div className="booking-card__content--button">
              <PrimaryButton onClick={goToPayment} label="Go to Payment" />
            </div>

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
