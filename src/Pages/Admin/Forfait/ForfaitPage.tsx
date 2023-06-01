import _ from "lodash"
import React, { useState, useEffect, useCallback } from "react"
import "../../../Components/Forfaits/addOrEditForfaits.css"
import AddOrEditForfaitsForm from "../../../Components/Forfaits/AddOrEditForfaitsForm"
import {
  getAllForfaitsEvenDisabled,
  deleteForfait,
  createForfait,
  updateForfait,
} from "../../../Controllers/forfait"
import { BsPlusLg } from 'react-icons/bs'
import AddOrEditCustomForfaitModal from "../../../Components/Forfaits/AddOrEditCustomForfaitModal"
import "../../../Components/Carrousel_Activite/styleActivite.css"
import CustomSwitch from "../../../Components/Switch/CustomSwitch"
import { ForfaitVM } from "../../../viewModels/ForfaitVM"
import { getAllCours } from "../../../Controllers/cours"
import { Cours } from "../../../Models/Cours"
import { createFile, deleteFile, getAllFiles } from "../../../Controllers/files"
import { COLLECTION } from "../../../db/collection"
import { AiFillEdit, AiOutlineClose } from 'react-icons/ai'
import { Button } from '@mantine/core'

export const ForfaitPage = () => {
  const [hover, setHover] = useState(false)
  const [allForfaitsVM, setAllForfaitsVM] = useState<ForfaitVM[]>([])
  const [switchValue, setSwitchValue] = useState(true)
  const [
    addOrEditCustomForfaitModalIsOpen,
    setAddOrEditCustomForfaitModalIsOpen,
  ] = useState<boolean>(false);
  const [currentCustomForfait, setCurrentCustomForfait] = useState<ForfaitVM | undefined>(undefined)
  const [allCours, setAllCours] = useState<Cours[]>()

  const fetchAndSetForfaits = useCallback(async () => {
    const allForfaits = await getAllForfaitsEvenDisabled()
    if (allForfaits.length) {
      const fetchAssociatedFiles = await getAllFiles()
      const getAllAssociatedCourses = await getAllCours()
      setAllCours(getAllAssociatedCourses)
      const allForfaitsVM = _.map(allForfaits, forfait => ForfaitVM.fromForfait(forfait))
      _.map(allForfaitsVM, (forfaitVM) => {
        if (!forfaitVM.isBasic) {
          if (forfaitVM.associatedCoursesId.length) {
            _.map(getAllAssociatedCourses, associatedCours => {
              if (_.find(forfaitVM.associatedCoursesId , associatedCoursId => associatedCoursId === associatedCours.id )) forfaitVM.associatedCourses.push(associatedCours)
            })
          }
        }
        if (forfaitVM.imageFileId) {
          const foundedFile = _.find(fetchAssociatedFiles, ['id', forfaitVM.imageFileId])
          if(foundedFile) forfaitVM.imageFile = foundedFile
        }
      })
      setAllForfaitsVM(allForfaitsVM)
    }
  }, []);

  const createForfaitBasic = () => {
    const newForfait = new ForfaitVM();
    newForfait.id = "new";
    setAllForfaitsVM([...allForfaitsVM, newForfait]);
  };

  const createCustomForfait = async (form: any) => {

    const {
      id,
      title ,
      description ,
      price,
      customerType,
      category,
      imageFile,
      imageFileId,
      associatedCoursesId,
      isActive
    } = form 

    let newCustomForfait = new ForfaitVM()
    newCustomForfait.title = title
    newCustomForfait.description = description
    newCustomForfait.isBasic = false
    newCustomForfait.associatedCoursesId = associatedCoursesId
    newCustomForfait.price = price
    newCustomForfait.category = category
    newCustomForfait.customerType = customerType
    newCustomForfait.isActive = isActive

    if (imageFile instanceof File && imageFileId) { 
      await deleteFile(imageFileId)
      newCustomForfait.imageFileId = await createFile(imageFile, COLLECTION.FORFAITS)
    } else {
      newCustomForfait.imageFileId = imageFileId
      newCustomForfait.imageFile = imageFile
    }

    if (imageFile && !imageFileId) newCustomForfait.imageFileId = await createFile(imageFile, COLLECTION.FORFAITS)

    if (newCustomForfait.imageFileId && imageFile instanceof File ) newCustomForfait.imageFile.fileUrl = URL.createObjectURL(imageFile)

    if(associatedCoursesId.length) { 
      _.map(allCours, associatedCours => {
        if(_.find(associatedCoursesId , associatedCoursId => associatedCoursId === associatedCours.id )) newCustomForfait.associatedCourses.push(associatedCours)
      })
    }

    if (id) {
      newCustomForfait.id = id
      await updateForfait(newCustomForfait.toForfait())
      setAllForfaitsVM(oldNewsVMState => _.map(oldNewsVMState, customForfaitItem => customForfaitItem.id === newCustomForfait.id ? newCustomForfait : customForfaitItem))
    } else {
      newCustomForfait.id = await createForfait(newCustomForfait.toForfait())
      setAllForfaitsVM([...allForfaitsVM, newCustomForfait])
    }
    setCurrentCustomForfait(undefined)
    setAddOrEditCustomForfaitModalIsOpen(false)
  }

  const getBasicForfaits = () =>  _.filter(allForfaitsVM, "isBasic")

  const getCustomForfaits = () => _.filter(allForfaitsVM, ["isBasic", false])

  const getActiveCustomForfait = (isCustomForfaitActive: boolean = false) => {
    const customForfaits = getCustomForfaits()
    return _.filter(customForfaits, ["isActive", isCustomForfaitActive])
  }

  const openEditCustomModal = (customForfait: ForfaitVM) => {
    setCurrentCustomForfait(customForfait)
    setAddOrEditCustomForfaitModalIsOpen(true)
  };

  const deleteCustomForfait = async (customForfait: ForfaitVM) => {
    if(customForfait.imageFileId) await deleteFile(customForfait.imageFileId)
    await deleteForfait(customForfait.id)
    setAllForfaitsVM(_.filter( allForfaitsVM, forfaitItem => forfaitItem.id !== customForfait.id))
  };

  const closeAddOrEditCustomForfaitModal = () => {
    setCurrentCustomForfait(undefined);
    setAddOrEditCustomForfaitModalIsOpen(false);
  };

  const updateListOfForfaits = (forfaitToBeUpdated: ForfaitVM) => {
    const newListOfForfaits = allForfaitsVM.map((forfaitItem) => {
      if (forfaitItem.id === "new") {
        return forfaitToBeUpdated;
      }
      return forfaitItem;
    });
    setAllForfaitsVM(newListOfForfaits);
  };

  const handleSwitch = () => {
    setSwitchValue(!switchValue);
  };

  const deleteCurrentForfait = async (
    forfaitToDeleteId: string,
    index: number
  ) => {
    if (forfaitToDeleteId && forfaitToDeleteId !== "new") {
      await deleteForfait(forfaitToDeleteId);
    }
    setAllForfaitsVM(
      _.filter(allForfaitsVM, (forfait) => forfait.id !== forfaitToDeleteId)
    )
  }

  useEffect(() => {
    fetchAndSetForfaits()
  }, []);

  return (
    <div className="mx-4">
      <h1>Gestion des forfaits</h1>
      <div className="d-flex flex-row justify-content-between">
        <h2>Forfaits basiques</h2>
        <Button
          className='button-add'
          onClick={createForfaitBasic}
          disabled={!!_.filter(allForfaitsVM, ["id", "new"]).length}
        >
          <BsPlusLg /> 
          <span style={{
            fontSize: '24px'
          }} className='label-button'>Forfait simple</span>
        </Button>
      </div>

      <div className="row g-4">
        {getBasicForfaits()?.map((forfaitItem, index) => (
          <div key={index} className="col-lg-6 col-md-12 col-sm-12 p-2">
            <AddOrEditForfaitsForm
              updateListOfForfaits={updateListOfForfaits}
              forfait={forfaitItem}
            >
              <a
                type="button"
                onClick={() => deleteCurrentForfait(forfaitItem.id, index)}
              >
                <AiOutlineClose size={25} />
              </a>
            </AddOrEditForfaitsForm>
          </div>
        ))}
      </div>

      <div className="mt-4 d-flex flex-row justify-content-between">
        <h2>Forfaits personnalisés</h2>
        <Button
          onClick={() => setAddOrEditCustomForfaitModalIsOpen(true)}
          className='button-add'
        >
          <BsPlusLg /> 
          <span style={{
            fontSize: '24px'
          }}>Forfait personnalisé</span>

        </Button>
        {addOrEditCustomForfaitModalIsOpen && (
          <AddOrEditCustomForfaitModal
            isOpen={addOrEditCustomForfaitModalIsOpen}
            closeAddOrEditCustomForfaitModal={closeAddOrEditCustomForfaitModal}
            setIsOpen={setAddOrEditCustomForfaitModalIsOpen}
            submitForm={createCustomForfait}
            currentCustomForfait={currentCustomForfait}
            allCours={allCours}
          />
        )}
      </div>
      <div className="d-flex flex-column">
        {
          (
            <CustomSwitch
              value={switchValue}
              setValue={handleSwitch}
              firstLabel="En ligne"
              secondLabel="Archives"
            />
          )
        }

        <div
          className="row"
          style={{
            gap: "20px",
            height: "500px",
            padding: "10px",
          }}
        >
          {getActiveCustomForfait(switchValue) &&
            _.map(getActiveCustomForfait(switchValue), (customForfait, index) => (
              <div
                key={index}
                className="col-lg-3 cardCoursRed2"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
      
                style={
                  !hover
                    ? {
                        backgroundImage: `linear-gradient(to bottom, rgba(251, 54, 64, 1), rgba(251, 54, 64, 0.2), rgba(251, 54, 64, 1)),url(${customForfait.imageFile.fileUrl})`,
                        backgroundSize: "cover",
                      }
                    : {
                        backgroundImage: `linear-gradient(to bottom, rgba(251, 54, 64, 1), rgba(251, 54, 64, 0.75), rgba(251, 54, 64, 1)),url(${customForfait.imageFile.fileUrl})`,
                        backgroundSize: "cover",
                      }
                }
              >
                <div className="d-flex text-white">
                  <span className="mr-auto p-2 titreCours">
                    {customForfait.title}
                  </span>
                  <div>
                    <AiFillEdit className="icon" size={25} onClick={() => openEditCustomModal(customForfait)} />
                    <AiOutlineClose className="icon" size={25} onClick={() => deleteCustomForfait(customForfait)} />
                  </div>
                </div>
                <div className="imgCours2" id="imgCours">
                  <p className="text-white d-flex flex-column text-center justify-content-center">
                    { customForfait.associatedCourses && _.map(customForfait.associatedCourses, (cours, coursesIndex) => (<span key={coursesIndex}>{cours.title}</span>) )}
                  </p>
                </div>
                <div>
                  <p className="text-white">
                  Tarif TTC : {customForfait.price}€ 
                  </p>
                </div>
              </div>
            )) 
            }
        </div>
      </div>
    </div>
  );
};
