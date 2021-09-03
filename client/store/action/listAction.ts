import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../helpers/axiosHelpers'

export const saveTrackData = createAsyncThunk('track/SaveTrack', async (obj: FormData) => {
  return await axios.post('/track/create',obj).then( res => res.data);
})

export const getAllTrack = createAsyncThunk('track/getAllTrack', async () =>{
  return await axios.get('/track/all').then(res => res.data);
})
