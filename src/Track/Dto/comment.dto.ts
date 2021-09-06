import * as mongoose from 'mongoose';

export class CommentTrackDto {
  readonly username: string;
  readonly text: string;
  readonly track: mongoose.Schema.Types.ObjectId;
}