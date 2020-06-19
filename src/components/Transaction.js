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
        console.log("Editing is Done");
        if (e.keyCode === 13) {
            console.log(e.keyCode)
            afterEdit();
        }
    }


    return (
        <>
            <ul className="list">
                <li className={transaction.changeableAmount < 0 ? "minus" : "plus"} >
                    {transaction.textDesc} <span>{sign}${Math.abs(transaction.changeableAmount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
                </li>
            </ul>
            <input type="text" style={transaction.id == id ? none : editStyle} value={transaction.textDesc} />
            <input type="number" style={transaction.id == id ? none : editStyle} value={transaction.changeableAmount}/>
        </>
    )
}
