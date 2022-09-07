/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import {
  CharterTypeDropdown,
  CustomPopper,
  PrimaryButton,
  Tabpane,
} from "../../../reusables";
import { ReactComponent as FilterIcon } from "../../../assets/svgs/filter-icon.svg";
import PremiumCharterFilter from "./Widgets/PremiumCharterFilter";
import { useAxios } from "../../../routes/api";
import { useQuery } from "react-query";
import { CircularProgress, Stack } from "@mui/material";
import { Link } from "react-router-dom";
const PremiumCharter = () => {
  const [filter, setFilter] = useState("aircraft");
  const [tabValue, setTabValue] = useState("air");
  const [category, setCategory] = useState<string>("");
  const [passengers, setPassengers] = useState<any>("");
  const [price, setPrice] = useState<any>("");
  const {
    data: chatter,
    isLoading,
    isError,
  } = useQuery(
    ["chatter", filter, category, passengers,price],
    async () => {
      const request = useAxios();
      const response = await request.get(
        `https://bossbus-premium-api-staging.herokuapp.com/api/v1/products/${filter}`,
        {
          params: {
            category,
            capacity: passengers,
            price,
          },
        }
      );
      return response.data;
    },
    {
      keepPreviousData: true,
    }
  );

  const onChange = (value: string) => {
    setCategory("");
    setTabValue(value.toLowerCase());
    if (value.toLowerCase() === "air") {
      setFilter("aircraft");
    }
    if (value.toLowerCase() === "sea") {
      setFilter("boat");
    }
    if (value.toLowerCase() === "land") {
      setFilter("vehicle");
    }
  };

  return (
    <article className="premium jumbotron" id="premium-charter">
      <div className="center">
        <h3 className="title">All Premium Charters</h3>
        <Tabpane onChange={onChange} list={["Air", "Sea", "Land"]} />
        <div className="filter">
          <CharterTypeDropdown filter={tabValue} setCategory={setCategory} />

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
            <PremiumCharterFilter
              setPassengers={setPassengers}
              setPrice={setPrice}
            />
          </CustomPopper>
        </div>

        <div className="primary__card--container ">
          {isLoading && (
            <Stack
              sx={{ color: "red", paddingTop: "8rem" }}
              display="flex"
              justifyContent="center"
              spacing={2}
              direction="row"
            >
              <CircularProgress size={100} color="inherit" />
            </Stack>
          )}
          {isError && <h1>Error</h1>}
          {chatter?.data.data.map((item: any, index: any) => (
            <Link key={index} to={`charter/${tabValue}/${item.id}`}>
              <div className="primary__card--item">
                <div className="card__image">
                  <img src={item?.ProductImages[0].url} alt="card__image" />
                </div>
                <div className="card__content">
                  <div className="card__title">
                    <h5>
                      {item?.brand} {item?.model}
                    </h5>
                    <h5>
                      {" "}
                      PRICE/HOUR <span>{item?.price}</span>
                    </h5>
                  </div>
                  <div className="summary">
                    <p>Capacity: {item?.capacity}</p>
                    <p>Currrent Location: {item?.pickupTerminal?.address}</p>
                    <p>Range: {item?.maxRange} nm</p>
                  </div>
                </div>
              </div>
            </Link>
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
