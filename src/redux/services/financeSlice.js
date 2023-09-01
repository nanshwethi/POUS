import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  monthlySaleRecords: [],
  DailySaleRecords: [],

};

export const financeSlice = createSlice({
  name: "financeSlice",
  initialState,
  reducers: {
    addMonthlySaleRecords: (state, { payload }) => {
      (state.monthlySaleRecords = payload.monthlySaleRecords),
        Cookies.set("monthlySaleRecords", JSON.stringify(state.monthlySaleRecords));
    },
    addDailySaleRecords: (state, { payload }) => {
        (state.DailySaleRecords = payload.DailySaleRecords),
          Cookies.set("DailySaleRecords", JSON.stringify(state.DailySaleRecords));
      },
  },
});

export const { addMonthlySaleRecords,addDailySaleRecords } = financeSlice.actions;
export default financeSlice.reducer;
