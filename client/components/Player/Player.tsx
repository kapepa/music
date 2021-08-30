import React, { useState, useRef, useEffect } from "react";
import styles from '../../styles/player.module.scss'
import { Container } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import RangeBar from "../RangeBar/index.";
import { VolumeUp } from "@material-ui/icons";
import BaseUrl from './../../../config'

interface IPlayer {
  audio: string,
  name: string,
  artist: string,
  active: boolean,
  volume: number,
  time: number
}

const Player: React.FC<IPlayer> = ({audio, name,active, artist, volume,time}) => {
  const [paly, setPlay] = useState({
    audio: "",
    name: "",
    artist: "",
    active: false,
    volume: 0.5,
    time: 0,
    rigth: 0,
  })

  const refPlayer: any = useRef(null)

  useEffect(() => {
    if(refPlayer.current === null) refPlayer.current = new Audio()
    refPlayer.current.src = `${BaseUrl}${audio}`;
    refPlayer.current.onloadedmetadata = (): void => setPlay({audio, name, artist, active: true, volume, time: 0, rigth: Math.round(refPlayer.current.duration)})
    refPlayer.current.volume = paly.volume;
    refPlayer.current.ontimeupdate = (): void => setPlay({...paly, time: Math.round(refPlayer.current.currentTime), rigth: Math.round(refPlayer.current.duration)})
    return () => {
      refPlayer.current.pause()
    }
  },[audio])

  const changeVolume = (volume: number): void => {
    const improveVolume =  Number((+volume / 100).toFixed(2))
    setPlay({...paly, volume: improveVolume});
    refPlayer.current.volume = improveVolume
  }

  const changePlayer = (player: number): void => {
    const changePlace = Math.round(+player);
    setPlay({...paly, time: changePlace})
    refPlayer.current.currentTime = changePlace
  }

  return (
    <div className={styles.player}>
      <Container>
        <div className={styles.player__area}>
          <div className={styles.player__action}>
            {active ?
              <PlayCircleOutlineIcon
                style={{ fontSize: 40 }}
                className={styles.tracks__btn}
                onClick={(e) => {e.stopPropagation(); }}
              /> :
              <PauseCircleOutlineIcon
                style={{ fontSize: 40 }}
                className={styles.tracks__btn}
                onClick={(e) => {e.stopPropagation(); }}
              />
            }
          </div>
          <div className={styles.player__name}>
            <div>Track: {name}</div>
            <div>Artist {artist}</div>
          </div>
          <div className={styles.player__time}>
            <RangeBar left={paly.time} rigth={paly.rigth} progress={changePlayer} name={"player"}/>
          </div>
          <div className={styles.player__volume}>
            <RangeBar left={paly.volume * 100} rigth={100} progress={changeVolume} name={"volume"}/>
            <VolumeUp />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Player;