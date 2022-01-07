import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { OutlineButton } from "../../../reusables";
import { ReactComponent as RefreshIcon } from "../../../assets/svgs/refresh-icon.svg";
import { ReactComponent as EyeIcon } from "../../../assets/svgs/eye.svg";
import { ReactComponent as CloseIcon } from "../../../assets/svgs/close-circle.svg";
import { useDialogHook } from "../../../hooks";
import TransactionHistory from "./components/TransactionHistory";
import { APP_ROUTES } from "../../../routes/path";

const Wallet = () => {
  const { open: hidden, toggleDialog: toggleHidden } = useDialogHook();

  return (
    <div className="center">
      <div className="wallet__container">
        <div className="wallet">
          <div className="wallet__header">
            <p>Personal wallet balance</p>
            <div className="wallet__header--value">
              <IconButton>
                <RefreshIcon className="refresh-icon" />
              </IconButton>
              <h3>{hidden ? "***********" : "N 1,000,000"}</h3>
              <IconButton onClick={toggleHidden}>
                <EyeIcon className="eye-icon" />
              </IconButton>
            </div>
            <div className="wallet__header--buttonGroup">
              <Link to={APP_ROUTES.walletFunded}>
                <OutlineButton small classes="secondary" label="Fund wallet" />
              </Link>
              <Link to={APP_ROUTES.withdrawFunds}>
                <OutlineButton
                  small
                  classes="secondary"
                  label="Withdraw funds"
                />
              </Link>
            </div>
          </div>
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
