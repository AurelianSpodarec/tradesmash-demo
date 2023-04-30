import INote from "@/interface/INote";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";





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
        }
    },
});


// export const pagesActivePage = () => useSelector((state: { pages:PagesState }) => state.pages.pages.find(page => page.id === state.pages.currentPage))
// export const pagesActiveDOM = () => useSelector((state: { pages:PagesState }) => state.pages.pagesDOM.find(page => page.id === state.pages.currentPage))?.dom
// export const pagesHomePage = () => useSelector((state: { pages:PagesState }) => state.pages.pages.find(page => page.isHome))

export const { setNotes } = notesSlice.actions;
export default notesSlice.reducer;