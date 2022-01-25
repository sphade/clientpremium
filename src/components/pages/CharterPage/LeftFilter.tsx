/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { filters } from "./constants";

const LeftFilter = ({
  handleFilters,
}: {
  handleFilters: (filter: any) => void;
}) => {
  const handleChange = (e: any) => {
    const parsedValue = JSON.parse(e.target.value);
    const { key = "", value = "" } = parsedValue;
    handleFilters({ [key]: value });
  };
  return (
    <div className="left-filter">
      <div className="left-filter__header">
        <h3>Filter By</h3>
      </div>
      <div className="left-filter__content">
        {Object.values(filters).map(({ title, filters }, index) => (
          <div key={index} className="left-filter__content--radio">
            <h4>{title}</h4>
            <FormControl component="fieldset">
              <RadioGroup
                aria-label={title}
                onChange={handleChange}
                name="radio-buttons-group"
              >
                {filters.map((filter, id) => (
                  <FormControlLabel
                    key={id}
                    value={JSON.stringify(filter)}
                    control={<Radio />}
                    label={filter?.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftFilter;
