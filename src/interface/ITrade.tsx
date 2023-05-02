export default interface ITrade {
    id: number
    tradeNumber: number;
    status: "open" | "closed";
    date: string; // format: "YYYY-MM-DD"
    symbol: string;
    buySell: "buy" | "sell";
    openDate: string; // format: "YYYY-MM-DD"
    openPrice: number;
    units: number;
    closeDate: string | null; // format: "YYYY-MM-DD" or null
    closePrice: number | null;
    fees: number;
    stopLoss: number | null;
    takeProfit: number | null;
    strategy: "day trading" | "swing trading" | "position trading" | "scalping" | "news trading" | "trend trading" | "mean reversion";
    tradeValue: number;
    riskPercentage: number;
    averageOpenPrice: number | null;
    averageClosePrice: number | null;
    riskRewardRatio: number | null;
    grossProfitAndLoss: number | null;
    marketCondition: "bullish" | "bearish" | "sideways" | "volatile";
    tradeDuration: number | null; // in minutes
    tradeType: "day trade" | "swing trade" | "position trade";
    emotionalState: string | null;
    entryReason: string | null;
    exitReason: string | null;
    maxProfit: number | null;
    maxLoss: number | null;
    consecutiveWins: number | null;
    consecutiveLosses: number | null;
    winningPercentage: number | null;
    performanceScore: number | null;
    notes: [];
    updatedAt: number; // in seconds
    createdAt: number; // in seconds

}