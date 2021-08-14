import * as mongoose from 'mongoose';

export class CommentTrackDto {
  readonly username: string;
  readonly text: string;
  readonly trackID: mongoose.Schema.Types.ObjectId;
}