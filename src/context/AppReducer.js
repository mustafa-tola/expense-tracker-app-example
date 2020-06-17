export default (state,action) => {
    switch(action.type) {
        case "DEL_TRANS":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        default:
            return state;
    }
}  