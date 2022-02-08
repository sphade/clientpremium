import React from "react";
import { CustomAlert, PrimaryButton } from "../../../../reusables";
import { NoDestinalTripDetails, TripDetails } from "./Widget";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BookingSummaryCard = ({ data }: Record<string, any>) => {
  const {
    tripType,
    passenger,
    noDestination,
    destinationTerminal,
    pickup,
    charterTypeName,
    getName,
    price,
    goToPayment,
  } = data;

  return (
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
          <TripDetails terminal={pickup} destination={destinationTerminal} />
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
  );
};

export default BookingSummaryCard;
