import React from "react";
import style from "../../styles/player.module.scss"

interface IRangeBar {
  name: string
  left: number,
  rigth: number,
  progress: Function,
}

const RangeBar: React.FC<IRangeBar> = ({left,rigth,progress, name}) => {
  const changeField = Number(left.toFixed(2))
  const ChangeProgress = (e: React.ChangeEvent<HTMLInputElement>) => {
    progress(Number(e.target.value))
  }
  const calcTime = (timer: number): string => {
    const wholeMin = Math.floor(timer / 60)
    const wholeSec = timer - (wholeMin * 60)
    return `${wholeMin < 10 ? '0' + wholeMin : "" + wholeMin} :${ wholeSec < 10 ? '0' + wholeSec : "" + wholeSec }`;
  }

  return (
    <div className={style.player__progress}>
      <div className={style.player__clock}> { name === "player" ? calcTime(changeField) :  changeField } / { name === "player" ? calcTime(rigth) : rigth} </div>
      <input type="range" defaultValue={left} max={rigth} onChange={ChangeProgress}/>
    </div>
  )
}

export default RangeBar;