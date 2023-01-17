import React, {useEffect, useState} from "react"
import AddTransaction from "./AddTransaction";
import Filter from "./Filter";
import TransactionsList from "./list";

const currentTransactions = "http://localhost:3000/transactions"

function AccountDetails() {
    const [transactions, setTransactions] = useState([]);
    const [searchQuery, setSearchQuery] = useState([]);
    
    useEffect (function () {
      fetch (currentTransactions) 
        .then((response) => response.json())
        .then((data) => {
          setTransactions(data);
          setSearchQuery(data);
        })
        // console.log (currentTransactions)
      })
      function newSearch(e) {
        setTransactions(
          searchQuery.filter((transactions) => {
            return (transactions.description
              .toLowerCase()
              .includes(e.target.value.toLowerCase()))
          })
        );
        return transactions
      }
      return (

        <div>
          <Filter newSearch={newSearch} />
          <AddTransaction transactions={transactions} />
          <TransactionsList transactions={transactions} />
        </div>
      );
}

export default AccountDetails


