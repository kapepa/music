import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {Track} from "./track.shema";

export type CommentsDocument = Comments & Document;

@Schema()
export class Comments {
  @Prop()
  username: string;

  @Prop()
  text: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'tracks' })
  track: Track;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);