import _ from "lodash";
import React, { useState, useEffect, useCallback } from "react";
import "../../../Components/Forfaits/addOrEditForfaits.css";
import AddOrEditForfaitsForm from "../../../Components/Forfaits/AddOrEditForfaitsForm";
import {
  getAllForfaits,
  deleteForfait,
  createForfait,
  updateForfait,
} from "../../../Controllers/forfait";
import { Forfait } from "../../../Models/Forfait";
import { AiOutlineClose } from "react-icons/ai";
import DeleteConfirmationModal from "../../../Components/Global/DeleteConfirmationModal";
import AddOrEditCustomForfaitModal from "../../../Components/Forfaits/AddOrEditCustomForfaitModal";
import CardHomeCours from "../../../Components/cardHomeCours/cardHomeCours";
import "../../../Components/Carrousel_Activite/styleActivite.css";
import CustomSwitch from "../../../Components/Switch/CustomSwitch";

export const ForfaitPage = () => {
  const [hover, setHover] = useState(false);
  const [allForfaits, setAllForfaits] = useState<Forfait[]>([]);
  const [switchValue, setSwitchValue] = useState(true);
  const [
    addOrEditCustomForfaitModalIsOpen,
    setAddOrEditCustomForfaitModalIsOpen,
  ] = useState<boolean>(false);
  const [currentCustomForfait, setCurrentCustomForfait] = useState<
    Forfait | undefined
  >(undefined);

  const fetchData = useCallback(async () => {
    const forfaits = await getAllForfaits();
    if (forfaits.length) {
      setAllForfaits(forfaits);
    }
  }, []);

  const createForfaitBasic = () => {
    const newForfait = new Forfait();
    newForfait.id = "new";
    setAllForfaits([...allForfaits, newForfait]);
  };

  const createCustomForfait = async (customForfait: Forfait) => {
    if (customForfait.id) {
      await updateForfait(customForfait);
      const updatedListOfForfaits = allForfaits.map((customForfaitItem) => {
        return customForfait.id === customForfaitItem.id
          ? customForfait
          : customForfaitItem;
      });
      setAllForfaits(updatedListOfForfaits);
    } else {
      customForfait.id = await createForfait(customForfait);
      setAllForfaits([...allForfaits, customForfait]);
    }
  };

  const getBasicForfaits = () => {
    return _.filter(allForfaits, "isBasic");
  };

  const getCustomForfaits = () => {
    return _.filter(allForfaits, ["isBasic", false]);
  };

  const getActiveCustomForfait = (isCustomForfaitActive: boolean = false) => {
    const customForfaits = getCustomForfaits();
    return _.filter(customForfaits, ["isActive", isCustomForfaitActive]);
  };

  const openEditCustomModal = (customForfait: Forfait) => {
    setCurrentCustomForfait(customForfait);
    setAddOrEditCustomForfaitModalIsOpen(true);
  };

  const deleteCustomForfait = async (customForfait: Forfait) => {
    await deleteForfait(customForfait.id);
    const updatedListOfForfaits = _.filter(
      allForfaits,
      (forfaitItem) => forfaitItem.id !== customForfait.id
    );
    setAllForfaits(updatedListOfForfaits);
  };

  const closeAddOrEditCustomForfaitModal = () => {
    setCurrentCustomForfait(undefined);
    setAddOrEditCustomForfaitModalIsOpen(false);
  };

  const updateListOfForfaits = (forfaitToBeUpdated: Forfait) => {
    const newListOfForfaits = allForfaits.map((forfaitItem) => {
      if (forfaitItem.id === "new") {
        console.log("forfait being updated", forfaitToBeUpdated);

        return forfaitToBeUpdated;
      }
      return forfaitItem;
    });
    setAllForfaits(newListOfForfaits);
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
    setAllForfaits(
      _.filter(allForfaits, (forfait) => forfait.id !== forfaitToDeleteId)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-4">
      <h1>Gestion des forfaits</h1>
      <div className="d-flex flex-row justify-content-between">
        <h2>Forfaits basiques</h2>
        <button
          style={{
            borderRadius: "10px",
            backgroundColor: "red",
            border: "none",
          }}
          onClick={createForfaitBasic}
          type="button"
          className="text-white"
          disabled={!!_.filter(allForfaits, ["id", "new"]).length}
        >
          + Ajouter un forfait basique
        </button>
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
        <button
          style={{
            borderRadius: "10px",
            backgroundColor: "red",
            border: "none",
          }}
          onClick={() => setAddOrEditCustomForfaitModalIsOpen(true)}
          className="text-white"
        >
          + Ajouter un forfait basique
        </button>
        {addOrEditCustomForfaitModalIsOpen && (
          <AddOrEditCustomForfaitModal
            isOpen={addOrEditCustomForfaitModalIsOpen}
            closeAddOrEditCustomForfaitModal={closeAddOrEditCustomForfaitModal}
            setIsOpen={setAddOrEditCustomForfaitModalIsOpen}
            submitForm={createCustomForfait}
            currentCustomForfait={currentCustomForfait}
          />
        )}
      </div>
      <div className="d-flex flex-column">
        <CustomSwitch
          value={switchValue}
          setValue={handleSwitch}
          firstLabel="En ligne"
          secondLabel="Archives"
        />
        <div
          className="row"
          style={{
            gap: "20px",
            height: "500px",
            padding: "10px",
          }}
        >
          {getActiveCustomForfait(switchValue) &&
            getActiveCustomForfait(switchValue).map((customForfait, index) => (
              <div
                key={index}
                className="col-lg-3 cardCoursRed2"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
      
                style={
                  !hover
                    ? {
                        backgroundImage: `linear-gradient(to bottom, rgba(251, 54, 64, 1), rgba(251, 54, 64, 0.2), rgba(251, 54, 64, 1)),url(${customForfait.imageUrl})`,
                        backgroundSize: "cover",
                      }
                    : {
                        backgroundImage: `linear-gradient(to bottom, rgba(251, 54, 64, 1), rgba(251, 54, 64, 0.75), rgba(251, 54, 64, 1)),url(${customForfait.imageUrl})`,
                        backgroundSize: "cover",
                      }
                }
              >
                <div className="d-flex text-white">
                  <span className="mr-auto p-2 titreCours">
                    {customForfait.title}
                  </span>
                  <span
                    onClick={() => openEditCustomModal(customForfait)}
                    className="p-2"
                  >
                    Modifier
                  </span>
                  <span
                    onClick={() => deleteCustomForfait(customForfait)}
                    className="p-2"
                  >
                    X
                  </span>
                </div>
                <div className="imgCours2" id="imgCours">
                  <p className="text-white d-flex flex-column text-center justify-content-center">
                    {customForfait.associatedCourses &&
                      customForfait.associatedCourses.map(
                        (course, coursesIndex) => (
                          <span key={coursesIndex}>{course}</span>
                        )
                      )}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
