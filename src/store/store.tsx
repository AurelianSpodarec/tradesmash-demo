import { configureStore } from "@reduxjs/toolkit";
import tradesSlice from "./features/trades/tradesSlice";
import notesSlice from "./features/notes/notesSlice";
import modalsSlice from "./features/modals/modalsSlice";

const store = configureStore({
    reducer: {
        trades: tradesSlice,
        notes: notesSlice,
        modal: modalsSlice
    }
});

export default store;