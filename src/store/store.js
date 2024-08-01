import { configureStore } from "@reduxjs/toolkit";
import userInteractionSlice from "../reducers/userInteraction";

const store = configureStore({
  reducer: {
    userInteraction: userInteractionSlice,
  },
});

export default store;