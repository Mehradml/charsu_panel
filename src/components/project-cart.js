import React,{useState} from "react";
import { CRow, CCol, CCard,
 CButton,
  CCardBody,
  CCardHeader,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle } from "@coreui/react";
import CIcon from "@coreui/icons-react";

const ProjectCart = (props) => {

  const projectData = props.projectData;
  const removeObject = () => {
      props.removeObject(projectData.id);
  };
  const editProject = () => {
    props.editProject(projectData.id);
    window.scrollTo(0, 0);
  };
  return (
    <CCol xs="12" lg="3">
      <CCard className="p-2 card">
        <CRow className="justify-content-between mx-1 mb-3">
          <div class="bg-danger  rounded close-icon d-flex align-items-center justify-content-center">
            <CIcon name="cil-x" alt="Dashboard" onClick={removeObject} />
          </div>
          <div class="bg-warning rounded edit-icon d-flex align-items-center justify-content-center">
            <CIcon name="cil-pencil" alt="Dashboard" onClick={editProject} />
          </div>
        </CRow>
        <img
          src={projectData.img}
          alt=""
          width="100%"
          height="150px"
          className="mb-1"
        />
        <CRow className=" mb-2">
          <CCol style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
            {projectData.title}
          </CCol>
          <CCol className="text-left d-flex align-items-center justify-content-end text-secondary">
            <span style={{ fontSize: "13px" }}>{projectData.city}</span>
          </CCol>
        </CRow>
        <p style={{ fontSize: "13px" }}>{projectData.text}</p>
        
      </CCard>
    </CCol>
  );
};
export default ProjectCart;
