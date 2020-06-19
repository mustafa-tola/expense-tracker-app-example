import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState"

export const Transaction = ({ transaction }) => {
    const { deleteTransaction, id,  } = useContext(GlobalContext)
    const sign = transaction.changeableAmount < 0 ? "-" : "+";

    return (
        <>
            <ul className="list">
                <li className={transaction.changeableAmount < 0 ? "minus" : "plus"} >
                    {transaction.textDesc} <span>{sign}${Math.abs(transaction.changeableAmount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
                </li>
            </ul>
            <input type="text" value={transaction.textDesc} />
            <input type="number" value={transaction.changeableAmount}/>
        </>
    )
}
