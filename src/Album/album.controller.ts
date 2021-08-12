import {Controller, Get} from "@nestjs/common";
import {AlbumService} from "./album.service";

@Controller('/album')
export class AlbumController{
  constructor(private readonly albumSrvice: AlbumService) {}

  @Get('/create')
  createAlbum(): string{
    return this.albumSrvice.createAlbum()
  }
  @Get('/all')
  allAlbum(): string{
    return this.albumSrvice.allAlbum()
  }
  @Get('/one')
  oneAlbum(): string{
    return  this.albumSrvice.oneAlbum()
  }
  @Get('/delete')
  deleteAlbum(): string{
    return this.albumSrvice.deleteAlbum()
  }
}