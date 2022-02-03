import React from "react";
import { Link } from "react-router-dom";
import { CustomCard, PrimaryButton } from "../../../reusables";
import Wallet from "../../../assets/images/wallet-funded.png";
import { APP_ROUTES } from "../../../routes/path";

const WalletFunded = ({ message }: { message?: string }) => {
  return (
    <div>
      <CustomCard>
        <div className="fund__wallet flex flex-col items-center gap-8">
          <img src={Wallet} alt="wallet-funded" />
          <h2 className="h3">
            {message ? message : "You wallet has been funded successfully!"}
          </h2>
          <Link to={APP_ROUTES.wallet}>
            <PrimaryButton label="Done" />
          </Link>
        </div>
      </CustomCard>
    </div>
  );
};

export default WalletFunded;
