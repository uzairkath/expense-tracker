import React from 'react';
import Header from './components/header';
import Balance from './components/balance';
import './app.css';
import IncomeExpense from './components/IncomeExpense';
import AddTransaction from './AddTransaction';
import { GlobalProvider } from './Context/GlobalContext';
import TransactionList from './components/TransactionList';
function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
