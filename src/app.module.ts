import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {AlbumModule} from "./Album/album.module";
import {TrackModule} from "./Track/track.module";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://kapepa:Uva56945829@cluster0.vlmfu.mongodb.net/MusicThree'),
    AlbumModule,
    TrackModule
  ],
})
export class AppModule {}
