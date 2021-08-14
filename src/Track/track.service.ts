import { Model } from 'mongoose';
import {Injectable} from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import {Track, TrackDocument} from "./Schema/track.shema";
import {Comments, CommentsDocument} from "./Schema/comments.shema";
import {CreateTrackDto} from "./Dto/track.dto";
import {CommentTrackDto} from "./Dto/comment.dto";
import * as mongoose from 'mongoose';


@Injectable()
export class TrackService{
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comments.name) private CommentModel: Model<CommentsDocument>
  ) {}
  async createTrack(dto:CreateTrackDto): Promise<Track>{
    return await this.trackModel.create({...dto, listener: 0})
  }
  async allTrack(): Promise<Track[]>{
    return this.trackModel.find({})
  }
  async oneTrack(id: mongoose.Schema.Types.ObjectId): Promise<Track>{
    return this.trackModel.findById(id).populate("comments")
  }
  async deleteTrack(id: mongoose.Schema.Types.ObjectId): Promise<Track>{
    return this.trackModel.findByIdAndDelete(id)
  }
  async addComent(dto: CommentTrackDto): Promise<Comments> {
    const track = await this.trackModel.findById(dto.trackID)
    const comments = await this.CommentModel.create({...dto})
    track.comments.push(comments._id)
    await track.save()
    return comments
  }
}
