import React, { createContext, useReducer } from 'react';
import ExpenseReducer from "./AppReducer"

const initialTransactions = {
    transactions: [],
    transaction: {}
}

export const GlobalContext = createContext(initialTransactions);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ExpenseReducer, initialTransactions)
    function deleteTransaction(id) {
        dispatch({
            type: "DEL_TRANS",
            payload: id,
        })
    }

    function addTrans(transaction) {
        dispatch({
            type: "ADD_TRANS",
            payload: transaction,
        })
    }

    return (
        <GlobalContext.Provider value={{ 
            transactions: state.transactions,
            toEdit: state.toEdit,
            deleteTransaction,
            addTrans,
            filteredTransaction: state.transaction,

        }
        } >
            {children}
        </GlobalContext.Provider>
    )
}