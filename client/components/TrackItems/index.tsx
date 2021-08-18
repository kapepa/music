import React from "react";
import styles from "../../styles/tracks.module.scss"
import {ITracks} from "../../types/tracks";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

interface TrackItemsProps {
  track: ITracks,
  active: boolean
}

const TrackItems: React.FC<TrackItemsProps> = ({track,active = false}) => {
  console.log(track)
  return (
    <div className={styles.tracks__single}>
      <div className={styles.tracks__action}>
        {active ?
          <PlayCircleOutlineIcon
            style={{ fontSize: 40 }}
            className={styles.tracks__btn}
          /> :
          <PauseCircleOutlineIcon
            style={{ fontSize: 40 }}
            className={styles.tracks__btn}
          />
        }
      </div>
      <div className={styles.tracks__name}>
        {track.name}
      </div>
      <div className={styles.tracks__trash}>
        <DeleteOutlineIcon
          style={{ fontSize: 40 }}
          className={styles.tracks__btn}
        />
      </div>
    </div>
  )
}

export default TrackItems