import React from "react";

import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as RefreshIcon } from "../../../../assets/svgs/refresh-icon.svg";
import { ReactComponent as EyeIcon } from "../../../../assets/svgs/eye.svg";
import { useDialogHook } from "../../../../hooks";
import { APP_ROUTES } from "../../../../routes/path";
import { OutlineButton } from "../../../../reusables";
import { useQuery } from "react-query";
import { getWalletBalanceApi } from "../../../../routes/api";
import { formatNumberToCurrency } from "../../../../utils";

const WalletHeader = () => {
  const { open: hidden, toggleDialog: toggleHidden } = useDialogHook();

  const { data: walletBalance = { balance: 0 } } = useQuery(
    `wallet_balance`,
    async () => {
      const data = await getWalletBalanceApi();
      return data;
    }
  );

  const balance = formatNumberToCurrency({
    number: walletBalance?.balance,
  });

  const star = (walletBalance?.balance)
    .toString()
    .split("")
    .reduce((acc: string) => (acc += "*"), "*");

  return (
    <div className="wallet__header">
      <p>Personal wallet balance</p>
      <div className="wallet__header--value">
        <IconButton>
          <RefreshIcon className="refresh-icon" />
        </IconButton>
        <h3>{hidden ? star : balance}</h3>
        <IconButton onClick={toggleHidden}>
          <EyeIcon className="eye-icon" />
        </IconButton>
      </div>
      <div className="wallet__header--buttonGroup">
        <Link to={APP_ROUTES.walletFunded}>
          <OutlineButton small classes="secondary" label="Fund wallet" />
        </Link>
        <Link to={APP_ROUTES.withdrawFunds}>
          <OutlineButton small classes="secondary" label="Withdraw funds" />
        </Link>
      </div>
    </div>
  );
};

export default WalletHeader;
