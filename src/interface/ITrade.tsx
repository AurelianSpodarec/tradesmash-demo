export default interface ITrade {
    id: number;
    date: string;
    symbol: string;
    bs: "sell" | "buy";
    size: number;
    price: number;
    fees: number;
    stop: number;
    target: number;
    strategy: any;
    value: number;
    risk: number;
    aop: number;
    acp: number;
    riskRewardRatio: number;
    grossProfitLoss: number;
    status: "open" | "closed" | "increased" | "decreased";
}