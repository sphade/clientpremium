import React, { useEffect } from "react";
import { Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as SmallPlane } from "../../../../assets/svgs/small-plane.svg";
import { useDialogHook } from "../../../../hooks";
import { PrimaryButton, CustomAlert } from "../../../../reusables";
import { APP_ROUTES } from "../../../../routes/path";
import { useGetParams } from "../../../../utils";
import InsufficientBalanceDialog from "./InsufficientBalanceDialog";

const BookingSummaryPrimary = () => {
  const { search } = useGetParams();

  const { open, toggleDialog } = useDialogHook();
  useEffect(() => {
    toggleDialog();
  }, []);

  return (
    <div className="booking-summary ">
      <div className="center">
        <article className="booking-summary__top-card">
          <div className="booking-summary__top-card--trip">
            <div className="trip-details">
              <h3>Lagos, Nigeria</h3>
              <p>Murtala Muhammed Int</p>
            </div>
            <SmallPlane />
            <div className="trip-details">
              <h3>Lagos, Nigeria</h3>
              <p>Murtala Muhammed Int</p>
            </div>
          </div>
          <div className="vertical-divider"></div>
          <div className="booking-summary__top-card--trip">
            <div className="trip-details">
              <h3>Lagos, Nigeria</h3>
              <p>Murtala Muhammed Int</p>
            </div>
            <SmallPlane />
            <div className="trip-details">
              <h3>Lagos, Nigeria</h3>
              <p>Murtala Muhammed Int</p>
            </div>
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
            <div className="booking-card__content--details">
              <h5 className="content-details__title">Departure details</h5>
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
            <div className="booking-card__content--details">
              <h5 className="content-details__title">Return details details</h5>
              <div className="card--summary">
                <div>
                  <p>Ret: 20 Nov 2021</p>
                  <p>18:00 (Abuja)</p>
                  <p>Nnamdi Azikiwe Int...</p>
                </div>
                <SmallPlane />
                <div>
                  <p>To:</p>
                  <p>19:24 (Lagos)</p>
                  <p>Nnamdi Azikiwe Int...</p>
                </div>
              </div>
            </div>
            <div className="booking-card__content--list">
              <p>Aircraft:</p>
              <p>Sky Night 6000</p>
            </div>
            <div className="booking-card__content--list">
              <p>Booking price:</p>
              <p>Tax: N 00:00</p>
            </div>
            <div className="booking-card__content--list">
              <p></p>
              <p>N 1,400, 000</p>
            </div>
            <div className="horizontal-divider"></div>

            <Link
              to={APP_ROUTES.paymentMethod + search}
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
