import React, { useState, useContext } from 'react';
import { GlobalContext } from "../context/GlobalState"

export const AddTransaction = () => {
    const [textDesc, setText] = useState('');
    const [changeableAmount, setAmount] = useState(0);
    const { addTrans } = useContext(GlobalContext);
    const onSubmit = e => {
        e.preventDefault();

        const newTrans = {
            id: Math.floor(Math.random() * 100000000),
            textDesc: textDesc,
            changeableAmount: +changeableAmount,
        }
        addTrans(newTrans);
    }



    return (
        <>
            <h3>Add new Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={textDesc} onChange={(e) => setText(e.target.value)} placeholder="Enter Text...." required />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (negative = expense,positive = income)</label>
                    <input type="number" value={changeableAmount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount..." required />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
