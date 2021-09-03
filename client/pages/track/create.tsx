import React, {useState} from "react";
import MainLayout from "../../layouts/main";
import styles from "../../styles/create.module.scss"
import {Button} from "@material-ui/core";
import File from "../../components/File/File";
import {saveTrackData} from "../../store/action/trackAction";
import {useDispatch} from "react-redux";
import {number} from "prop-types";

const CreateTrack:React.FC = () => {
  const dispatch = useDispatch();
  const [progrees, setProgrees] = useState(2)
  const [track, setTrack] = useState({
    name: "NewName",
    artist: "NewName",
    text: "NewText",
    picture: {} as any,
    audio: {} as any,
  })

  const sendTrack = (e: React.SyntheticEvent<HTMLElement>): void => {
    const forma = new FormData();
    forma.append("name",track.name)
    forma.append("artist",track.artist)
    forma.append("text",track.text)
    forma.append("picture",track.picture)
    forma.append("audio",track.audio)
    dispatch(saveTrackData(forma));
  }

  const forward = (): void => {
    if(progrees >= 3) return
    setProgrees(progrees + 1)
  }

  const backward = (): void => {
    if(progrees <= 1) return
    setProgrees(progrees - 1)
  }

  const writeChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
    setTrack({...track, [e.target.name]: e.target.value})
  }

  const writeText = (e:React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTrack({...track, [e.target.name]: e.target.value})
  }

  return (
    <MainLayout>
      <div className={styles.create}>
        <h5 className={styles.create__cap}>Create Track</h5>
        <div className={styles.create__progrees}>
          <div className={`${styles["create__circle"]} ${progrees >= 1 ? styles["create__circle--complete"] : ""}`}>1</div>
          <div className={`${styles["create__circle"]} ${progrees >= 2 ? styles["create__circle--complete"] : ""}`}>2</div>
          <div className={`${styles["create__circle"]} ${progrees >= 3 ? styles["create__circle--complete"] : ""}`}>3</div>
        </div>
        <div className={styles.create__body}>
          {progrees === 1 &&
            <div className={styles.create__step_wrapper}>
              <h5 className={styles.create__cap}>Track Description</h5>
              <div className={styles.create__desc}>
                <input onChange={writeChange} className={styles.create__input} type="text" name="name" value={track.name} placeholder="Write name track"/>
                <input onChange={writeChange} className={styles.create__input} type="text" name="artist" value={track.artist} placeholder="Write name artist"/>
                <textarea onInput={writeText} className={styles.create__text_area} rows={8} name="text" value={track.text} placeholder="Write name text"/>
              </div>
            </div>
          }
          {progrees === 2 &&
            <div className={styles.create__step_wrapper}>
              <h5 className={styles.create__cap}>Load Picture</h5>
              <div className={styles.create__desc}>
                <File callback={(file: any):void => {setTrack({...track, picture: file})}} accept="image/*"/>
              </div>
            </div>
          }
          {progrees === 3 &&
          <div className={styles.create__step_wrapper}>
            <h5 className={styles.create__cap}>Load Track</h5>
            <div className={styles.create__desc}>
              <File callback={(file: any):void => {setTrack({...track, audio: file})}} accept="audio/*"/>
            </div>
          </div>
          }
        </div>
        <div>
          <Button onClick={backward}>Backward</Button>
          {track.name !== "" && track.artist !== "" && track.picture.size && track.audio.size
            ? <Button onClick={sendTrack}>Send</Button>
            : <Button onClick={forward}>Forward</Button>
          }
        </div>
      </div>

    </MainLayout>
  )
}

export default CreateTrack