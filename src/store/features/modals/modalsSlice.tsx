import { createSlice } from "@reduxjs/toolkit";
import { IModalsState } from "./IModalState";

const initialState: IModalsState = {
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

export const { openModal, closeModal, setModalType } = modalsSlice.actions;
export default modalsSlice.reducer;
