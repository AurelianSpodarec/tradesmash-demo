import fakeNotes from './../../../../migrations/fakeNotes.json';

export function getNotes() {
    const data = fakeNotes;
    const reversedData = [...data].reverse();
    return reversedData;
}