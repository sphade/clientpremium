/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Checkbox } from "@mui/material";
import { useQuery } from "react-query";
import { isEmpty } from "lodash";

import { useDialogHook, useRouterState, useToggle } from "../../../../hooks";
import { Preloader } from "../../../../reusables";
import { charterMappings, getUrlQueryEntries } from "../../../../utils";
import InsufficientBalanceDialog from "./InsufficientBalanceDialog";
import { fetchCharterById } from "../../../../routes/api";
import BookingSummaryCard from "./BookingSummaryCard";
import ShareFlights from "./ShareFlights";
import { useBookingSummary } from "../constants";

const BookingSummaryPrimary = () => {
  const [shareFlight, toggleShareFlight] = useToggle();

  const { open, toggleDialog } = useDialogHook();

  const [routerState] = useRouterState();
  console.log("🚀 ~ file: BookingSummaryPrimary.tsx ~ line 22 ~ BookingSummaryPrimary ~ routerState", routerState)

  const { type, id } = getUrlQueryEntries();

  const charterQuery = charterMappings[type] || "";

  const {
    isLoading,
    error,
    data = {},
  } = useQuery([id, charterQuery], async () => {
    const data = await fetchCharterById(charterQuery, id);
    return data;
  });

  const { getExtraDatas, goToPayment, bookingShareFlights } = useBookingSummary(
    {
      data,
      shareFlight,
    }
  );

  const bookSummaryData = getExtraDatas();

  const { passenger } = bookSummaryData;

  if (isLoading) {
    return <Preloader />;
  }

  if (error || isEmpty(routerState)) {
    return <h3>Error Fetching</h3>;
  }

  const { capacity = 1 } = data;

  return (
    <div className="booking-summary ">
      <div className="center">
        {/* <article className="booking-summary__top-card">
          <div className="booking-summary__top-card--trip">
            <DestinationSmall destination={terminal} />
            <SmallPlane />
            <DestinationSmall departure={false} destination={destination} />
          </div>
          <div className="vertical-divider"></div>
          <div className="booking-summary__top-card--trip">
            <DestinationSmall destination={destination} />
            <SmallPlane />
            <DestinationSmall destination={terminal} />
          </div>
          <div className="vertical-divider"></div>

          <button>Edit</button>
        </article> */}

        {type === "air" && (
          <article className="booking-summary__booking-card share__card">
            <h3 className="share__info">
              <span>Would you like to share flight and earn? </span>
              <button>Learn More</button>
            </h3>
            <div className="share__checkbox">
              <Checkbox checked={shareFlight} onChange={toggleShareFlight} />
              <h5>Share flight</h5>
            </div>
          </article>
        )}

        {shareFlight ? (
          <ShareFlights
            capacity={capacity}
            passengers={passenger}
            goToPayment={goToPayment}
            bookingShareFlights={bookingShareFlights}
          />
        ) : (
          <BookingSummaryCard data={bookSummaryData} />
        )}
      </div>
      <InsufficientBalanceDialog open={open} handleClose={toggleDialog} />
    </div>
  );
};

export default BookingSummaryPrimary;
