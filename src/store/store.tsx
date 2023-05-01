import { configureStore } from "@reduxjs/toolkit";
import tradesSlice from "./features/trades/tradesSlice";
import notesSlice from "./features/notes/notesSlice";
import modalsSlice from "./features/modals/modalsSlice";
import notebookSlice from "./features/notebook/notebookSlice";

const store = configureStore({
    reducer: {
        trades: tradesSlice,
        notes: notesSlice,
        modal: modalsSlice,
        notebook: notebookSlice
    }
});

export default store;