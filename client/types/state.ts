import {ITracks} from "./tracks";

export interface IInitialStateTrack {
  audio?: string,
  name?: string,
  active?: boolean,
  artist?: string,
  volume?: number,
  time?: number,
  duration?: number,
  loads?: boolean,
  _id?: string,
}

export interface IInitialStateList {
  list: ITracks[] | any,
  loads: boolean,
}