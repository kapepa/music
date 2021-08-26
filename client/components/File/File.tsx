import React, {useRef} from "react";
import {Button} from "@material-ui/core";
import style from "../../styles/file.module.scss";

interface IFile {
  accept: string,
  callback: Function,
}

const File: React.FC<IFile> = ({accept,callback}) => {
  const refFile = useRef<HTMLInputElement>(null)
  const selectFile = () => {
    refFile.current!.click();
  }

  const fileLoad = (e:React.ChangeEvent<HTMLInputElement>):void => {
    if(e.target.files) callback(e.target.files[0])
  }

  return(
    <div className={style.file}>
      <Button onClick={selectFile}>Select File</Button>
      <input onChange={fileLoad} ref={refFile} accept={accept} className={style.file__file} type="file"/>
    </div>
  )
}

export default File