import { configureStore } from "@reduxjs/toolkit";
import Slice from "../Createslice/Slice";
const store = configureStore({
  reducer: {
    cart: Slice,
  },
});
export default store;
