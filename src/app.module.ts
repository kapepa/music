import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {AlbumModule} from "./Album/album.module";
import {TrackModule} from "./Track/track.module";
import {FileModule} from "./File/file.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://kapepa:Uva56945829@cluster0.vlmfu.mongodb.net/MusicThree'),
    AlbumModule,
    TrackModule,
    FileModule,
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '../../', 'static'),
    }),
  ],
})
export class AppModule {}
