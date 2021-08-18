import React from "react";
import {ITracks} from "../../types/tracks";
import TrackItems from "../TrackItems";

interface TrackListProps {
  list: ITracks[];
}

const TrackList: React.FC<TrackListProps> = ({list}) => {
  return (
    <div>
      {list.map((track, index) => {
        return <TrackItems key={track.name + index}  track={track} active={false}/>
      })}
    </div>
  )
}

export default TrackList
