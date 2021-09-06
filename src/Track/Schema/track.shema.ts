import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Comments } from './comments.shema'

export type TrackDocument = Track & Document;

@Schema()
export class Track {
  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop()
  listener: number;

  @Prop()
  picture: string;

  @Prop()
  audio: string;

  @Prop()
  text: string;

  @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comments' }]})
  comments: Comments[]
}

export const TrackSchema = SchemaFactory.createForClass(Track);