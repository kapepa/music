import {Module} from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import {TrackController} from "./track.controller";
import {TrackService} from "./track.service";
import {Track, TrackSchema} from "./Schema/track.shema";
import {Comments, CommentsSchema} from "./Schema/comments.shema";
import {FileService} from "../File/file.service";

@Module({
  imports: [
    MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
    MongooseModule.forFeature([{name: Comments.name, schema: CommentsSchema}]),
  ],
  controllers: [TrackController],
  providers: [TrackService, FileService],
})

export class TrackModule{}