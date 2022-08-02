import React, { useState } from "react";
import {
  CharterTypeDropdown,
  CustomPopper,
  PrimaryButton,
  Tabpane,
} from "../../../reusables";
import { PREMIUM_CHARTER_DATA } from "./constants";
import { ReactComponent as FilterIcon } from "../../../assets/svgs/filter-icon.svg";
import PremiumCharterFilter from "./Widgets/PremiumCharterFilter";
import useFetch from "../../../hooks/useFetch.jsx";
import { getVehicles } from "../../../routes/api";
const PremiumCharter = () => {
  const [filter, setFilter] = useState("air");
  const { data } = useFetch("vehicles", getVehicles);

  const selectedFilter = PREMIUM_CHARTER_DATA.filter(
    (item) => item.type.toLowerCase() === filter
  );
  console.log(
    "🚀 ~ file: PremiumCharter.tsx ~ line 20 ~ PremiumCharter ~ selectedFilter",
    selectedFilter
  );

  const onChange = (value: string) => {
    setFilter(value.toLowerCase());
  };

  return (
    <article className="premium jumbotron" id="premium-charter">
      <div className="center">
        <h3 className="title">All Premium Charters</h3>
        <Tabpane onChange={onChange} list={["Air", "Sea", "Land"]} />
        <div className="filter">
          <CharterTypeDropdown filter={filter} />

          <CustomPopper
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            buttonElement={
              <button className="filter__button">
                <FilterIcon />
                <span>Search by filter</span>
              </button>
            }
          >
            <PremiumCharterFilter />
          </CustomPopper>
        </div>

        <div className="primary__card--container">
          {selectedFilter.map((item, index) => (
            <div key={index} className="primary__card--item">
              <div className="card__image">
                <img src={item.image} alt="card__image" />
              </div>
              <div className="card__content">
                <div className="card__title">
                  <h5>{item.name}</h5>
                  <h5>
                    {" "}
                    PRICE/HOUR <span>{item.price}</span>
                  </h5>
                </div>
                <div className="summary">
                  <p>Capacity: {item.seats}</p>
                  <p>Currrent Location: Nnamdi Azikiwe... Lagos</p>
                  <p>Range: {item.range} nm</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta flex justify-center">
          <PrimaryButton label="More" />
        </div>
      </div>
    </article>
  );
};

export default PremiumCharter;
