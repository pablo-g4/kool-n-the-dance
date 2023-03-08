import React, { useState } from "react";
import DropZone from "../../../Components/DropZone/DropZone";
import "./general.css";
import { useForm, Resolver } from "react-hook-form";

const General = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const [file, setFile] = useState(String);
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("myFile", file);
  };
  return (
    <>
      <div className="m-5   ">
        <div>
          <DropZone setFiles={setFile} />
          <button className="w-44 bg-grey-900 p-2 my-5 rounded-md">
            mettre vos fichiers
          </button>
        </div>

        <h2 className=" text-aligne ">Contact</h2>
        <div className="d-flex justify-content-between mt-4">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex  ">
                <label>Telphone : </label>
                <p> +33 1234567890</p>
              </div>
              <input className="input-size" name="tel" type="tel" />
              {errors.email && <span>Ce champs est requis</span>}
              <button className="btn btn-dark mx-2" type="submit">
                Modifier
              </button>
            </form>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex  ">
                <label> Horaire :</label>
                <p> 9h-21h</p>
              </div>
              <input className="input-size" name="horaire" type="text" />
              <button className="btn btn-dark mx-2" type="submit">
                Modifier
              </button>
            </form>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex  ">
                <label>TickTock : </label>
                <p> lien ticktock</p>
              </div>
              <input className="input-size" name="tiktok" type="text" />
              <button className="btn btn-dark  mx-2 " type="submit">
                Modifier
              </button>
            </form>
          </div>
          <div className="d-flex justify-content-around">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-flex  ">
                <label>Facebook : </label>
                <p> lien Facebook</p>
              </div>
              <input className="input-size" name="facebook" type="text" />
              <button className="btn btn-dark mx-1" type="submit">
                Modifier
              </button>
            </form>
          </div>
        </div>
        <div className="d-flex  flex-row-reverse  mt-4 me-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex  ">
              <label>Twitter : </label>
              <p> lien twitter</p>
            </div>
            <input className="input-size" name="twitter" type="text" />
            <button className="btn btn-dark mx-1" type="submit">
              Modifier
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default General;
