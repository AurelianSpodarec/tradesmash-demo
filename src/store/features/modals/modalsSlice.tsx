import INote from "@/interface/INote";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";


interface ModalsState {
    modalType: "" | "notes";
    isOpen: boolean;
    content: string;
}

const initialState: ModalsState = {
    modalType: "",
    isOpen: false,
    content: "",
};

const modalsSlice = createSlice({
    name: "modals",
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.modalType = action.payload.modalType;
            state.isOpen = true;
            state.content = action.payload.content;
        },
        closeModal: (state) => {
            state.modalType = "";
            state.isOpen = false;
            state.content = "";
        },
        setModalType: (state, action) => {
            state.content = action.payload;
        }
    },
});


// export const pagesActivePage = () => useSelector((state: { pages:PagesState }) => state.pages.pages.find(page => page.id === state.pages.currentPage))
// export const pagesActiveDOM = () => useSelector((state: { pages:PagesState }) => state.pages.pagesDOM.find(page => page.id === state.pages.currentPage))?.dom
// export const pagesHomePage = () => useSelector((state: { pages:PagesState }) => state.pages.pages.find(page => page.isHome))

export const { openModal, closeModal, setModalType } = modalsSlice.actions;
export default modalsSlice.reducer;