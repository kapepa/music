import React from "react";
import MainLayout from "../../layouts/main";
import {ITracks} from "../../types/tracks";
import BaseUrl from "../../../config";

interface TrackPageProps {
  id: string;
}

const TrackPage: React.FC<TrackPageProps> = (id) => {
  const track: ITracks = {
      _id: "43221",
      name: "first",
      artist: "One",
      listener: 2,
      picture: "/picture/загружено (1).jpg",
      audio: "/audio/Galibri & Mavik - Федерико Феллини.mp3",
      text: "somebody text",
      comments: []
    }
  console.log(BaseUrl)
  return (
    <MainLayout>
      <div>

      </div>
    </MainLayout>
  )
}

export default TrackPage;