import React from "react";
import { CustomCard } from "../../../reusables";
import TransactionHistory from "./components/TransactionHistory";

const AllTransactions = () => {
  return (
    <div>
      <CustomCard header="All Transactions">
        <TransactionHistory showAll />
      </CustomCard>
    </div>
  );
};

export default AllTransactions;
