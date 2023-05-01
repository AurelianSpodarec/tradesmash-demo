export {}

// import ITrade from "@/interface/ITrade";

// function tradeFactory({ trades }:any) {
//     const newTrade:ITrade = {
//         id: trades.length + 1,
//         date: `${Math.floor(Math.random() * 31)}/${Math.floor(Math.random() * 12)}/2023`,
//         stock:  Math.random() < 0.5 ? "CTAG" : "REAT",
//         bs: Math.random() < 0.5 ? "buy" : "sell",
//         size: Math.floor(Math.random() * 999),
//         price: Math.floor(Math.random() * 15),
//         fees: Math.floor(Math.random() * 10001),
//         stop: Math.floor(Math.random() * 25),
//         target:Math.floor(Math.random() * 25),
//         strategy: Math.random() < 0.5 ? "cleaning" : "swiping",
//         value: Math.floor(Math.random() * 120),
//         risk: Math.floor(Math.random() * 6).toFixed(1),
//         aop: Math.floor(Math.random() * 60),
//         acp: Math.floor(Math.random() * 71),
//         rrRatio: 0,
//         grossPL: 0,
//         status: Math.random() < 0.5 ? "open" : "increased",
//     };
// }

// export {
//     tradeFactory
// }


// function addFactoryTrade() {
//     const newTrade:ITrade = {
//         id: trades.length + 1,
//         date: `${Math.floor(Math.random() * 31)}/${Math.floor(Math.random() * 12)}/2023`,
//         stock:  Math.random() < 0.5 ? "CTAG" : "REAT",
//         bs: Math.random() < 0.5 ? "buy" : "sell",
//         size: Math.floor(Math.random() * 999),
//         price: Math.floor(Math.random() * 15),
//         fees: Math.floor(Math.random() * 10001),
//         stop: Math.floor(Math.random() * 25),
//         target:Math.floor(Math.random() * 25),
//         strategy: Math.random() < 0.5 ? "cleaning" : "swiping",
//         value: Math.floor(Math.random() * 120),
//         risk: Math.floor(Math.random() * 6).toFixed(1),
//         aop: Math.floor(Math.random() * 60),
//         acp: Math.floor(Math.random() * 71),
//         rrRatio: 0,
//         grossPL: 0,
//         status: Math.random() < 0.5 ? "open" : "increased",
//     };
// }