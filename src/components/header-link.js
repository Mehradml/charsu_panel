import React from "react";
import { CRow, CCol, CCard } from "@coreui/react";
import CIcon from "@coreui/icons-react";

const HeaderLink = (props) => {
  const objectData = props.objectData;
  const removeId = () => {
    props.removeId(objectData.id);
  };
  const editItem = () => {
    props.editItem(objectData.id);
    window.scrollTo(0, 0);
  };
  return (
    <CCol xs="12" lg="3">
      <CCard className="p-2 card">
        <CRow className="justify-content-between mx-1 mb-3">
          <div class="bg-danger  rounded close-icon d-flex align-items-center justify-content-center">
            <CIcon name="cil-x" alt="Dashboard" onClick={removeId} />
          </div>
          <div class="bg-warning rounded edit-icon d-flex align-items-center justify-content-center">
            <CIcon name="cil-pencil" alt="Dashboard" onClick={editItem} />
          </div>
        </CRow>

        <CRow className="justify-content-between align-items-center mb-3">
          <CCol xs="3">
            <div style={{ fontSize: "13px", fontWeight: "bold" }}>عنوان:</div>
          </CCol>
          <CCol>
            <div>{objectData.title}</div>
          </CCol>
        </CRow>
        <CRow className="justify-content-between align-items-center mb-3">
          <CCol xs="3">
            <div style={{ fontSize: "13px", fontWeight: "bold" }}>لینک:</div>
          </CCol>
          <CCol>
            <div>{objectData.link}</div>
          </CCol>
        </CRow>
      </CCard>
    </CCol>
  );
};
export default HeaderLink;
