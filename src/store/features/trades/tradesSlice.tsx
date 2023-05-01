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

// function getProfitLossRatio(trades) {
//     let totalProfit = 0;
//     let totalLoss = 0;
  
//     for (const trade of trades) {
//       if (trade.grossPL > 0) {
//         totalProfit += trade.grossPL;
//       } else {
//         totalLoss += trade.grossPL;
//       }
//     }
  
//     const profitLossRatio = -totalProfit / totalLoss;
    
//     return profitLossRatio;
//   }
// export const pagesActivePage = () => useSelector((state: { pages:PagesState }) => state.pages.pages.find(page => page.id === state.pages.currentPage))
// export const pagesActiveDOM = () => useSelector((state: { pages:PagesState }) => state.pages.pagesDOM.find(page => page.id === state.pages.currentPage))?.dom
// export const pagesHomePage = () => useSelector((state: { pages:PagesState }) => state.pages.pages.find(page => page.isHome))

export const { setTrades } = tradeSlice.actions;
export default tradeSlice.reducer;