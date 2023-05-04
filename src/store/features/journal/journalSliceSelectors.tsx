import { useSelector } from "react-redux";
import { JournalState } from "./IJournalState";


export const getNoteByTradeID = (id:any) => useSelector((state: { journal:JournalState }) => state.journal.notes.find(note => note.tradeID === id))

export const getActiveJournal = () => useSelector((state: { notes: any, journal: { activeNote: number, activeNoteTrade: number } }) => {
    const activeNoteIndex = state.journal.activeNoteIndex;
    return state.notes.notes.find(note => note.id === activeNoteIndex);
});