import { configureStore } from "@reduxjs/toolkit";
import tradesSlice from "./features/trades/tradesSlice";
import journalSlice from "./features/journal/journalSlice";
import modalsSlice from "./features/modals/modalsSlice";

const store = configureStore({
    reducer: {
        trades: tradesSlice,
        journal: journalSlice,
        modal: modalsSlice,
    }
});

export default store;
