import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const InitialState = {
  transactions: [],
};

export const GlobalContext = createContext(InitialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, InitialState);
  console.log(children);
  function deleteTransaction(id) {
    dispatch({
      type: 'delete_transaction',
      payload: id,
    });
  }
  function addTransaction(transaction) {
    dispatch({
      type: 'add_transaction',
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
