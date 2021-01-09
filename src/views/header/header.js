import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CLabel,
  CRow,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CDataTable,
  CBadge,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Footer = () => {
  const [successModal, setSuccessModal] = useState("");
  //   const [information, setInformation] = useState("");
  const [title1, settitle1] = useState("");
  const [link1, setlink1] = useState("");
  const [title2, settitle2] = useState("");
  const [link2, setlink2] = useState("");
  const [title3, settitle3] = useState("");
  const [link3, setlink3] = useState("");
  const [title4, settitle4] = useState("");
  const [link4, setlink4] = useState("");
  const [title5, settitle5] = useState("");
  const [link5, setlink5] = useState("");
  const [title6, settitle6] = useState("");
  const [link6, setlink6] = useState("");

  const settitle1Value = (e) => {
    settitle1(e.target.value);
  };
  const setlink1Value = (e) => {
    setlink1(e.target.value);
  };
  const settitle2Value = (e) => {
    settitle2(e.target.value);
  };
  const setlink2Value = (e) => {
    setlink2(e.target.value);
  };
  const settitle3Value = (e) => {
    settitle3(e.target.value);
  };
  const setlink3Value = (e) => {
    setlink3(e.target.value);
  };
  const settitle4Value = (e) => {
    settitle4(e.target.value);
  };
  const setlink4Value = (e) => {
    setlink4(e.target.value);
  };
  const settitle5Value = (e) => {
    settitle5(e.target.value);
  };
  const setlink5Value = (e) => {
    setlink5(e.target.value);
  };
  const settitle6Value = (e) => {
    settitle6(e.target.value);
  };
  const setlink6Value = (e) => {
    setlink6(e.target.value);
  };
  useEffect(() => {
    axios.get("http://103.215.223.142:8000/api/nav").then((res) => {
      settitle1(res.data.data.title1);
      setlink1(res.data.data.link1);
      settitle2(res.data.data.title2);
      setlink2(res.data.data.link2);
      settitle3(res.data.data.title3);
      setlink3(res.data.data.link3);
      settitle4(res.data.data.title4);
      setlink4(res.data.data.link4);
      settitle5(res.data.data.title5);
      setlink5(res.data.data.link5);
      settitle6(res.data.data.title6);
      setlink6(res.data.data.link6);
    });
  }, []);

  const setInformation = () => {
    const object = {
      title1,
      link1,
      title2,
      link2,
      title3,
      link3,
      title4,
      link4,
      title5,
      link5,
      title6,
      link6,
    };

    axios.post("http://103.215.223.142:8000/api/nav", object).then((res) => {
      setSuccessModal(!successModal);
    });
  };

  return (
    <>
      <CForm
        action=""
        method="post"
        encType="multipart/form-data"
        className="form-horizontal"
      >
        <CCard>
          <CCardHeader>لینک‌های هدر</CCardHeader>
          <CCardBody>
            <CFormGroup row>
              <CCol xs="12" md="6">
                <CRow>
                  <CCol md="2">
                    <CLabel htmlFor="title1">عنوان 1</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="title1"
                      value={title1}
                      onChange={settitle1Value}
                      required
                    />
                  </CCol>
                </CRow>
              </CCol>
              <CCol xs="12" md="6">
                <CRow>
                  <CCol md="2">
                    <CLabel htmlFor="link1">لینک 1</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="link1"
                      value={link1}
                      onChange={setlink1Value}
                      required
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol xs="12" md="6">
                <CRow>
                  <CCol md="2">
                    <CLabel htmlFor="title2">عنوان 2</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="title2"
                      value={title2}
                      onChange={settitle2Value}
                      required
                    />
                  </CCol>
                </CRow>
              </CCol>
              <CCol xs="12" md="6">
                <CRow>
                  <CCol md="2">
                    <CLabel htmlFor="link2">لینک 2</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="link2"
                      value={link2}
                      onChange={setlink2Value}
                      required
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol xs="12" md="6">
                <CRow>
                  <CCol md="2">
                    <CLabel htmlFor="title3">عنوان 3</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="title3"
                      value={title3}
                      onChange={settitle3Value}
                      required
                    />
                  </CCol>
                </CRow>
              </CCol>
              <CCol xs="12" md="6">
                <CRow>
                  <CCol md="2">
                    <CLabel htmlFor="link3">لینک 3</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="link3"
                      value={link3}
                      onChange={setlink3Value}
                      required
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol xs="12" md="6">
                <CRow>
                  <CCol md="2">
                    <CLabel htmlFor="title4">عنوان 4</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="title4"
                      value={title4}
                      onChange={settitle4Value}
                      required
                    />
                  </CCol>
                </CRow>
              </CCol>
              <CCol xs="12" md="6">
                <CRow>
                  <CCol md="2">
                    <CLabel htmlFor="link4">لینک 4</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="link4"
                      value={link4}
                      onChange={setlink4Value}
                      required
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol xs="12" md="6">
                <CRow>
                  <CCol md="2">
                    <CLabel htmlFor="title5">عنوان 5</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="title5"
                      value={title5}
                      onChange={settitle5Value}
                      required
                    />
                  </CCol>
                </CRow>
              </CCol>
              <CCol xs="12" md="6">
                <CRow>
                  <CCol md="2">
                    <CLabel htmlFor="link5">لینک 5</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="link5"
                      value={link5}
                      onChange={setlink5Value}
                      required
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol xs="12" md="6">
                <CRow>
                  <CCol md="2">
                    <CLabel htmlFor="title5">عنوان 6</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="title6"
                      value={title6}
                      onChange={settitle6Value}
                      required
                    />
                  </CCol>
                </CRow>
              </CCol>
              <CCol xs="12" md="6">
                <CRow>
                  <CCol md="2">
                    <CLabel htmlFor="link6">لینک 6</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <CInput
                      id="link6"
                      value={link6}
                      onChange={setlink6Value}
                      required
                    />
                  </CCol>
                </CRow>
              </CCol>
            </CFormGroup>
          </CCardBody>
          <CCardFooter className="d-flex justify-content-end">
            <CButton size="md" color="primary" onClick={setInformation}>
              <CIcon name="cil-scrubber" /> ذخیره
            </CButton>
          </CCardFooter>
        </CCard>
      </CForm>

      <CModal
        show={successModal}
        onClose={() => setSuccessModal(!successModal)}
        color="success"
      >
        <CModalHeader closeButton />
        <CModalBody>تغییرات با موفقیت انجام شد!</CModalBody>
        <CModalFooter>
          <CButton
            color="success"
            onClick={() => setSuccessModal(!successModal)}
          >
            تایید
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Footer;
