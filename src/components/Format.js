import React from "react";

function TransactionFormat (props) {
    const mappedTransaction = props.transactions.map((transaction) => {
        return (
          <tr className="table" key={transaction.id}>
            <td className="rowT">{transaction.date}</td>
            <td className="rowT">{transaction.description}</td>
            <td className="rowT">{transaction.category}</td>
            <td className="rowT">{transaction.amount}</td>
          </tr>
        );
      });
      return mappedTransaction
    }
export default TransactionFormat