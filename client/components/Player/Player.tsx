import React, { useState, useRef, useEffect } from "react";
import styles from '../../styles/player.module.scss'
import {Container, duration} from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import RangeBar from "../RangeBar/index.";
import { VolumeUp } from "@material-ui/icons";
import BaseUrl from './../../../config'
import {useDispatch, useSelector} from "react-redux";
import {trackPlay, setTrack, trackVolume} from "../../store/slice/trackSlice";
import {listenTrack, updateList} from "../../store/action/listAction";
import { listSelector } from "../../store/selector/listSelector";
import { ITracks } from "../../types/tracks";

interface IPlayer {
  audio: string,
  name: string,
  artist: string,
  active: boolean,
  volume: number,
  time: number,
  duration: number,
  _id: string,
}

const Player: React.FC<IPlayer> = ({audio, name,active, artist, volume,time, duration, _id}) => {
  const dispatch = useDispatch();
  const refPlayer: any = useRef(null)
  const isList = useSelector(listSelector)

  const changeVolume = (volume: number): void => {
    const improveVolume =  Number((+volume / 100).toFixed(2))
    dispatch(trackVolume(improveVolume));
    refPlayer.current.volume = improveVolume
  }

  const changePlayer = (player: number): void => {
    const changePlace = Math.round(+player);
    dispatch(setTrack({time: changePlace}))
    refPlayer.current.currentTime = changePlace
  }

  const addListen = () => {
    const cloneList = JSON.parse(JSON.stringify(isList));
    const indexListen  = cloneList.findIndex((track: ITracks) => track._id === _id);
    cloneList.splice(indexListen,1,{...cloneList[indexListen], listener: ++ cloneList[indexListen].listener})
    dispatch(trackPlay(false));
    dispatch(listenTrack(_id));
    dispatch(updateList(cloneList))
  }

  useEffect(() => {
    if(refPlayer.current === null) refPlayer.current = new Audio()
    refPlayer.current.src = `${BaseUrl}/${audio}`;
    refPlayer.current.onloadedmetadata = (): void => {dispatch(setTrack({active: true, artist, time: 0, duration: Math.round(refPlayer.current.duration)}))}
    refPlayer.current.volume = volume;
    refPlayer.current.play()
    refPlayer.current.ontimeupdate = (): void => {dispatch(setTrack({ time: Math.round(refPlayer.current.currentTime)}))}
    refPlayer.current.onended = (): void => addListen()
    return () => refPlayer.current.pause()
  },[audio])

  useEffect(() => {
    active ? refPlayer.current.play() : refPlayer.current.pause();
  },[active])

  return (
    <div className={styles.player}>
      <Container>
        <div className={styles.player__area}>
          <div className={styles.player__action}>
            {active ?
              <PlayCircleOutlineIcon
                style={{ fontSize: 40 }}
                className={styles.tracks__btn}
                onClick={(e) => {e.stopPropagation(); dispatch(trackPlay(false))}}
              /> :
              <PauseCircleOutlineIcon
                style={{ fontSize: 40 }}
                className={styles.tracks__btn}
                onClick={(e) => {e.stopPropagation(); dispatch(trackPlay(true))}}
              />
            }
          </div>
          <div className={styles.player__name}>
            <div>Track: {name}</div>
            <div>Artist {artist}</div>
          </div>
          <div className={styles.player__time}>
            <RangeBar left={time} rigth={duration} progress={changePlayer} name={"player"}/>
          </div>

          <div className={styles.player__volume}>
            <RangeBar left={volume * 100} rigth={100} progress={changeVolume} name={"volume"}/>
            <VolumeUp />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Player;