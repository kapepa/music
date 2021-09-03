import {saveTrackData} from "../store/action/listAction";

export interface IComments {
  username: string,
  text: string,
  track: string,
}

export interface ITracks {
  _id: string,
  name: string,
  artist: string,
  listener: number,
  picture: string,
  audio: string,
  text: string,
  comments: IComments[]
}

export interface ISaveTrackData {
  name: string,
  artist: string,
  text: string,
  picture: object ,
  audio: object ,
}