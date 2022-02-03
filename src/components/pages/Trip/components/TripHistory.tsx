/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Preloader, PrimaryButton, PrimarySelect } from "../../../../reusables";

import { ReactComponent as EmptyWallet } from "../../../../assets/svgs/wallet-empty.svg";
import { ReactComponent as NavigatorIcon } from "../../../../assets/svgs/navigator.svg";
import { ReactComponent as ArrowRight } from "../../../../assets/svgs/arrow-circle-right.svg";
import { APP_ROUTES } from "../../../../routes/path";
import { useQuery } from "react-query";
import { getUserTripsApi } from "../../../../routes/api";
import { formatNumberToCurrency } from "../../../../utils";
import { tripType } from "./PendingTrips";

const TripHistory = () => {
  const [currentTrips, setAllCurrentTrips] = useState([]);

  const {
    isLoading,
    error,
    data = {},
  } = useQuery("allUserTrips", getUserTripsApi);

  if (isLoading) {
    return <Preloader />;
  }

  if (error) {
    return <h3>Error Fetching</h3>;
  }

  const segmentedTrips: Record<string, any> = {
    land: data?.land,
    sea: [...(data?.sea?.boatCruises || []), ...(data?.sea?.boatTrips || [])],
    air: data?.air || [],
  };
  const allTrips = Object.values(segmentedTrips).reduce((acc, curr) => {
    return [...acc, ...curr];
  }, []);

  const handleChangeCurrentTrip = (e: any) => {
    const value: string = (e.target.value || "").toLowerCase();
    let selectedTrips = allTrips;
    if (value !== "all") {
      selectedTrips = segmentedTrips[value] || [];
    }
    setAllCurrentTrips(selectedTrips);
  };

  return (
    <div className="wallet__body--content ">
      <div className="mt-4">
        <PrimarySelect
          onChange={handleChangeCurrentTrip}
          fullWidth={false}
          name="tripType"
          label="Trip type"
          options={tripType}
        />
      </div>
      {currentTrips.length ? (
        <>
          {currentTrips.map((landTrip: any, index: number) => (
            <div className="pending__trips" key={index}>
              <NavigatorIcon className="navigator" />
              <div className="pending__trips--content">
                <h3>{landTrip?.pickupLocation}</h3>
                <p>{landTrip?.pickupDate}</p>
                <p>
                  {formatNumberToCurrency({
                    number: landTrip?.Payment?.amount,
                  })}
                </p>
              </div>
              <ArrowRight className="arrow-right" />
            </div>
          ))}
        </>
      ) : (
        <div className="empty trip__history">
          <EmptyWallet />
          <div>
            <h3 className="h3 light">You currently have no pending trips</h3>
            <p className="ash-color">
              When you book a trip, it will appear here.
            </p>
          </div>

          <div className="book_trip--button">
            <Link to={APP_ROUTES.carAddedSuccess}>
              <PrimaryButton label="book trip" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default TripHistory;
