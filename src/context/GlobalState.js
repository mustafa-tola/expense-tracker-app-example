import React, { createContext, useReducer } from 'react';
import ExpenseReducer from "./AppReducer"

const initialTransactions = {
    transactions: [
        { id: 1, textDesc: "Project 1 Income", changeableAmount: 1000 },
        { id: 2, textDesc: "Project 1 Expense", changeableAmount: -100 },
        { id: 3, textDesc: "Project 2 Income", changeableAmount: 2000 },
        { id: 4, textDesc: "Project 2 Expense", changeableAmount: -500 }
    ]
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

    return (
        <GlobalContext.Provider value={{ 
            transactions: state.transactions,
            deleteTransaction: deleteTransaction 
        }
        } >
            {children}
        </GlobalContext.Provider>
    )
}