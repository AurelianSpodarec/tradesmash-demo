// @ts-nocheck
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


const initialState:any = {
    activeNoteIndex: 0,
    note: {}
};

const tradeSlice = createSlice({
    name: "notebook",
    initialState,
    reducers: {
        setActiveNote: (state, action) => {
            state.activeNoteIndex = action.payload
        },
    },
});

// export const getActiveNotebook = () => useSelector((state: { notebook: any }) => state.notebook.note);
// export const getActiveNotebook = () => useSelector((state: { notes:any, notebook:any }) => state.notes.notes.find(note => note.id === state.notebook.notebookIndex.activeNoteIndex))

export const getActiveNotebook = () => useSelector((state: { notes: any, notebook: { activeNote: number, activeNoteTrade: number } }) => {
    const activeNoteIndex = state.notebook.activeNoteIndex;
    return state.notes.notes.find(note => note.id === activeNoteIndex);
});
  

export const { setActiveNote } = tradeSlice.actions;
export default tradeSlice.reducer;