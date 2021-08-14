import {Injectable} from "@nestjs/common";
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid'

@Injectable()
export class FileService {
  createFile(file: Express.Multer.File): string {
    try{
      const staticFolder = path.resolve(__dirname,"../../../static/",file.fieldname);
      const createServeName = uuid.v4();
      const extendFile = file.originalname.split(".").pop();
      const storeName = `${createServeName}.${extendFile}`
      if(!fs.existsSync(staticFolder)) fs.mkdirSync(staticFolder,{ recursive: true });
      fs.writeFileSync(path.resolve(staticFolder,storeName), new Buffer(file.buffer))
      return file.fieldname +"/"+ storeName
    }catch (e){
      throw new Error(e.name)
    }
  }
  removeFile(){

  }
}