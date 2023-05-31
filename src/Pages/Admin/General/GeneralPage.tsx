import "./general.css"
import React, { useState, useEffect } from "react"
import DropZone from "../../../Components/DropZone/DropZone"
import { GeneralInformations, INFORMATION_TYPE } from "../../../Models/GeneralInformations"
import { getAllGeneralInformations, createGeneralInformations, updateGeneralInformations } from "../../../Controllers/informations"
import _ from "lodash"


export const GeneralPage = () => {

      const [file, setFile] = useState(String)

      const [generalInformationsForm, setGeneralInformationsForm] = useState({
        id: '',
        phoneNumber: '',
        facebookLink: '',
        headerImageUrl: ''
      })

      const handleUpload = () => {
        const formData = new FormData();
        formData.append("myFile", file);
      }

      const onSubmitGeneralInformations = async (event: any) => {
        event.preventDefault()
        const newGeneralInformations = new GeneralInformations()

        if(generalInformationsForm.phoneNumber) newGeneralInformations.phoneNumber = generalInformationsForm.phoneNumber
        if(generalInformationsForm.facebookLink) newGeneralInformations.facebookLink = generalInformationsForm.facebookLink
        if(generalInformationsForm.headerImageUrl) newGeneralInformations.headerImageUrl = generalInformationsForm.headerImageUrl
        if(generalInformationsForm.id) newGeneralInformations.id = generalInformationsForm.id

        if (generalInformationsForm.id) await updateGeneralInformations(newGeneralInformations)
        else newGeneralInformations.id = await createGeneralInformations(newGeneralInformations)
      
        setGeneralInformationsForm({ 
          id: newGeneralInformations.id, 
          phoneNumber: newGeneralInformations.phoneNumber, 
          facebookLink: newGeneralInformations.facebookLink, 
          headerImageUrl: newGeneralInformations.headerImageUrl  
        })
      }


      const fetchAndSetGeneralInformations = async () => {
        const generalInformations = await getAllGeneralInformations()
        _.map(generalInformations, (generalInformation) => {
          setGeneralInformationsForm({
            id: generalInformation.id,
            phoneNumber: generalInformation.phoneNumber,
            facebookLink: generalInformation.facebookLink,
            headerImageUrl: generalInformation.headerImageUrl 
          })
        })
      }

      useEffect(() => {
        fetchAndSetGeneralInformations()
      },[])
      
      return (
        <>
          <div className="d-flex flex-column- ">
            <div className=" m-5 box-body ">
              <div className="separateur">
                <h2 className="text-deco-h2">Contact</h2>
                <div className="d-flex justify-content-between mt-4">
                  <div>
                    <form method="" action=''  onSubmit={onSubmitGeneralInformations}>
                      <div className="d-flex  ">
                        <label className="bold">Telephone : </label>
                        <p className="light">{generalInformationsForm.phoneNumber == '' ? 'Ajouter un nouveau numéro': generalInformationsForm.phoneNumber}</p>
                      </div>
                      <input value={generalInformationsForm.phoneNumber} onChange={(event) => setGeneralInformationsForm({...generalInformationsForm, phoneNumber: event.target.value })} className="input-size" type="tel" />
                      <button className="btn btn-dark mx-2" type="submit">
                        Modifier
                      </button>
                    </form>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <div className="d-flex justify-content-around">
                    <form method="" action='' onSubmit={onSubmitGeneralInformations}>
                      <div className="d-flex  ">
                        <label className="bold">Facebook : </label>
                        <p className="light">{generalInformationsForm.facebookLink === '' ? 'Ajouter un nouveau lien' : generalInformationsForm.facebookLink}</p>
                      </div>
                      <input className="input-size" value={generalInformationsForm.facebookLink} onChange={(event) => setGeneralInformationsForm({...generalInformationsForm, facebookLink: event.target.value})} type="text" />
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