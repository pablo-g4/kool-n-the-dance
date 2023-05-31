import "./dropzone.css";
import React, {
  Dispatch,
  FunctionComponent,
  useCallback,
  useState,
} from "react";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";

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
    <div {...getRootProps()} className=" border-point  ">
      <input {...getInputProps()} />

      <div className=" border-2 border-dashed rounded-x1 h-full flex flex-col">
        <h1 className="text-deco mt-4">
          Glisser Votre Image ici
        </h1>
      </div>
      <div>
        <button className="button-import mt-4">
          Importer à partir d'un dossier
          <span className=" mx-2">
            <FontAwesomeIcon icon={faCircleArrowDown} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default DropZone;
