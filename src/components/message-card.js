import React from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
const MessageCard = (props) => {
  const messageData = props.messageData;
  console.log("messageDate", messageData);
  console.log("{messageData.name}", messageData.name);
  const removeId = () => {
    props.removeId(messageData.id);
  };
  return (
    <CCol xs="12" md="6">
      <CCard>
        <CCardHeader><span style={{color:"red"}} onClick={removeId}>x</span> </CCardHeader>
        <CCardBody>
          <div className="d-flex flex-column">
            <CRow className="py-3 justify-content-between">
              <CCol xs="4">نام و نام خانوادگی:</CCol>
              <CCol>{messageData.name}</CCol>
            </CRow>
            <CRow className="py-3 justify-content-between">
              <CCol xs="4">ایمیل:</CCol>
              <CCol>{messageData.email}</CCol>
            </CRow>
            <CRow className="py-3 justify-content-between">
              <CCol xs="4">تلفن همراه:</CCol>
              <CCol>{messageData.phone}</CCol>
            </CRow>
            <CRow className="py-3 justify-content-between">
              <CCol xs="4">موضوع پیام:</CCol>
              <CCol>{messageData.title}</CCol>
            </CRow>
            <CRow className="py-3 justify-content-between">
              <CCol xs="4">توضیحات پیام:</CCol>
              <CCol>{messageData.text}</CCol>
            </CRow>
            {messageData.file != null &&
            <CRow className="py-3 justify-content-between">
              <CCol xs="4">فایل پیوست:</CCol>
              <CCol>
                <a href={`${messageData.file}`}>دانلود</a>
              </CCol>
            </CRow>
            } 
          </div>
        </CCardBody>
      </CCard>
    </CCol>
  );
};
export default MessageCard;
