import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';

export const Transactions = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount > 0 ? '+' : '-';

  return (
    <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
      {transaction.text}{' '}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
  console.log(transaction);
};
