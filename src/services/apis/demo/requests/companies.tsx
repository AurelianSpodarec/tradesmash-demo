import fakeCompanies from './../../../../database/migrations/fakeCompanies.json';

export function getCompanies() {
    const data = fakeCompanies;
    const reversedData = [...data].reverse();
    return reversedData;
}