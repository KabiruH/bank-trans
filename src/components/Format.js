import React from "react";

function TransactionFormat (props) {
    const mappedTransaction = props.transactions.map((transaction) => {
        return (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        );
      });
      return mappedTransaction
    }
export default TransactionFormat