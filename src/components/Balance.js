import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState"

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const changeableAmounts = transactions.map(transaction => transaction.changeableAmount);

    const totalChangeableAmount = changeableAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${totalChangeableAmount}</h1>
        </>
    )
}
