import { createSlice } from "@reduxjs/toolkit";
import { TradeState } from "./ITradesState";

const initialState: TradeState = {
    trades: [],
};

const tradeSlice = createSlice({
    name: "trades",
    initialState,
    reducers: {
        setTrades: (state, action) => {
            state.trades = action.payload
        },
        createTrade: (state, action) => {
            const newTrade = action.payload.reverse();
            
            if (Array.isArray(newTrade)) {
                state.trades = [...newTrade, ...state.trades];
            } else {
                state.trades.unshift(newTrade);
            }
        },
        updateTrade: (state, action) => {
            const newTrade = action.payload;
console.log(newTrade)
            // const tradeToUpdate = state.trades.find((trade) => trade.id === id);
            // if (tradeToUpdate) {
            //     tradeToUpdate = [...trade]
            //     // tradeToUpdate.hasNote = notes;
            // }
            const tradeToUpdate = state.trades.find((trade) => trade.id === newTrade.id);

            
            if (tradeToUpdate) {
            // update trade properties
                const updatedTrade = {
                    ...tradeToUpdate,
                    ...newTrade,
                    hasNote: false,
                };
                const tradeIndex = state.trades.findIndex((trade) => trade.id === newTrade.id);
                state.trades[tradeIndex] = updatedTrade;
            }

        },
    },
});

export const { 
    setTrades, 
    createTrade, 
    updateTrade 
} = tradeSlice.actions;

export default tradeSlice.reducer;