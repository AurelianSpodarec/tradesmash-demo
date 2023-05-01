// @ts-nocheck
import { useDispatch, useSelector } from "react-redux";
import { createSelector, createSlice } from "@reduxjs/toolkit";

import INote from "@/interface/INote";
import { updateTradeHasNote } from "../trades/tradesSlice";

interface NotesState {
    currentNote: number;
    notes: INote[];
}

const initialState: NotesState = {
    currentNote: 0,
    notes: [],
};

const notesSlice = createSlice({
    name: "notes",
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

// export const getNoteByTradeID = (tradeID: number) => useSelector((state: { notes: NotesState }) => {
//        state.notes.notes.find(note => note.tradeID === tradeID)
// });

export const getNoteByTradeID = (tradeID:any) => useSelector((state: { notes:NotesState }) => state.notes.notes.find(note => note.tradeID === tradeID))


// export const pagesActivePage = () => useSelector((state: { pages:PagesState }) => state.pages.pages.find(page => page.id === state.pages.currentPage))
// export const pagesActiveDOM = () => useSelector((state: { pages:PagesState }) => state.pages.pagesDOM.find(page => page.id === state.pages.currentPage))?.dom
// export const pagesHomePage = () => useSelector((state: { pages:PagesState }) => state.pages.pages.find(page => page.isHome))

export const { setNotes, createNote, updateNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;