import React from "react";
import { useLocation } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import {
  CharterTypeDropdown,
  CustomAlert,
  CustomGoogleAddress,
  PrimaryButton,
} from "../../../reusables";
import SmallCar from "../../../assets/images/small-car.png";
import BaseModal from "../../../reusables/BaseModal";
import { useSearchCharter } from "../../../hooks";
import { isEmpty } from "lodash";
import { getTime } from "../../../utils";

const tripType = ["One stop trip", "Two stop trip"];

const PickupForm = ({
  openPickupForm,
  closePickupForm,
}: {
  openPickupForm: boolean;
  closePickupForm: () => void;
}) => {
  const currentCharter = "land";

  const location = useLocation();

  const routerState = (location?.state || {}) as Record<string, any>;

  const { charter = {} } = routerState;
  if (isEmpty(charter)) {
    return <div>No data</div>;
  }

  const { departureCity = "", departureDate = "" } = charter;

  const time = getTime(departureDate);

  const initialValues = {
    departureTime: time,
    departureDate,
    duration: 1,
  };

  // Instantiate formik
  const { formik, isDisabled, handleSubmit } = useSearchCharter({
    currentCharter,
    initialValues,
  });

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
            <CustomGoogleAddress
              name="pickup"
              label="Pickup Location"
              iconType="navigator"
              formik={formik}
            />
            <div className="depature-img">
              <img src={SmallCar} alt="small-car" />
            </div>
            <div className="depature">
              <h5>Departure location</h5>
              <p>{departureCity}</p>
            </div>
          </div>
          <div className="pickedup-form__fields--row">
            <CharterTypeDropdown filter="land" fullWidth formik={formik} />

            <div className="depature-img"></div>
            <div className="depature">
              <h5>Pick up date & time</h5>
              <p>{departureDate}</p>
            </div>
          </div>
          <PrimaryButton
            disabled={isDisabled}
            onClick={handleSubmit}
            style={{ maxWidth: "500px" }}
            label="NEXT"
          />
        </div>
      </div>
    </BaseModal>
  );
};

export default PickupForm;
