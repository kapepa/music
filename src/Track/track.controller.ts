import {Body, Controller, Get, Param, Post, UploadedFiles, UseInterceptors} from "@nestjs/common";
import {TrackService} from "./track.service";
import {Track} from "./Schema/track.shema";
import {Comments} from "./Schema/comments.shema";
import {CreateTrackDto} from "./Dto/track.dto";
import * as mongoose from 'mongoose';
import {CommentTrackDto} from "./Dto/comment.dto";
import {FileFieldsInterceptor} from "@nestjs/platform-express";

@Controller("/track")
export class TrackController{
  constructor(private readonly trackService: TrackService){}

  @Post('/create')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'picture', maxCount: 1 },
    { name: 'audio', maxCount: 1 },
  ]))
  // createTrack(@UploadedFiles() files: Express.Multer.File[], @Body() dto:CreateTrackDto): Promise<Track>{
  createTrack(@UploadedFiles() files: Express.Multer.File[], @Body() dto:CreateTrackDto): any{
    const {picture, audio} = JSON.parse(JSON.stringify(files))
    // return this.trackService.createTrack({...dto, picture: picture[0], audio: audio[0]})
    return this.trackService.createTrack({...dto, picture: picture[0], audio: audio[0]})
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