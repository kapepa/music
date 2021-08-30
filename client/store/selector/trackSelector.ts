import {createSelector} from "@reduxjs/toolkit";
import {IInitialStatePlayer} from "../../types/state";

export const playerSelector = createSelector(
  (state:any) => state.player,
  (state) => state
);

