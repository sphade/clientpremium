import React from "react";
// import { Link } from "react-router-dom";
import { ReactComponent as EmptyWallet } from "../../../../assets/svgs/wallet-empty.svg";

const EmptyTripHistory = ({ isPending = true }: { isPending?: boolean }) => {
  return (
    <div className="empty trip__history">
      <EmptyWallet />
      <div>
        <h3 className="h3 light">
          You currently have no {isPending ? "pending" : "completed"} trips
        </h3>
        <p className="ash-color">When you book a trip, it will appear here.</p>
      </div>

      <div className="book_trip--button">
        {/* <Link to={APP_ROUTES.carAddedSuccess}>
          <PrimaryButton label="book trip" />
        </Link> */}
      </div>
    </div>
  );
};

export default EmptyTripHistory;
