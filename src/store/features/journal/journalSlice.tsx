// @ts-nocheck
import { useDispatch, useSelector } from "react-redux";
import { createSelector, createSlice } from "@reduxjs/toolkit";

import INote from "@/interface/INote";
import { updateTradeHasNote } from "../trades/tradesSlice";

interface NotesState {
    currentActiveNote: number;
    notes: INote[];
    filterByDate: string;
}

const initialState: NotesState = {
    currentActiveNote: 0,
    notes: [],
    filterByDate: "2023-04-26", //get getll trades from that date
};

const journalSlice = createSlice({
    name: "journal",
    initialState,
    reducers: {
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        createNote: (state, action) => {
            const { tradeID, content } = action.payload;
            const newNote: INote = {
                id: state.notes.length + 1,
                tradeID,
                content,
                updatedAt: Date.now(),
                createdAt: Date.now()
            };
            state.notes.push(newNote);           
        },
        updateNote: (state, action) => {
            const { id, tradeID, content } = action.payload;
            const index = state.notes.findIndex(note => note.id === id);
            if (index !== -1) {
                state.notes[index] = {
                    ...state.notes[index],
                    tradeID: tradeID !== undefined ? tradeID : state.notes[index].tradeID,
                    content: content !== undefined ? content : state.notes[index].content,
                    updatedAt: Date.now(),
                };
            }
        },
        deleteNote: (state, action) => {
            const noteId = action.payload;
            state.notes = state.notes.filter(note => note.id !== noteId);
        }
    },
});


export const getNoteByTradeID = (tradeID:any) => useSelector((state: { journal:NotesState }) => state.journal.notes.find(note => note.tradeID === tradeID))
export const getActiveJournal = () => useSelector((state: { notes: any, journal: { activeNote: number, activeNoteTrade: number } }) => {
    const activeNoteIndex = state.journal.activeNoteIndex;
    return state.notes.notes.find(note => note.id === activeNoteIndex);
});


export const { setNotes, createNote, updateNote, deleteNote } = journalSlice.actions;
export default journalSlice.reducer;