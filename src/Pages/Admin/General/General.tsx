import { imageOverlay } from "leaflet";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import DropZone from "../../../Components/DropZone/DropZone";

const General = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const [file, setFile] = useState(String);
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("myFile", file);
  };
  return (
    <>
      <div>
        <DropZone setFiles={setFile} />
        <button className="w-44 bg-grey-900 p-2 my-5 rounded-md">
          mettre vos fichiers
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Telphone</label>
            <p>+33 1234567890</p>
          </div>
          <input name="tel" type="tel" ref={register({ required: true })} />
          {errors.email && <span>Ce champs est requis</span>}
          <button type="submit">Modifier</button>
        </form>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Horaire</label>
            <p>9h-21h</p>
          </div>
          <input name="horaire" type="text" />
          <button type="submit">Modifier</button>
        </form>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>TickTock</label>
            <p>lien ticktock</p>
          </div>
          <input name="tiktok" type="text" />
          <button type="submit">Modifier</button>
        </form>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Facebook</label>
            <p>lien Facebook</p>
          </div>
          <input name="facebook" type="text" />
          <button type="submit">Modifier</button>
        </form>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Twitter</label>
            <p>lien twitter</p>
          </div>
          <input
            name="twitter"
            type="text"
            ref={register({ required: true })}
          />
          <button type="submit">Modifier</button>
        </form>
      </div>
    </>
  );
};

export default General;
function useForm(): {
  register: any;
  handleSubmit: any;
  watch: any;
  errors: any;
} {
  throw new Error("Function not implemented.");
}
