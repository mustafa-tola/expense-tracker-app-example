export default (state, action) => {
    switch (action.type) {
        case "DEL_TRANS":
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload),
                edited: false,
            }
        case "ADD_TRANS":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
                added: true,
                edited: false,
            }
        default:
            return state;
    }
}  