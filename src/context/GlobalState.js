import React, { createContext, useReducer } from 'react';
import ExpenseReducer from "./AppReducer"

const initialTransactions = {
    transactions: [],
    added: false,
    edited: false,
    id: ""
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

    function editTransaction(id) {
        dispatch({
            type: "EDIT_TRANS",
            id: id
        })
    }

    function afterEdit() {
        dispatch({
            type: "AFTER_EDIT",
        })
    }

    



    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTrans,
            added: state.added,
            editTransaction,
            edited: state.edited,
            id: state.id,
            afterEdit
        }
        } >
            {children}
        </GlobalContext.Provider>
    )
}