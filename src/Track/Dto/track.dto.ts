export class CreateTrackDto{
  readonly name: string;
  readonly artist: string;
  readonly text: string;
  readonly audio: Express.Multer.File;
  readonly picture: Express.Multer.File;
}