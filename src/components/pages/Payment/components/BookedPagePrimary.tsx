import React from "react";
import EmojiImage from "../../../../assets/images/emoji.png";
import BlackCar from "../../../../assets/images/black-car.png";
import { ReactComponent as StarIcon } from "../../../../assets/svgs/successful-badge.svg";
import { ReactComponent as CallIcon } from "../../../../assets/svgs/call-red.svg";
import {
  CustomAlert,
  OutlineButton,
  PrimaryButton,
} from "../../../../reusables";
import { useDialogHook } from "../../../../hooks";
import PickupForm from "../PickupForm";
import { getUrlQueryEntries } from "../../../../utils";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../../routes/path";

const BookedPagePrimary = () => {
  const { open, toggleDialog } = useDialogHook();

  const { type = "" } = getUrlQueryEntries();

  const isCarCharter = type === "land";
  return (
    <article className="payment-method booked-page">
      <div className="payment-method__container booked-page__container">
        <div className="card__header flex items-center justify-center gap-6">
          <img src={EmojiImage} alt="emoji" />
          <div>
            <h3>
              <StarIcon />
              <span>Your trip has successfully been booked</span>
            </h3>
            <h4>Check your email for your booking information</h4>
          </div>
        </div>
        <div className="card__body">
          <p>In case of enquiries or emergencies</p>
          <div className="contact">
            <CallIcon />
            <h3>Call us 09062034000</h3>
          </div>

          {!isCarCharter && (
            <div className="need__car--container">
              <div>
                <div className="container-img">
                  <img src={BlackCar} alt="black-car" />
                </div>
                <div>
                  <h5>Need a car?</h5>
                  <p>
                    By clicking on “Add car” bossbuss will provide you with a
                    car, to pick you up from your pick up point to your
                    departure Av location.
                  </p>
                  <a href="#">View more details</a>
                </div>
              </div>
              <CustomAlert
                hasIcon={false}
                content={[
                  "Adding cars to flight charters are only available within Nigeria.",
                ]}
              />
            </div>
          )}
          <div className="button-group">
            <Link to={APP_ROUTES.home}>
              <OutlineButton label="back to home" />
            </Link>
            {!isCarCharter && (
              <PrimaryButton
                label="Add car"
                onClick={() => {
                  toggleDialog();
                }}
              />
            )}
          </div>
        </div>
      </div>
      <PickupForm openPickupForm={open} closePickupForm={toggleDialog} />
    </article>
  );
};

export default BookedPagePrimary;
