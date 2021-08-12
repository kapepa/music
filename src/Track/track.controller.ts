import {Controller, Get} from "@nestjs/common";
import {TrackService} from "./track.service";

@Controller("/track")
export class TrackController{
  constructor(private readonly trackService: TrackService){}

  @Get('/create')
  createTrack(): string{
    return  this.trackService.createTrack()
  }
  @Get('/all')
  allTrack(): string{
    return this.trackService.allTrack()
  }
  @Get('/one')
  oneTrack(): string{
    return  this.trackService.oneTrack()
  }
  @Get('/delete')
  deleteTrack(): string{
    return  this.trackService.deleteTrack()
  }
}