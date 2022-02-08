/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { PrimarySelect } from "../../../../reusables";
import { getAllTripFilters } from "../../../../utils";
import EmptyTripHistory from "./EmptyTripHistory";
import TripHistoryCard from "./TripHistoryCard";

export const tripType = [
  {
    name: "All",
    value: "All",
  },
  {
    name: "Land",
    value: "Land",
  },
  {
    name: "Sea",
    value: "Sea",
  },
  {
    name: "Air",
    value: "Air",
  },
];

const PendingTrips = ({ trips }: { trips: Record<string, any> }) => {
  const { allPendingTrips, allPendingSegmented } = getAllTripFilters({
    data: trips,
  });

  const [allTrips, setAllTrips] = useState(allPendingTrips);

  const handleChangeCurrentTrip = (e: any) => {
    const value: string = (e.target.value || "").toLowerCase();
    let selectedTrips = allPendingTrips;
    if (value !== "all") {
      selectedTrips = allPendingSegmented[value] || [];
    }
    setAllTrips(selectedTrips);
  };

  return (
    <div className="pending__container">
      <PrimarySelect
        makeEmpty={false}
        onChange={handleChangeCurrentTrip}
        fullWidth={false}
        name="tripType"
        label="Trip type"
        options={tripType}
      />
      {allTrips.length ? (
        <>
          {allTrips.map((trip: any, index: number) => (
            <TripHistoryCard key={index} trip={trip} />
          ))}
        </>
      ) : (
        <EmptyTripHistory />
      )}
    </div>
  );
};

export default PendingTrips;
