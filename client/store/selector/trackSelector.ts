import {createSelector} from "@reduxjs/toolkit";

export const playerSelector = createSelector(
  (state:any) => state.track,
  (state) => state
);

