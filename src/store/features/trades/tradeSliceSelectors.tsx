import { useSelector } from "react-redux";
import { TradeState } from "./ITradesState";

export const hasTradeNotes = (tradeID: number) => useSelector((state: { notes:any }) => state.notes.notes.find((note:any) => note.tradeID === tradeID));

export const getTotalTradesGrossPnL = () => useSelector((state: { trades: TradeState }) => state.trades.trades.reduce((acc, trade) => acc + trade.grossProfitAndLoss, 0));

export const getBiggestProfit = () => useSelector((state: { trades: TradeState }) => {
    const profits = state.trades.trades.filter(trade => trade.grossProfitAndLoss > 0).map(trade => trade.grossProfitAndLoss);
    if (profits.length === 0) {
        return null; // no profits found
    }
    const biggestProfit = profits.reduce((a, b) => Math.max(a, b));
    return biggestProfit;
});

export const getBiggestLoss = () => useSelector((state: { trades: TradeState }) => {
    const losses = state.trades.trades.filter(trade => trade.grossProfitAndLoss < 0).map(trade => trade.grossProfitAndLoss);
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
        if (trade.grossProfitAndLoss > 0) {
            totalProfit += trade.grossProfitAndLoss;
        } else {
            totalLoss += trade.grossProfitAndLoss;
        }
    }

    const profitLossRatio = -totalProfit / totalLoss;
    const formattedRatio = profitLossRatio.toFixed(1);

    return `1:${formattedRatio}`;
});



export const getTotalSwingGrossPL = () => useSelector((state: {trades: TradeState}) => {
    return state.trades.trades
        .filter(trade => trade.strategy === 'swing trading')
        .reduce((total, trade) => total + trade.grossProfitAndLoss, 0);
});
  
  // Selector to get total.grossProfitAndLoss by scalp strategy
export const getTotalScalpGrossPL = () => useSelector((state) => {
    return state.trades.trades.filter(trade => trade.strategy === 'scalp')
                             .reduce((total, trade) => total + trade.grossProfitAndLoss, 0);
});