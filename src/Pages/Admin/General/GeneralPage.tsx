import React, { useState, useEffect } from "react";
import DropZone from "../../../Components/DropZone/DropZone";
import "./general.css";
import { useForm, Resolver } from "react-hook-form";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";
import { Informations } from "../../../Models/Informations";

export const GeneralPage = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: 
        { errors },
      } = useForm();

      const onSubmitPhoneNumber = (data: any) => {
        
      }

      const [file, setFile] = useState(String)

      const [ phoneNumber, setPhoneNumber ] = useState('')
      const [ facebookLink, setFacebookLink ] = useState('')

      const handleUpload = () => {
        const formData = new FormData();
        formData.append("myFile", file);
      }

      const handlePhoneNumberChange = (event: any) => {
        setPhoneNumber(event.target.value)
      }

      const handleFacebookLinkChange = (event: any) => {
        setFacebookLink(event.target.value)
      }

      const onSubmitFacebookLink = () => {

      }

      useEffect(() => {

      })
      
      return (
        <>
          <div className="d-flex flex-column- ">
            <div className=" m-5 box-body ">
              <div>
                <DropZone setFiles={setFile} />
              </div>
              <div className="separateur">
                <h2 className="text-deco-h2">Contact</h2>
                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <form onSubmit={onSubmitPhoneNumber}>
                      <div className="d-flex  ">
                        <label className="bold">Telephone : </label>
                        <p className="light"> +33 1234567890</p>
                      </div>
                      <input onChange={handlePhoneNumberChange} className="input-size" name="tel" type="tel" />
                      {errors.email && <span>Ce champs est requis</span>}
                      <button className="btn btn-dark mx-2" type="submit">
                        Modifier
                      </button>
                    </form>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <div className="d-flex justify-content-around">
                    <form onSubmit={() => console.log('emiting')}>
                      <div className="d-flex  ">
                        <label className="bold">Facebook : </label>
                        <p className="light"> lien Facebook</p>
                      </div>
                      <input className="input-size" onChange={() => console.log('p')} name="facebook" type="text" />
                      <button className="btn btn-dark mx-1" type="submit">
                        Modifier
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}