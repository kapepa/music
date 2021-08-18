export interface IComments {
  username: string,
  text: string,
  track: string,
}

export interface ITracks {
  name: string,
  artist: string,
  listener: number,
  picture: string,
  audio: string,
  text: string,
  comments: IComments[]
}