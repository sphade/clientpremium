import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as SmallPlane } from "../../../../assets/svgs/small-plane.svg";
import { useDialogHook } from "../../../../hooks";
import { PrimaryButton, CustomAlert } from "../../../../reusables";
import { APP_ROUTES } from "../../../../routes/path";
import InsufficientBalanceDialog from "./InsufficientBalanceDialog";

const BookingSummarySecondary = () => {
  const { open, toggleDialog } = useDialogHook();
  useEffect(() => {
    toggleDialog();
  }, []);
  return (
    <div className="booking-summary ">
      <div className="center">
        <article className="booking-summary__booking-card">
          <h3 className="booking-card__title">BOOKING SUMMARY</h3>
          <div className="horizontal-divider"></div>
          <div className="booking-card__content">
            <div className="booking-card__content--list">
              <p>Booking type:</p>
              <p> Nov-25-2021</p>
            </div>
            <div className="booking-card__content--list">
              <p>Booking type:</p>
              <p>One-way trip (jet pooling)</p>
            </div>
            <div className="booking-card__content--list">
              <p>Passengers:</p>
              <p>1</p>
            </div>
            <div className="booking-card__content--details">
              <div className="card--summary">
                <div>
                  <p>Dep: 20 Nov 2021</p>
                  <p>12:00 (Lagos)</p>
                  <p>Murtala Muhammed...</p>
                </div>
                <SmallPlane />
                <div>
                  <p>To:</p>
                  <p>13:25 (Abuja)</p>
                  <p>Nnamdi Azikiwe Int...</p>
                </div>
              </div>
            </div>

            <div className="booking-card__content--list">
              <p>Aircraft:</p>
              <p>Challenger 6000</p>
            </div>
            <div className="booking-card__content--list">
              <p>Current price per seat:</p>
              <p>N 600, 000</p>
            </div>

            <div className="horizontal-divider"></div>

            <Link
              to={APP_ROUTES.paymentMethod}
              className="booking-card__content--button"
            >
              <PrimaryButton label="Reserve Charter" />
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

export default BookingSummarySecondary;
