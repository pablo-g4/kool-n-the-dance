import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Planning.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import AdminSidebar from "../../../Components/AdminSidebar/AdminSidebar";

const Planning = () => {
  return (
    <>
        <div className="centrage">
          <div className="text-haut " style={{}}>
            Editez votre planning sur
          </div>

          <button type="button" className="button-bas btn">
            Google Agenda <FontAwesomeIcon icon={faArrowRight} />{" "}
          </button>
        </div>
    </>
  );
};

export default Planning;
