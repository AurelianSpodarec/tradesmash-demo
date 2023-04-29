export default interface IDailyStats {
    timestamp: string;
    netProfitLoss: number;
    totalTrades: number;
    winrate: number;
    winners:number;
    grossProfitLoss: number,
    commision: number,
    losers: number,
    volume: number,
    profitFactor: null,
}
