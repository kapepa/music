import React, {useState} from "react";
import MainLayout from "../../layouts/main";
import {IComments, ICommentsTrack, ITracks} from "../../types/tracks";
import BaseUrl from "../../../config";
import {Button} from "@material-ui/core";
import {useRouter} from "next/router";
import style from "../../styles/tracks.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {listSelector} from "../../store/selector/listSelector";
import {commentsTrack} from "../../store/action/listAction";

interface TrackPageProps {
  id: string;
}

const TrackPage: React.FC<TrackPageProps> = (id) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isList = useSelector(listSelector);
  const [comments, setComments] = useState({username: "", text: "", track: ""});
  const [track, setTrack] = useState(() => {
    return {...isList.find( (el: ITracks) => el._id === router.query.id)}
  })
  const inputForm = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setComments({...comments, [e.target.name]: e.target.value, track: track._id })
  }
  const textForm = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setComments({...comments, [e.target.name]: e.target.value, track: track._id})
  }

  const submitComment = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(commentsTrack(comments))
  }

  return (
    <MainLayout>
      <div className={style.tracks__create}>
        <Button onClick={() => {router.push("/track")}}>Back to Track</Button>
        <div className={style.tracks__frame}>

          <div className={style.tracks__more_detals}>
            <img className={style.tracks__picture} src={`${BaseUrl}/${track.picture}`} alt="track image"/>
            <div className={style.tracks__desc}>
              <div className={style.tracks__text_container}>
                Name Track: <span className={style.tracks__thin}>{track.name}</span>
              </div>
              <div className={style.tracks__text_container}>
                Artist: <span className={style.tracks__thin}>{track.artist}</span>
              </div>
              <div className={style.tracks__text_container}>
                Total listen: <span className={style.tracks__thin}>{track.listener}</span>
              </div>
            </div>
          </div>
          <div className={style.tracks__middle}>
            <div className={style.tracks__word_in_track}>
              <h6 className={style.tracks__h6}>Word in track:</h6>
              <div className={style.tracks__latter}>{track.text}</div>
            </div>
            <div className={style.tracks__word_in_track}>
              <h6 className={style.tracks__h6}>Comments:</h6>
              <div className={style.tracks__latter}>
                {track.comments.map((coment: ICommentsTrack) =>
                  <div className={style.tracks__comment}>
                    <div className={style.tracks__comment_name}>{coment.username}:</div>
                    <div className={style.tracks__comment_message}>{coment.text}</div>
                  </div>
                )}
              </div>
            </div>
            <div className={style.tracks__word_in_track}>
              <h6 className={style.tracks__h6}>Make comments:</h6>
              <form className={style.tracks__form_comments} onSubmit={submitComment}>
                <input onInput={inputForm} className={style.tracks__form_input} name="username" type="text" placeholder={"Name"}/>
                <textarea onInput={textForm} name="text" className={style.tracks__form_text}></textarea>
                <Button type="submit">Send</Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </MainLayout>
  )
}

export default TrackPage;