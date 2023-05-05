import { useSelector } from "react-redux";
import { TradeState } from "./ITradesState";
import currencyFormatter from "@/utils/currencyFormatter";
import ITrade from "@/interface/ITrade";

export const hasTradeNotes = (id: number) => useSelector((state: { notes:any }) => state.notes.notes.find((note:any) => note.id === id));

export const getTotalTradesGrossPnL = () => {
    return useSelector((state: { trades: TradeState }) => {
        const total = state.trades.trades.reduce((acc, trade) => {
            return acc + (trade.grossProfitAndLoss ?? 0);
        }, 0);
        
        return currencyFormatter.format(total);
    });
};

export const getBiggestProfit = () => useSelector((state: { trades: TradeState }) => {
    const profits = state.trades.trades.filter(trade => trade.grossProfitAndLoss != null && trade.grossProfitAndLoss > 0).map(trade => trade.grossProfitAndLoss ?? 0);
    if (profits.length === 0) return currencyFormatter.format(0); // no profits found
    
    const biggestProfit = profits.reduce((a, b) => Math.max(a ?? 0, b ?? 0));
    return currencyFormatter.format(biggestProfit);
});


export const getBiggestLoss = () => useSelector((state: { trades: TradeState }) => {
    const losses = state.trades.trades.filter(trade => trade.grossProfitAndLoss != null && trade.grossProfitAndLoss < 0).map(trade => trade.grossProfitAndLoss ?? 0);
    if (losses.length === 0) return currencyFormatter.format(0); // no losses found
    
    const biggestLoss = losses.reduce((a, b) => Math.min(a, b));
    return currencyFormatter.format(biggestLoss);
});


export const getTotalSwingGrossPL = () => useSelector((state: {trades: TradeState}) => {
    const total = state.trades.trades
        .filter(trade => trade.strategy === 'swing trading')
        .reduce((total, trade) => total + (trade.grossProfitAndLoss ?? 0), 0);

    return currencyFormatter.format(total)
});

export const getTotalScalpGrossPL = () => useSelector((state: { trades: TradeState} ) => {
    const total =  state.trades.trades
        .filter(trade => trade.strategy === 'scalping')
        .reduce((total, trade) => total + (trade.grossProfitAndLoss ?? 0), 0);

    return currencyFormatter.format(total)
});



export const getProfitLossRatio = () => useSelector((state: { trades: TradeState }) => {
    let totalProfit = 0;
    let totalLoss = 0;

    for (const trade of state.trades.trades) {
        const grossProfitAndLoss = trade.grossProfitAndLoss;
     
        if (grossProfitAndLoss != null) {
            if (grossProfitAndLoss > 0) {
                totalProfit += grossProfitAndLoss;
            } else {
                totalLoss += grossProfitAndLoss;
            }
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
        return trades.filter((trade:ITrade) => trade.date === filterByDate && trade.notes === true);
    } else {
        // Return all by Date
        const trade = trades.find((trade:ITrade) => trade.date === date)
        if(trade === undefined) {
            return []
        } else {
            return [trade];
        }
    }

})