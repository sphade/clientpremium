import React from "react";
import { ReactComponent as NavigatorIcon } from "../../../../assets/svgs/navigator.svg";
import { ReactComponent as ArrowRight } from "../../../../assets/svgs/arrow-circle-right.svg";
import { formatNumberToCurrency, getFullDate } from "../../../../utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const TripHistoryCard = ({ trip }: { trip: Record<string, any> }) => {
  const { destination = "", createdAt = 0, Payment = {}, type = "" } = trip;
  const formattedDate = getFullDate(createdAt);
  return (
    <div className="pending__trips">
      <NavigatorIcon className="navigator" />
      <div className="pending__trips--content">
        <h3>{destination}</h3>
        <p>{formattedDate}</p>
        <p>
          {formatNumberToCurrency({
            number: Payment?.amount,
          })}
        </p>
        <p>{type}</p>
      </div>
      <ArrowRight className="arrow-right" />
    </div>
  );
};

export default TripHistoryCard;
