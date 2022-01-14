import React, { useState } from "react";
import {
  CustomTimePicker,
  DatePicker,
  PrimaryInput,
  PrimarySelect,
} from "../../../../reusables";
import { landCraftType } from "../../CharterPage/constants";

import { ReactComponent as NavigatorIcon } from "./../../../../assets/svgs/navigator.svg";
import { ReactComponent as LocationIcon } from "./../../../../assets/svgs/location-outlined.svg";
import { ReactComponent as DecrementIcon } from "./../../../../assets/svgs/decrement.svg";
import { ReactComponent as IncrementIcon } from "./../../../../assets/svgs/increment.svg";

const LandCharterFilter = () => {
  const [passengerCount, setPassengerCount] = useState(1);

  const increment = () => setPassengerCount(passengerCount + 1);
  const decrement = () => {
    if (passengerCount < 2) {
      return;
    }
    setPassengerCount(passengerCount - 1);
  };
  return (
    <>
      <div className="charter__content--select">
        <div>
          <PrimarySelect
            name="carType"
            label="Car type"
            fullWidth={false}
            options={landCraftType}
          />
        </div>
        <div>
          <DecrementIcon onClick={decrement} />
          <p>
            {passengerCount} {passengerCount > 1 ? "Passengers" : "Passenger"}
          </p>
          <IncrementIcon onClick={increment} />
        </div>
      </div>
      <div className="charter__content--form">
        <PrimaryInput
          name="Leaving"
          label="Pickup Location"
          icon={<NavigatorIcon />}
        />
        <PrimaryInput
          name="Leaving"
          label="Charter Duration"
          icon={<LocationIcon />}
        />
      </div>
      <div className="charter__content--form">
        <DatePicker label="Pick-up date" />
        <CustomTimePicker label="Pick-up time" />
      </div>
    </>
  );
};

export default LandCharterFilter;
