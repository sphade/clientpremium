import React from "react";
import EmojiImage from "../../../assets/images/emoji.png";
import { ReactComponent as StarIcon } from "../../../assets/svgs/successful-badge.svg";
import { ReactComponent as CallIcon } from "../../../assets/svgs/call-red.svg";
import { PrimaryButton } from "../../../reusables";
import { APP_ROUTES } from "../../../routes/path";
import { Link } from "react-router-dom";

const CarAddedSuccess = () => {
  return (
    <article className="payment-method booked-page">
      <div className="payment-method__container booked-page__container">
        <div className="card__header">
          <img src={EmojiImage} alt="emoji" />
          <h3>
            <StarIcon />
            <span>Your ride has been successfully added</span>
          </h3>
          <h4>Check your email for your booking information</h4>
        </div>
        <div className="card__body">
          <p>In case of enquiries or emergencies</p>
          <div className="contact">
            <CallIcon />
            <h3>Call us 09062034000</h3>
          </div>

          <div className="button-group">
            <Link to={APP_ROUTES.home}>
              <PrimaryButton label="Back to home" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CarAddedSuccess;
