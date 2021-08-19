import React from "react";
import styles from "../../styles/tracks.module.scss"
import {ITracks} from "../../types/tracks";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {useRouter} from "next/router";

interface TrackItemsProps {
  track: ITracks,
  active: boolean
}

const TrackItems: React.FC<TrackItemsProps> = ({track,active = false}) => {
  const router = useRouter()
  return (
    <div className={styles.tracks__single} onClick={() => {router.push('/track/'+ track._id)}}>
      <div className={styles.tracks__action}>
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
      <div className={styles.tracks__name}>
        <div>Track: {track.name}</div>
        <div>Artist {track.artist}</div>
      </div>
      <div className={styles.tracks__time}>
        {active && <div> 02:42 / 03:22 </div>}
      </div>
      <div className={styles.tracks__trash}>
        <DeleteOutlineIcon
          style={{ fontSize: 40 }}
          className={styles.tracks__btn}
          onClick={(e) => {e.stopPropagation(); }}
        />
      </div>
    </div>
  )
}

export default TrackItems