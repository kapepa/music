import { Model } from 'mongoose';
import {Injectable} from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import {Track, TrackDocument} from "./Schema/track.shema";
import {Comments, CommentsDocument} from "./Schema/comments.shema";
import {CreateTrackDto} from "./Dto/track.dto";
import {CommentTrackDto} from "./Dto/comment.dto";
import * as mongoose from 'mongoose';
import {FileService} from "../File/file.service";

@Injectable()
export class TrackService{
  constructor(
    @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
    @InjectModel(Comments.name) private CommentModel: Model<CommentsDocument>,
    private fileService: FileService
  ) {}
  async createTrack(dto:CreateTrackDto): Promise<Track>{
    const pathPicture = this.fileService.createFile(dto.picture);
    const pathAudio = this.fileService.createFile(dto.audio)
    return await this.trackModel.create({...dto, picture: pathPicture, audio: pathAudio, listener: 0})
  }
  async allTrack(count: number = 10,offset: number = 0): Promise<Track[]>{
    return this.trackModel.find({}).skip(offset).limit(count)
  }
  async search(name: string): Promise<Track[]>{
    return this.trackModel.find({name: {$regex: new RegExp(name,"ig")}})
  }
  async oneTrack(id: mongoose.Schema.Types.ObjectId): Promise<Track>{
    return this.trackModel.findById(id).populate("comments")
  }
  async addComent(dto: CommentTrackDto): Promise<Comments> {
    const track = await this.trackModel.findById(dto.trackID)
    const comments = await this.CommentModel.create({...dto})
    track.comments.push(comments._id)
    await track.save()
    return comments
  }
  async listen(id: mongoose.Schema.Types.ObjectId): Promise<void>{
    const listenTrack = await this.trackModel.findById(id);
    listenTrack.listener += 1;
    await listenTrack.save();
  }
  async deleteTrack(id: mongoose.Schema.Types.ObjectId): Promise<Track>{
    const track = await this.trackModel.findByIdAndDelete(id);
    this.fileService.removeFile(track.picture)
    this.fileService.removeFile(track.audio)
    return track;
  }
}
