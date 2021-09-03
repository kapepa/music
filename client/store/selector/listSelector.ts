import {createSelector} from "@reduxjs/toolkit";

export const listSelector = createSelector(
  (state:any) => state.list,
  (state) => state.list
);