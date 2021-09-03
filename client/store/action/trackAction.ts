import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../helpers/axiosHelpers'
import {ISaveTrackData} from "../../types/tracks";

export const saveTrackData = createAsyncThunk('track/SaveTrack', async (obj: FormData) => {
  return  await axios.post('/track/create',obj).then( res => res.data);
})
