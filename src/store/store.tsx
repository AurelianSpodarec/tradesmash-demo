import { configureStore } from "@reduxjs/toolkit";
import tradesSlice from "./features/trades/tradesSlice";
import notesSlice from "./features/notes/notesSlice";


const store = configureStore({
    reducer: {
        trades: tradesSlice,
        notes: notesSlice
        // notes,
        // designTokens: designTokensSlice,
        // navigation: navigationSlice,
        // pages: pagesSlice
    }
});

export default store;