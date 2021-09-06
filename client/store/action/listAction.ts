import {createAction, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../helpers/axiosHelpers'
import {IComments, ITracks} from "../../types/tracks";


export const saveTrackData = createAsyncThunk('track/SaveTrack', async (obj: FormData): Promise<any> => {
  return await axios.post('/track/create',obj).then( res => res.data);
})

export const getAllTrack = createAsyncThunk('track/getAllTrack', async (): Promise<ITracks[]> =>{
  return await axios.get('/track/all').then(res => res.data);
})

export const delTrack = createAsyncThunk('track/delete', async (id: string): Promise<ITracks[]> => {
  return axios.delete(`/track/delete/${id}`).then(res => res.data);
})

export const listenTrack = createAsyncThunk('track/listen', async (id: string): Promise<void> => {
  return  axios.post(`/track/listen/${id}`).then(res => res.data);
})

export const commentsTrack = createAsyncThunk('track/comments', async (obj:IComments): Promise<void> => {
  return await axios.post('/track/comment',obj).then(res => res.data);
})

export const updateList = createAction<ITracks[]>('track/updates')
