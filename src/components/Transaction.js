import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState"

export const Transaction = ({ transaction }) => {
    const { deleteTransaction, editTransaction, edited, id, afterEdit } = useContext(GlobalContext)
    const sign = transaction.changeableAmount < 0 ? "-" : "+";
    const editStyle = {};
    const viewStyle = {};
    const none = {}
    if (edited) {
        viewStyle.display = 'none';
    } else {
        editStyle.display = "none";
    }

    const doneEdit = (e) => {
        if (e.keyCode === 13) {
            afterEdit();
        }
    }

    return (
        <>
            <ul className="list">
                <li className={transaction.changeableAmount < 0 ? "minus" : "plus"} >
                    {transaction.textDesc} <span>{sign}${Math.abs(transaction.changeableAmount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button><button style={{ backgroundColor: "black", color: "white" }} onClick={() => editTransaction()}>Edit</button>
                </li>
            </ul>
            <input type="text" style={transaction.id == id ? none : editStyle} value={transaction.textDesc} onKeyDown={(e) => doneEdit(e)}/>
            <input type="number" style={transaction.id == id ? none : editStyle} value={transaction.changeableAmount} />

        </>
    )
}
