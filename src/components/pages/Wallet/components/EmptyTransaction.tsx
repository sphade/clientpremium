import React from "react";
import { PrimaryButton } from "../../../../reusables";
import { ReactComponent as EmptyWallet } from "../../../../assets/svgs/wallet-empty.svg";
import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../../routes/path";

const EmptyTransaction = () => {
  return (
    <div className="empty">
      <EmptyWallet />
      <div>
        <h3 className="h3 light">You currently have no transaction history</h3>
        <p className="ash-color">
          When you fund your wallet, it will appear here.
        </p>
      </div>
      <Link to={APP_ROUTES.carAddedSuccess}>
        <PrimaryButton label="Continue Payment" />
      </Link>
    </div>
  );
};

export default EmptyTransaction;
