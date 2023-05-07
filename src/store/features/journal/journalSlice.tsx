// @ts-nocheck
import { useDispatch, useSelector } from "react-redux";
import { createSelector, createSlice } from "@reduxjs/toolkit";

import INote from "@/interface/INote";
import { updateTradeHasNote } from "../trades/tradesSlice";
import dateFormatter from "@/utils/dateFormatter";
import { IJournalState } from "./IJournalState";

// interface NotesState {
//     activeNote: INote;
//     activeNoteIndex: number;
//     notes: INote[];
//     filterByDate: string;
// }

const initialState: IJournalState = {
    activeNote: {},
    activeNoteIndex: null,
    notes: [],
    filterByDate: "", // 2023-04-26 get getll trades from that date
};

const journalSlice = createSlice({
    name: "journal",
    initialState,
    reducers: {
        setSelectedDate: (state, action) => {
            const date = dateFormatter.formatDateISO(action.payload)
            state.filterByDate = date
        },
        setActiveNote: (state, action) => {
            state.activeNote = action.payload
            state.activeNoteIndex = action.payload.id
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        createJournal: (state, action) => {
            const { id, content } = action.payload;
            const newNote: INote = {
                id: state.notes.length + 1,
                id,
                content,
                updatedAt: Date.now(),
                createdAt: Date.now()
            };
            state.notes.push(newNote);           
        },
        updateJournal: (state, action) => {
            const { id, content } = action.payload;
            const index = state.notes.findIndex(note => note.id === id);
            if (index !== -1) {
                state.notes[index] = {
                    ...state.notes[index],
                    id: id !== undefined ? id : state.notes[index].id,
                    content: content !== undefined ? content : state.notes[index].content,
                    updatedAt: Date.now(),
                };
            }
        },
        deleteJournal: (state, action) => {
            const noteId = action.payload;
            state.notes = state.notes.filter(note => note.id !== noteId);
        }
    },
});

export const { setSelectedDate, setNotes, createJournal, setActiveNote, updateJournal, deleteJournal } = journalSlice.actions;
export default journalSlice.reducer;