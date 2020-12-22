import React from "react";
import { CRow, CCol, CCard } from "@coreui/react";
import CIcon from "@coreui/icons-react";

const AppreciationCard = (props) => {
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
        <img
          src={objectData.img}
          alt=""
          width="100%"
          height="350px"
          className="mb-1"
        />
        <p style={{ fontSize: "13px" }}>{objectData.title}</p>
      </CCard>
    </CCol>
  );
};
export default AppreciationCard;
