import { imageOverlay } from "leaflet";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import DropZone from "../../../Components/DropZone/DropZone";

const General = () => {
  const [file, setFile] = useState(null);
  return (
    <>
      <div>
        <DropZone setFiles={setFile} />
      </div>
    </>
  );
};

export default General;
