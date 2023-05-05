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
        updateTradeNote: (state, action) => {
            const { id, notes } = action.payload;

            const tradeToUpdate = state.trades.find((trade) => trade.id === id);
            if (tradeToUpdate) {
              tradeToUpdate.hasNote = notes;
            }
        },
    },
});

export const { 
    setTrades, 
    createTrade, 
    updateTradeNote 
} = tradeSlice.actions;

export default tradeSlice.reducer;