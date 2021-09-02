import React from "react";
import MainLayout from "../../layouts/main";
import style from '../../styles/tracks.module.scss'
import {Button} from "@material-ui/core";
import {useRouter} from "next/router";
import TrackList from "../../components/TrackList";
import {IComments, ITracks} from "../../types/tracks";
import Player from "../../components/Player/Player";
import { wrapper } from '../../store/store';
import {useSelector} from "react-redux";
import {playerSelector} from "../../store/selector/trackSelector";

const Track: React.FC = () => {
  const router = useRouter();
  const {active, artist, audio, duration, name, time, volume } = useSelector(playerSelector)
  const track: ITracks[] = [
    {
      _id: "43221",
      name: "first",
      artist: "One",
      listener: 2,
      picture: "/picture/загружено (1).jpg",
      audio: "/audio/Galibri & Mavik - Федерико Феллини.mp3",
      text: "somebody text",
      comments: []
    },
    {
      _id: "123123",
      name: "second",
      artist: "Two",
      listener: 5,
      picture: "/picture/загружено (2).jpg",
      audio: "/audio/Viktoria - Мы Не Ангелы.mp3",
      text: "any text",
      comments: []
    },
  ]
  const player = {
    _id: "43221",
    name: "first",
    artist: "One",
    picture: "/picture/загружено (1).jpg",
    audio: "/audio/Galibri & Mavik - Федерико Феллини.mp3",
    active: false,
    volume: .5,
    time: 0,
  }
  return (<MainLayout>
    <div className={style.tracks__create}>
      <Button onClick={() => {router.push("/track/create")}}>Load Track</Button>
      <div className={style.tracks__list}>
        <h3>List Tracks</h3>
        <TrackList list={track}/>
      </div>
    </div>
    <Player audio={audio} active={active} name={name} artist={artist} volume={volume} time={time} duration={duration}/>
  </MainLayout>)
}

// export const getServerSideProps = wrapper.getServerSideProps(store => async ({params}) => {
//
//   // console.log('State on server', store.getState());
//
//   return {
//     props: {
//       id: true,
//     },
//   };
// });

export default Track;