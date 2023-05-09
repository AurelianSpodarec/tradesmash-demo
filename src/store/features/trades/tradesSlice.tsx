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
            const tradeToUpdate = state.trades.find((trade) => trade.id === newTrade.id);

            if (tradeToUpdate) {
                const tradeIndex = state.trades.findIndex((trade) => trade.id === newTrade.id);
                const updatedTrade = {
                    ...tradeToUpdate,
                    ...newTrade,
                    hasNote: false,
                };
                
                state.trades[tradeIndex] = updatedTrade;
            }
        }
    },
});

export const { 
    setTrades, 
    createTrade, 
    updateTrade 
} = tradeSlice.actions;

export default tradeSlice.reducer;
