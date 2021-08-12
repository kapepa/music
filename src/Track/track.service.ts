import { Model } from 'mongoose';
import {Injectable} from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import {Track, TrackDocument} from "./Schema/track.shema";

@Injectable()
export class TrackService{
  constructor(@InjectModel(Track.name) private catModel: Model<TrackDocument>) {}
  createTrack(): string{
    return  "crate track"
  }
  allTrack(): string{
    return "all track"
  }
  oneTrack(): string{
    return "one track"
  }
  deleteTrack(): string{
    return "delete track"
  }
}
