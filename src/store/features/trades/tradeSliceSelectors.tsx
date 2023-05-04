import { useSelector } from "react-redux";
import { TradeState } from "./ITradesState";
import currencyFormatter from "@/utils/currencyFormatter";
import ITrade from "@/interface/ITrade";

export const hasTradeNotes = (tradeID: number) => useSelector((state: { notes:any }) => state.notes.notes.find((note:any) => note.tradeID === tradeID));

export const getTotalTradesGrossPnL = () => {
    return useSelector((state: { trades: TradeState }) => {
      const total = state.trades.trades.reduce((acc, trade) => {
        return acc + trade.grossProfitAndLoss;
      }, 0);
      return currencyFormatter.format(total);
    });
  };



export const getBiggestProfit = () => useSelector((state: { trades: TradeState }) => {
    const profits = state.trades.trades.filter(trade => trade.grossProfitAndLoss > 0).map(trade => trade.grossProfitAndLoss);
    if (profits.length === 0) return null; // no profits found
    
    const biggestProfit = profits.reduce((a, b) => Math.max(a, b));
    return currencyFormatter.format(biggestProfit);
});

export const getBiggestLoss = () => useSelector((state: { trades: TradeState }) => {
    const losses = state.trades.trades.filter(trade => trade.grossProfitAndLoss < 0).map(trade => trade.grossProfitAndLoss);
    if (losses.length === 0) return 0; // no losses found
    
    const biggestLoss = losses.reduce((a, b) => Math.min(a, b));
    return currencyFormatter.format(biggestLoss);
});

export const getTotalSwingGrossPL = () => useSelector((state: {trades: TradeState}) => {
    const total = state.trades.trades
        .filter(trade => trade.strategy === 'swing trading')
        .reduce((total, trade) => total + trade.grossProfitAndLoss, 0);

    return currencyFormatter.format(total)
});

export const getTotalScalpGrossPL = () => useSelector((state) => {
    const total =  state.trades.trades.
        filter(trade => trade.strategy === 'scalp')
        .reduce((total, trade) => total + trade.grossProfitAndLoss, 0);

    return currencyFormatter.format(total)
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


export const getTradesByDate = (date?:string) => useSelector((state: { trades: any, journal:any}) => {
    const trades = state.trades.trades;
    const filterByDate = state.journal.filterByDate;

    if(!date) {
        // Retrun all by default 
        return trades.filter((trade:ITrade) => trade.date === filterByDate);
    } else {
        // Return all by Date
        return trades.find((trade:ITrade) => trade.date === date)
    }

})