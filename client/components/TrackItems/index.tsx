import React from "react";
import styles from "../../styles/tracks.module.scss"
import {ITracks} from "../../types/tracks";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { useRouter } from "next/router";
import { playerSelector } from "../../store/selector/trackSelector";
import { useDispatch, useSelector } from "react-redux";
import { setTrack, trackPlay } from "../../store/slice/trackSlice";
import {delTrack, saveTrackData} from "../../store/action/listAction";

interface TrackItemsProps {
  track: ITracks,
}

const TrackItems: React.FC<TrackItemsProps> = ({track}) => {
  const dispatch = useDispatch()
  const router = useRouter();
  const { name, active, time, duration } = useSelector(playerSelector);

  const selectAndPlayTrack = (e: React.SyntheticEvent): void => {
    e.stopPropagation();
    dispatch(setTrack({name: track.name, audio: track.audio, active: true}))
  }

  const stopPlayTrack = (e: React.SyntheticEvent): void => {
    e.stopPropagation();
    dispatch(trackPlay(false));
  }

  // const delTrack = (e): void => {
  //   e.stopPropagation();
  //   dispatch(delTrack("asdasdasdas"))
  // }

  const sendTrack = (e: React.SyntheticEvent<HTMLElement>): void => {
    e.stopPropagation()
    dispatch(delTrack(track._id))
  }

  return (
    <div className={styles.tracks__single} onClick={() => {router.push('/track/'+ track._id)}}>
      <div className={styles.tracks__action}>
        {(track.name === name && active)  ?
          <PlayCircleOutlineIcon
            style={{ fontSize: 40 }}
            className={styles.tracks__btn}
            onClick={stopPlayTrack}
          /> :
          <PauseCircleOutlineIcon
            style={{ fontSize: 40 }}
            className={styles.tracks__btn}
            onClick={selectAndPlayTrack}
          />
        }
      </div>
      <div className={styles.tracks__name}>
        <div>Track: {track.name}</div>
        <div>Artist {track.artist}</div>
      </div>
      <div className={styles.tracks__time}>
        {(track.name === name && active) && <div> {time} / {duration} </div>}
      </div>
      <div className={styles.tracks__trash} onClick={sendTrack}>
        <DeleteOutlineIcon
          style={{ fontSize: 40 }}
          className={styles.tracks__btn}
        />
      </div>
    </div>
  )
}

export default TrackItems