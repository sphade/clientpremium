import React, { useState } from "react";
import {
  CustomAlert,
  CustomCounter,
  PrimaryButton,
} from "../../../../reusables";

const ShareFlights = ({
  goToPayment,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  goToPayment: ({ extraData }: { extraData?: Record<string, any> }) => void;
}) => {
  const [currentCount, setCurrentCount] = useState(1);
  const getCount = (count: number) => {
    setCurrentCount(count);
  };

  return (
    <div className="booking-summary__booking-card !px-16">
      <div className="trip__passengers">
        <h3>How many seats are you willing to share?</h3>
        <p>{currentCount} of 20 seats empty</p>
        <CustomCounter getCount={getCount} />
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
