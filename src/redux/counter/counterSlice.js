import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    arttır: (state) => {
      state.value += 1;
    },
    eksilt: (state) => {
      state.value -= 1;
    },
    userEnter: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

export const { arttır, eksilt, userEnter } = counterSlice.actions;
export default counterSlice.reducer;
