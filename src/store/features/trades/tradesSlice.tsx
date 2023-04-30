import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";



const trades = [
    {
        id: 1,
        trade: "APPL"
    }
]

const notes = [
    {
        tradeID: 1,
        note: "Hello my frrriend"
    }
]

interface TradeState {
    trades: [];
}

const initialState: TradeState = {
    trades: [],
};

const tradeSlice = createSlice({
    name: "trades",
    initialState,
    reducers: {
        setTrades: (state, action) => {
            state.trades = action.payload
        }
    },
});

// Total Gross P&L
// export const getTotalGrossPnL = () => useSelector(( state: { trades:TradeState }) => state.trades 



// export const pagesActivePage = () => useSelector((state: { pages:PagesState }) => state.pages.pages.find(page => page.id === state.pages.currentPage))
// export const pagesActiveDOM = () => useSelector((state: { pages:PagesState }) => state.pages.pagesDOM.find(page => page.id === state.pages.currentPage))?.dom
// export const pagesHomePage = () => useSelector((state: { pages:PagesState }) => state.pages.pages.find(page => page.isHome))

export const { setTrades } = tradeSlice.actions;
export default tradeSlice.reducer;