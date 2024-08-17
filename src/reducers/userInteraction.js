import { createSlice } from "@reduxjs/toolkit";

export const userInteractionSlice = createSlice({
  name: "userInteraction",
  initialState: {
    // modalContainer: "hidden",
    // modalActive: false,

    modalContainer: "one",
    modalActive: true,
    // TODO:
  },
  reducers: {
    defaultState: (state) => {
      state.modalContainer = "hidden";
      state.modalActive = false;
      document.body.classList.remove("no-scroll");
    },
    showModal: (state) => {
      state.modalContainer = "one";
      state.modalActive = true;
      document.body.classList.add("no-scroll");
    },

    closeModalWithAnimation: (state) => {
      document.body.classList.remove("no-scroll");
      state.modalContainer = "one out";
      state.documentBodyClass = "no-scroll";
    },
  },
});

export const { showModal, closeModalWithAnimation, defaultState } =
  userInteractionSlice.actions;

export default userInteractionSlice.reducer;
