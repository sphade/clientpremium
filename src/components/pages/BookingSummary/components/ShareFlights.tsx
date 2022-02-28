import React, { useState } from "react";
import {
  CustomAlert,
  CustomCounter,
  PrimaryButton,
} from "../../../../reusables";

const ShareFlights = ({
  goToPayment,
  capacity = 1,
  passengers = 1,
  bookingShareFlights = false,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  goToPayment: ({ extraData }: { extraData?: Record<string, any> }) => void;
  capacity: string | number;
  passengers: string | number;
  bookingShareFlights: boolean;
}) => {
  const [currentCount, setCurrentCount] = useState(1);
  const getCount = (count: number) => {
    setCurrentCount(count);
  };

  const newCapacity = Number(capacity) - Number(passengers);

  return (
    <div className="booking-summary__booking-card !px-16">
      <div className="trip__passengers">
        <h3>How many seats are you willing to share?</h3>
        <p>
          {newCapacity} of {capacity} seats empty
        </p>
        <CustomCounter maxCount={newCapacity} getCount={getCount} />
      </div>
      <CustomAlert
        header="Notice"
        content={[
          "Charter price may end up cheaper depending on final number of seats booked.",
          "Sharing flight requires you to funded your bossbuss premium wallet. This is needed to credit additional gains to your wallet.",
        ]}
        hasIcon
      />
      <div className="booking-card__content--button">
        <PrimaryButton
          isLoading={bookingShareFlights}
          onClick={() =>
            goToPayment({ extraData: { numberOfSharedSeats: currentCount } })
          }
          label="Continue"
        />
      </div>
    </div>
  );
};

export default ShareFlights;
