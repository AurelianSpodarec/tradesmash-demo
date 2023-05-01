import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";



const trades = [
    {
        id: 1,
        trade: "APPL"
    }
]

const notes = [
    {
        tradeID: 1,
        note: "Hello my frrriend"
    }
]

interface TradeState {
    trades: [];
}

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
        addNewTrade: (state, action) => {
            const newTrade = action.payload.reverse();
            if (Array.isArray(newTrade)) {
                state.trades = [...newTrade, ...state.trades];
            } else {
                state.trades.unshift(newTrade);
            }
        }
    },
});

// Total Gross P&L
// export const getTotalGrossPnL = () => useSelector(( state: { trades:TradeState }) => state.trades 

// export const getTotalTradesGrossPnL = () => useSelector(( state: { trades: TradeState }) =>  state.trades.trades.reduce((acc, trade) => acc + trade.grossPL, 0)
export const getTotalTradesGrossPnL = () => useSelector((state: { trades: TradeState }) => state.trades.trades.reduce((acc, trade) => acc + trade.grossPL, 0));

export const getBiggestProfit = () => useSelector((state: { trades: TradeState }) => {
    const profits = state.trades.trades.filter(trade => trade.grossPL > 0).map(trade => trade.grossPL);
    if (profits.length === 0) {
        return null; // no profits found
    }
    const biggestProfit = profits.reduce((a, b) => Math.max(a, b));
    return biggestProfit;
});

export const getBiggestLoss = () => useSelector((state: { trades: TradeState }) => {
    const losses = state.trades.trades.filter(trade => trade.grossPL < 0).map(trade => trade.grossPL);
    if (losses.length === 0) {
        return null; // no losses found
    }
    const biggestLoss = losses.reduce((a, b) => Math.min(a, b));
    return biggestLoss;
});


export const getProfitLossRatio = () => useSelector((state: { trades: TradeState }) => {
    let totalProfit = 0;
    let totalLoss = 0;

    for (const trade of state.trades.trades) {
        if (trade.grossPL > 0) {
            totalProfit += trade.grossPL;
        } else {
            totalLoss += trade.grossPL;
        }
    }

    const profitLossRatio = -totalProfit / totalLoss;
    const formattedRatio = profitLossRatio.toFixed(1);

    return `1:${formattedRatio}`;
});



export const getTotalSwingGrossPL = () => useSelector((state) => {
    return state.trades.trades.filter(trade => trade.strategy === 'swing')
                             .reduce((total, trade) => total + trade.grossPL, 0);
  });
  
  // Selector to get total grossPL by scalp strategy
  export const getTotalScalpGrossPL = () => useSelector((state) => {
    return state.trades.trades.filter(trade => trade.strategy === 'scalp')
                             .reduce((total, trade) => total + trade.grossPL, 0);
});

export const { setTrades, addNewTrade } = tradeSlice.actions;
export default tradeSlice.reducer;