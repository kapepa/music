import {Body, Controller, Get, Param, Post} from "@nestjs/common";
import {TrackService} from "./track.service";
import {Track} from "./Schema/track.shema";
import {Comments} from "./Schema/comments.shema";
import {CreateTrackDto} from "./Dto/track.dto";
import * as mongoose from 'mongoose';
import {CommentTrackDto} from "./Dto/comment.dto";


@Controller("/track")
export class TrackController{
  constructor(private readonly trackService: TrackService){}

  @Post('/create')
  createTrack(@Body() dto:CreateTrackDto): Promise<Track>{
    return this.trackService.createTrack(dto)
  }
  @Get('/all')
  allTrack(): Promise<Track[]>{
    return this.trackService.allTrack()
  }
  @Get('/one/:id')
  oneTrack(@Param("id") id: mongoose.Schema.Types.ObjectId): Promise<Track>{
    return this.trackService.oneTrack(id)
  }
  @Get('/delete/:id')
  deleteTrack(@Param("id") id: mongoose.Schema.Types.ObjectId): Promise<Track>{
    return this.trackService.deleteTrack(id)
  }
  @Post('/comment')
  commentTrack(@Body() dto: CommentTrackDto): Promise<Comments>{
    return this.trackService.addComent(dto)
  }
}