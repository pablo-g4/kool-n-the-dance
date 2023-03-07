import { imageOverlay } from "leaflet";
import React, {
  Dispatch,
  FunctionComponent,
  useCallback,
  useState,
} from "react";
import { useDropzone } from "react-dropzone";

const DropZone: FunctionComponent<{ setFiles: Dispatch<any> }> = ({
  setFiles,
}) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    setFiles(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
    });

  return (
    <div {...getRootProps()} className="h-80 w-70 cursor-pointer bg-danger ">
      <input {...getInputProps()} />

      <div className=" border-2 border-dashed rounded-x1 h-full flex flex-col">
        <p>Glisser Votre Image / Video</p>
      </div>
      <div>
        <button className="bg-grey-900 w-44 p-2 my-5 rounded-md focus:outline-none">
          {" "}
          ouvrir ici
        </button>
      </div>
    </div>
  );
};

export default DropZone;
