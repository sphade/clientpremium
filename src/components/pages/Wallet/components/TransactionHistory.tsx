import React from "react";
import { useQuery } from "react-query";
import { getWalletTransactionsApi } from "../../../../routes/api";
import { transaction_history_mock_data, TRANSACTION_TYPE } from "../constants";
import EmptyTransaction from "./EmptyTransaction";

const TransactionHistory = ({ showAll }: { showAll?: boolean }) => {
  const { data: allTransactions = { transactions: [] } } = useQuery(
    `wallet_transactions`,
    async () => {
      const data = await getWalletTransactionsApi();
      return data;
    }
  );

  const { transactions } = allTransactions;

  if (!transactions.length) {
    return <EmptyTransaction />;
  }

  return (
    <div className="transaction">
      {transactions
        .slice(0, showAll ? transaction_history_mock_data.length : 5)
        .map(
          (
            {
              name,
              date,
              type,
              amount,
            }: { name?: string; date?: string; type?: string; amount?: string },
            index: number
          ) => (
            <div className="transaction__history" key={index}>
              <div className="transaction__history--left">
                <p>{name}</p>
                <h5>{date}</h5>
              </div>
              <div className="transaction__history--right">
                <h3 className={type?.toLowerCase()}>
                  {type === TRANSACTION_TYPE.CREDIT ? "+" : "-"}N{amount}
                </h3>
              </div>
            </div>
          )
        )}
    </div>
  );
};

export default TransactionHistory;
