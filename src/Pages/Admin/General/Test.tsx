import React, { useState } from "react";
import DropZone from "../../../Components/DropZone/DropZone";

const Test = () => {
  const [file, setFile] = useState();
  return (
    <div>
      Home page
      <DropZone setFiles={setFile}></DropZone>
    </div>
  );
};

export default Test;
