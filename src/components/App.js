// import logo from './logo.svg';
import './App.css';
import AccountDetails from './Account';

function App() {
 
  function handleOnSearch(search, setTransactions) {
    setTransactions((transactions) => {
      transactions.filter((transaction) =>
        transaction.description.includes(search)
      );
    });
  }
  return (
    <div>
      <h1>Bank of FlatIron</h1>
      <AccountDetails handleSearch={handleOnSearch}/>
    </div>
  );
}

export default App;
