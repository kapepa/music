import React, {useEffect} from "react";
import MainLayout from "../../layouts/main";
import style from '../../styles/tracks.module.scss'
import {Button} from "@material-ui/core";
import {useRouter} from "next/router";
import TrackList from "../../components/TrackList";
import {ITracks} from "../../types/tracks";
import Player from "../../components/Player/Player";
import { wrapper } from '../../store/store';
import {useDispatch, useSelector} from "react-redux";
import {playerSelector} from "../../store/selector/trackSelector";
import {getAllTrack} from "../../store/action/listAction";
import {listSelector} from "../../store/selector/listSelector";

interface IProps {}

const Track: React.FC<IProps> = () => {
  const dispatch = useDispatch()
  const router = useRouter();
  const isList = useSelector(listSelector)
  const track = useSelector(playerSelector)

  useEffect(() => {
    dispatch(getAllTrack())
  },[])

  return (<MainLayout>
    <div className={style.tracks__create}>
      <Button onClick={() => {router.push("/track/create")}}>Load Track</Button>
      <div className={style.tracks__list}>
        <h3>List Tracks</h3>
        {isList.length && <TrackList list={isList}/>}
      </div>
    </div>
    <Player {...track}/>
  </MainLayout>)
}

export default Track;