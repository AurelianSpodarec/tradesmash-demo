import fakeNotes from './../../../../database/migrations/fakeNotes.json';

export function getNotes() {
    const data = fakeNotes;
    const reversedData = [...data].reverse();
    return reversedData;
}