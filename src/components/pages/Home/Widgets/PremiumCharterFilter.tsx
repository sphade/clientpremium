import React from "react";
import { DatePicker, PrimaryButton, PrimaryInput } from "../../../../reusables";
import { charterPriceFilter, passengersFilter } from "../constants";
import { ReactComponent as SearchIcon } from "../../../../assets/svgs/search-icon.svg";
import CustomChips from "../../../../reusables/CustomChips/CustomChips";
import { Stack } from "@mui/material";

const PremiumCharterFilter = ({
  setPassengers,
  setPrice,
}: {
  setPassengers?: any;
  setPrice?: any;
}) => {
  return (
    <div className="premium__filter">
      <h3 className="premium__filter--title">Filters</h3>
      <div className="premium__filter--form">
        <label>By location</label>

        <PrimaryInput size="small" name="Leaving" endIcon={<SearchIcon />} />
        <label>By date of availability:</label>
        <DatePicker name="date" size="small" />

        <Stack gap="2rem">
          <CustomChips
            lists={passengersFilter}
            label="By number of passengers"
            setValue={setPassengers}
          />

          <CustomChips
            lists={charterPriceFilter}
            label="By charter price:"
            setValue={setPrice}
          />
        </Stack>

        <PrimaryButton
          onClick={() => console.log("clicked")}
          label="Apply Filters"
        />
      </div>
    </div>
  );
};

export default PremiumCharterFilter;
