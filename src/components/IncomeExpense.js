import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalContext';

export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => {
    return transaction.amount;
  });
  const incomes = amounts.filter((number) => {
    return number > 0;
  });
  const totalIncome = () =>
    incomes.length > 0 &&
    incomes.reduce((total, inc) => (total += inc)).toFixed(2);

  const expenses = amounts.filter((number) => {
    return number < 0;
  });
  const totalExpenses = () =>
    expenses.length > 0 &&
    (expenses.reduce((total, exp) => (total += exp)) * -1).toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${totalIncome() ? totalIncome() : 0}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${totalExpenses() ? totalExpenses() : 0}
        </p>
      </div>
    </div>
  );
}
