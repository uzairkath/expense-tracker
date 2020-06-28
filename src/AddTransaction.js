import React, { useState, useContext } from 'react';
import { GlobalContext } from './Context/GlobalContext';

export default function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);
  const submit = (e) => {
    e.preventDefault();
    if(!text || !amount){
      return;
    } else{
      const newTransaction = {
        id: Math.floor(Math.random() * 100000),
        text,
        amount: +amount,
      }
      addTransaction(newTransaction);
    }
  };
  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={ submit }>
        <div className="form-control">
          <label htmlFor="text">Account</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Particular"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
      );
}
