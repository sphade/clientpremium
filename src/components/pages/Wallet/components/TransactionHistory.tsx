import clsx from "clsx";
import React from "react";
import { useQuery } from "react-query";
import { getWalletTransactionsApi } from "../../../../routes/api";
import {
  convertToTitleCase,
  formatNumberToCurrency,
  getFullDate,
} from "../../../../utils";
import { transaction_history_mock_data, TRANSACTION_TYPE } from "../constants";
import EmptyTransaction from "./EmptyTransaction";

const TransactionHistory = ({ showAll }: { showAll?: boolean }) => {
  const { data } = useQuery(`wallet_transactionsafaf`, async () => {
    const data = await getWalletTransactionsApi();
    return data;
  });

  const allTransactions = data?.data || [];
  if (!allTransactions.length) {
    return <EmptyTransaction />;
  }

  return (
    <div className="transaction">
      {allTransactions
        .slice(0, showAll ? transaction_history_mock_data.length : 5)
        .map(
          (
            {
              purpose,
              txnType,
              amount = "0",
              createdAt = "",
            }: {
              purpose?: string;
              reference?: string;
              txnType?: string;
              amount?: string | number;
              createdAt?: string;
            },
            index: number
          ) => (
            <div
              className="transaction__history flex justify-between"
              key={index}
            >
              <div className="transaction__history--left">
                <p>{convertToTitleCase(purpose || "")}</p>
                <h5>{getFullDate(createdAt)}</h5>
              </div>
              <div
                className={clsx(
                  "transaction__history--right",
                  txnType?.toUpperCase() === TRANSACTION_TYPE.CREDIT
                    ? "text-green-500"
                    : "text-red-500"
                )}
              >
                <h3>
                  {txnType?.toUpperCase() === TRANSACTION_TYPE.CREDIT
                    ? "+"
                    : "-"}
                  {formatNumberToCurrency({ number: amount })}
                </h3>
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default TransactionHistory;
