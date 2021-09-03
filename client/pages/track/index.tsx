import React, {useEffect} from "react";
import MainLayout from "../../layouts/main";
import style from '../../styles/tracks.module.scss'
import {Button} from "@material-ui/core";
import {useRouter} from "next/router";
import TrackList from "../../components/TrackList";
import {ITracks} from "../../types/tracks";
import Player from "../../components/Player/Player";
import { wrapper } from '../../store/store';
import { useSelector } from "react-redux";
import {playerSelector} from "../../store/selector/trackSelector";
import {getAllTrack} from "../../store/action/listAction";

interface IProps {
  tracks: ITracks[]
}

const Track: React.FC<IProps> = ({ tracks }) => {
  const router = useRouter();
  const {active, artist, audio, duration, name, time, volume } = useSelector(playerSelector)

  return (<MainLayout>
    <div className={style.tracks__create}>
      <Button onClick={() => {router.push("/track/create")}}>Load Track</Button>
      <div className={style.tracks__list}>
        <h3>List Tracks</h3>
        <TrackList list={tracks}/>
      </div>
    </div>
    <Player audio={audio} active={active} name={name} artist={artist} volume={volume} time={time} duration={duration}/>
  </MainLayout>)
}

export const getServerSideProps = wrapper.getServerSideProps(store => async (props) => {
  await store.dispatch(getAllTrack())

  const listTrack = store.getState();
  return {
    props: {
      tracks: listTrack.list.list,
    },
  };
});

export default Track;