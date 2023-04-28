export interface ITrade {
    id: number;
    date: string;
    stock: string;
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
    rrRatio: number;
    grossPL: number;
    status: "open" | "closed" | "increased" | "decreased";
}