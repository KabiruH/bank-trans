import React from "react";
import TransactionFormat from "./Format";

function TransactionsList({ transactions }) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>
                        <h3>Date</h3>
                    </th>
                    <th>
                        <h3>Description</h3>
                    </th>
                    <th>
                        <h3>Category</h3>
                    </th>
                    <th>
                        <h3>Amount</h3>
                    </th>
                </tr>
                <TransactionFormat transactions={transactions} />
            </tbody>
        </table>
    );
}

export default TransactionsList