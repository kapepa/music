import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';
import { IInitialStateList } from '../../types/state'
import {saveTrackData, getAllTrack, delTrack, listenTrack, updateList} from "../action/listAction";
import { ITracks } from "../../types/tracks";
import trackSlice from "./trackSlice";

const initialState: IInitialStateList = {
  list: [],
  loads: false,
}

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.subject,
      };
    },
    [saveTrackData.pending.toString()]: (state) => {
      state.loads = true
    },
    [saveTrackData.fulfilled.toString()]: (state) => {
      state.loads = false
    },
    [getAllTrack.pending.toString()]: (state) => {
      state.loads = true
    },
    [getAllTrack.fulfilled.toString()]: (state, action: PayloadAction<ITracks>) => {
      state.loads = false;
      state.list = action.payload;
    },
    [delTrack.pending.toString()]: (state) => {
      state.loads = true;
    },
    [delTrack.fulfilled.toString()]: (state, action: PayloadAction<ITracks>) => {
      state.loads = false;
      state.list = action.payload;
    },
    [listenTrack.pending.toString()]: (state) => {
      state.loads = true;
    },
    [listenTrack.fulfilled.toString()]: (state) => {
      state.loads = false;
    },
    [updateList.type]: (state, action: PayloadAction<ITracks>) => {
      state.list = action.payload;
    }
  },
})

export default listSlice