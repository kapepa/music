import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper';
import { IInitialStateTrack } from '../../types/state'

const initialState: IInitialStateTrack = {
  audio: "",
  name: "",
  artist: "",
  active: false,
  volume: 0.5,
  time: 0,
  duration: 0,
  loads: false,
}

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    trackPlay: (state,action: PayloadAction<boolean>) => {
      state.active = action.payload
    },
    trackVolume: (state,action: PayloadAction<number>) => {
      state.volume = action.payload
    },
    setTrack: (state,action: PayloadAction<IInitialStateTrack>) => {
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