/* eslint-disable @typescript-eslint/no-explicit-any */
import { getTime } from "date-fns";
import dayjs from "dayjs";
import { truncate } from "lodash";
import React from "react";
import { ReactComponent as SmallPlane } from "../../../../assets/svgs/small-plane.svg";
import { getFullDate } from "../../../../utils";

export const DestinationSmall = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  destination,
  departure = true,
}: {
  destination: Record<string, any>;
  departure?: boolean;
}) => (
  <div className="trip-details">
    <h3>{departure ? "Lagos, Nigeria" : "Abuja, Nigeria"}</h3>
    <p>{departure ? "Murtala Muhammed Int" : "Nnamdi Azikiwe Int. Airport"}</p>
    {/* <h3>
      {destination
        ? `${destination?.state}, ${destination?.country}`
        : "Lagos, Nigeria"}
    </h3>
    <p>
      {destination
        ? truncate(destination?.name, {
            length: 20,
          })
        : "Murtala Muhammed Int"}
    </p> */}
  </div>
);
export const TripDetails = ({
  destination,
  terminal,
  departure = true,
}: {
  destination: Record<string, any>;
  terminal: Record<string, any>;
  departure?: boolean;
}) => (
  <div className="booking-card__content--details">
    <h5 className="content-details__title">
      {departure ? "Depature" : "Return "} details
    </h5>
    <div className="card--summary">
      <div>
        <p>Dep: 20 Nov 2021</p>
        <p>12:00 ({terminal?.state})</p>
        <p>
          {truncate(terminal?.name, {
            length: 20,
          })}
        </p>
      </div>
      <SmallPlane />
      <div>
        <p>To:</p>
        <p>13:25 ({destination?.state})</p>
        <p>
          {truncate(destination?.name, {
            length: 20,
          })}
        </p>
      </div>
    </div>
  </div>
);

export const NoDestinalTripDetails = ({
  terminal,
  departure = true,
}: {
  terminal: Record<string, any>;
  departure?: boolean;
}) => {
  const newDate = dayjs(terminal?.departureDate).format("dddd D, MMMM YYYY");
  const newTime = dayjs(terminal?.departureTime).format("hh:mm a");
  return (
    <div className="booking-card__content--details">
      <h5 className="content-details__title">
        {departure ? "Depature" : "Return "} details
      </h5>
      <div className="card--summary">
        <div>
          <p>Dep: {newDate}</p>
          <p>
            {newTime} ({terminal?.state || terminal?.name})
          </p>
          <p>
            {truncate(terminal?.name, {
              length: 20,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};
