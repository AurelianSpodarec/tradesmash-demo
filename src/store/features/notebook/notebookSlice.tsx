// @ts-nocheck
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


const initialState:any = {
    // activeNote: 0,
    // activeNoteTrade: 9
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



export const { setActiveNote } = tradeSlice.actions;
export default tradeSlice.reducer;