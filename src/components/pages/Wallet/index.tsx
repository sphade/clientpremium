import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as CloseIcon } from "../../../assets/svgs/close-circle.svg";
import TransactionHistory from "./components/TransactionHistory";
import { APP_ROUTES } from "../../../routes/path";
import WalletHeader from "./components/WalletHeader";

const Wallet = () => {
  return (
    <div className="center">
      <div className="wallet__container">
        <div className="wallet">
          <WalletHeader />
          <div className="wallet__body">
            <div className="wallet__body--header">
              <h3 className="h3">Transaction history</h3>
              <Link to={APP_ROUTES.allTransactions}>
                <p>View All</p>
              </Link>
            </div>
            <div className="wallet__body--content">
              <TransactionHistory />
            </div>
          </div>
        </div>
        <Link to={APP_ROUTES.home}>
          <CloseIcon className="close-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Wallet;
