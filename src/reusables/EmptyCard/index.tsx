import React from "react";
import { ReactComponent as EmptyWallet } from "../../assets/svgs/wallet-empty.svg";

const EmptyCard = ({
  header = "There an currently no data",
  subtitle = "They will appear here when available",
}: {
  header?: string;
  subtitle?: string;
}) => {
  return (
    <div className="empty empty__wallet empty__card">
      <EmptyWallet />
      <div>
        {header && <h3 className="h3 light">{header}</h3>}
        {subtitle && <p className="ash-color">{subtitle}</p>}
      </div>
      {/* <Link to={APP_ROUTES.carAddedSuccess}>
        <PrimaryButton label="Continue Payment" />
      </Link> */}
    </div>
  );
};

export default EmptyCard;
