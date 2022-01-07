import React from "react";
import { transaction_history_mock_data, TRANSACTION_TYPE } from "../constants";

const TransactionHistory = ({ showAll }: { showAll?: boolean }) => {
  return (
    <div className="transaction">
      {transaction_history_mock_data
        .slice(0, showAll ? transaction_history_mock_data.length : 5)
        .map(({ name, date, type, amount }, index) => (
          <div className="transaction__history" key={index}>
            <div className="transaction__history--left">
              <p>{name}</p>
              <h5>{date}</h5>
            </div>
            <div className="transaction__history--right">
              <h3 className={type.toLowerCase()}>
                {type === TRANSACTION_TYPE.CREDIT ? "+" : "-"}N{amount}
              </h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TransactionHistory;
