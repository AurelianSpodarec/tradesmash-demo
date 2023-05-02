import fakeTrades from './../../../../database/migrations/fakeTrades.json';

export function getTrades() {
    const data = fakeTrades;
    const reversedData = [...data].reverse();
    return reversedData;
}