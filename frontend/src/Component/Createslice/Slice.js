import { createSlice } from "@reduxjs/toolkit";
const Slice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addtocart: (state, action) =>
     {
      const newItem = action.payload;
      const existingItem = state.data.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        newItem.quantity = 1;
        state.data.push(newItem);
      }
    },
    removeItem(state, action) {
      console.log("Removing item with id:", action.payload);
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    increment: (state, action) => {
      const id = action.payload;
      console.log(id);
      state.data = state.data.map((item) => {
        if (item.id === id) {
          item.quantity++;
        }
        return item;
      });
    },
    decrement: (state, action) => {
      const id = action.payload;
      console.log(id);
      state.data = state.data.map((item) => {
        if (item.id === id) {
          item.quantity--;
        }
        return item;
      });
    },
  },

});

export default Slice.reducer;
export const { addtocart, increment, decrement,removeItem } = Slice.actions;
