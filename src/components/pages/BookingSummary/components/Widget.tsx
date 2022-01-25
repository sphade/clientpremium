/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { truncate } from "lodash";
import { ReactComponent as SmallPlane } from "../../../../assets/svgs/small-plane.svg";

export const DestinationSmall = ({
  destination,
}: {
  destination: Record<string, any>;
}) => (
  <div className="trip-details">
    <h3>
      {destination?.state}, {destination?.country}
    </h3>
    <p>
      {truncate(destination?.name, {
        length: 20,
      })}
    </p>
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
