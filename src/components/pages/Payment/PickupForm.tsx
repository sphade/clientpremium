import React from "react";
import { Link } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import {
  CustomAlert,
  PrimaryButton,
  PrimaryInput,
  PrimarySelect,
} from "../../../reusables";
import SmallCar from "../../../assets/images/small-car.png";
import BaseModal from "../../../reusables/BaseModal";
import { ReactComponent as PickupIcon } from "../../../assets/svgs/pickup-icon.svg";
import { ReactComponent as CarIcon } from "../../../assets/svgs/car-outlined.svg";
import { APP_ROUTES } from "../../../routes/path";

const tripType = ["One stop trip", "Two stop trip"];

export const carType = [
  {
    name: "Sedan",
    value: "Sedan",
  },
];

const PickupForm = ({
  openPickupForm,
  closePickupForm,
}: {
  openPickupForm: boolean;
  closePickupForm: () => void;
}) => {
  return (
    <BaseModal open={openPickupForm} onClose={closePickupForm}>
      <div className="pickedup-form">
        <h3 className="pickedup-form__title">Pick-up Form</h3>
        <CustomAlert
          hasIcon={false}
          cssClass="pickedup-form__alert"
          content={[
            "Adding cars to flight charters are only available within Nigeria.",
          ]}
        />
        <div className="pickedup-form__radios">
          <h4>Trip type</h4>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="trip-type"
              className="pickedup-form__radios--list"
              defaultValue={tripType[0]}
              name="radio-buttons-group"
              row
            >
              {tripType.map((filter, id) => (
                <FormControlLabel
                  key={id}
                  value={filter}
                  control={<Radio />}
                  label={filter}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
        <div className="pickedup-form__fields">
          <div className="pickedup-form__fields--row">
            <PrimaryInput
              icon={<PickupIcon />}
              name="Leaving"
              label="Enter pick up address"
              required
            />
            <div className="depature-img">
              <img src={SmallCar} alt="small-car" />
            </div>
            <div className="depature">
              <h5>Departure location</h5>
              <p>Murtala Muhammed Airport, Lagos</p>
            </div>
          </div>
          <div className="pickedup-form__fields--row">
            <PrimarySelect
              icon={<CarIcon />}
              name="carType"
              options={carType}
              fullWidth
            />

            <div className="depature-img"></div>
            <div className="depature">
              <h5>Pick up date & time</h5>
              <p>Nov-05-2021 | 09:00 am</p>
            </div>
          </div>
          <Link to={APP_ROUTES.pickUpSummary}>
            <PrimaryButton style={{ maxWidth: "500px" }} label="NEXT" />
          </Link>
        </div>
      </div>
    </BaseModal>
  );
};

export default PickupForm;
