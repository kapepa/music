import {Injectable} from "@nestjs/common";

@Injectable()
export class AlbumService{
  createAlbum(): string{
    return "create album"
  }
  allAlbum(): string{
    return "all album"
  }
  oneAlbum(): string{
    return "one album"
  }
  deleteAlbum(): string{
    return "delete album"
  }
}