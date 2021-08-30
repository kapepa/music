import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';
import { IInitialStatePlayer } from '../../types/state'

const initialState: IInitialStatePlayer = {
  audio: "",
  name: "",
  artist: "",
  active: false,
  volume: 0,
  time: 0,
  duration: 0
}

export const trackSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    trackPlay: (state,action: PayloadAction<boolean>) => {
      state.active = action.payload
    },
    trackVolume: (state,action: PayloadAction<number>) => {
      state.volume = action.payload
    },
    setTrack: (state,action: PayloadAction<IInitialStatePlayer>) => {
      return state = {...state, ...action.payload};
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
})

export const { trackPlay, trackVolume, setTrack } = trackSlice.actions

export default trackSlice