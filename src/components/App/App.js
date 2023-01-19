// import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';
import Filter from '../Filter';
import TransactionsList from "../list"
import AddTransaction from '../AddTransaction';

function App() {

  const [search, setSearch] = useState("")
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    fetch("https://json-server-azure.vercel.app/transactions?q=" + search)
      .then((response) => response.json())
      .then((transactions) => setTransactions(transactions))
  }, [search])

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  return (
    <div>
      <h1>Bank of FlatIron</h1>
      <Filter handleSearch={handleSearch} />
      <AddTransaction />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default App;
