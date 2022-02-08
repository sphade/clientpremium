/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { PrimarySelect } from "../../../../reusables";

import { getAllTripFilters } from "../../../../utils";
import { tripType } from "./PendingTrips";
import EmptyTripHistory from "./EmptyTripHistory";
import TripHistoryCard from "./TripHistoryCard";

const TripHistory = ({ trips }: { trips: Record<string, any> }) => {
  const { allCompletedTrips, allCompletedSegmented } = getAllTripFilters({
    data: trips,
  });

  const [allTrips, setAllTrips] = useState(allCompletedTrips);

  const handleChangeCurrentTrip = (e: any) => {
    const value: string = (e.target.value || "").toLowerCase();
    let selectedTrips = allCompletedTrips;
    if (value !== "all") {
      selectedTrips = allCompletedSegmented[value] || [];
    }
    setAllTrips(selectedTrips);
  };

  return (
    <div className="wallet__body--content ">
      <div className="mt-4">
        <PrimarySelect
          makeEmpty={false}
          onChange={handleChangeCurrentTrip}
          fullWidth={false}
          name="tripType"
          label="Trip type"
          options={tripType}
        />
      </div>
      {allTrips.length ? (
        <>
          {allTrips.map((trip: any, index: number) => (
            <TripHistoryCard key={index} trip={trip} />
          ))}
        </>
      ) : (
        <EmptyTripHistory isPending={false} />
      )}
    </div>
  );
};

export default TripHistory;
