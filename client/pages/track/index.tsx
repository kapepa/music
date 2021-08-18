import React from "react";
import MainLayout from "../../layouts/main";
import style from '../../styles/tracks.module.scss'
import {Button} from "@material-ui/core";
import {useRouter} from "next/router";
import TrackList from "../../components/TrackList";
import {IComments, ITracks} from "../../types/tracks";

const Track: React.FC = () => {
  const router = useRouter();
  const track: ITracks[] = [
    {
      name: "first",
      artist: "One",
      listener: 2,
      picture: "/picture/загружено (1).jpg",
      audio: "/audio/Galibri & Mavik - Федерико Феллини.mp3",
      text: "somebody text",
      comments: []
    },
    {
      name: "second",
      artist: "Two",
      listener: 5,
      picture: "/picture/загружено (2).jpg",
      audio: "/audio/Viktoria - Мы Не Ангелы.mp3",
      text: "any text",
      comments: []
    },
  ]
  return (<MainLayout>
    <div className={style.tracks__create}>
      <Button onClick={() => {router.push("/track/create")}}>Load Track</Button>
      <div className={style.tracks__list}>
        <h3>List Tracks</h3>
        <TrackList list={track}/>
      </div>
    </div>
  </MainLayout>)
}

export default Track;