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
  const [googleLink, setgoogleLink] = useState("");
  const [facebookLink, setfacebookLink] = useState("");
  const [linkedInLink, setlinkedInLink] = useState("");
  const [aparatLink, setaparatLink] = useState("");
  const [telegramLink, settelegramLink] = useState("");
  const [instagramLink, setinstagramLink] = useState("");
  const [youtubeLink, setyoutubeLink] = useState("");
  const [twitterLink, settwitterLink] = useState("");
  const [text, settext] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [accessTitle1, setaccessTitle1] = useState("");
  const [accessLink1, setaccessLink1] = useState("");
  const [accessTitle2, setaccessTitle2] = useState("");
  const [accessLink2, setaccessLink2] = useState("");
  const [accessTitle3, setaccessTitle3] = useState("");
  const [accessLink3, setaccessLink3] = useState("");
  const [accessTitle4, setaccessTitle4] = useState("");
  const [accessLink4, setaccessLink4] = useState("");
  const [accessTitle5, setaccessTitle5] = useState("");
  const [accessLink5, setaccessLink5] = useState("");
  const [connectionTitle1, setconnectionTitle1] = useState("");
  const [connectionLink1, setconnectionLink1] = useState("");
  const [connectionTitle2, setconnectionTitle2] = useState("");
  const [connectionLink2, setconnectionLink2] = useState("");
  const [connectionTitle3, setconnectionTitle3] = useState("");
  const [connectionLink3, setconnectionLink3] = useState("");
  const [connectionTitle4, setconnectionTitle4] = useState("");
  const [connectionLink4, setconnectionLink4] = useState("");
  const [connectionTitle5, setconnectionTitle5] = useState("");
  const [connectionLink5, setconnectionLink5] = useState("");

  const setgoogleLinkValue = (e) => {
    setgoogleLink(e.target.value);
  };
  const setfacebookLinkValue = (e) => {
    setfacebookLink(e.target.value);
  };
  const setlinkedInLinkValue = (e) => {
    setlinkedInLink(e.target.value);
  };
  const setaparatLinkValue = (e) => {
    setaparatLink(e.target.value);
  };
  const settelegramLinkValue = (e) => {
    settelegramLink(e.target.value);
  };
  const setinstagramLinkValue = (e) => {
    setinstagramLink(e.target.value);
  };
  const setyoutubeLinkValue = (e) => {
    setyoutubeLink(e.target.value);
  };
  const settwitterLinkValue = (e) => {
    settwitterLink(e.target.value);
  };
  const settextValue = (e) => {
    settext(e.target.value);
  };
  const setemailValue = (e) => {
    setemail(e.target.value);
  };
  const setphoneValue = (e) => {
    setphone(e.target.value);
  };
  const setaccessTitle1Value = (e) => {
    setaccessTitle1(e.target.value);
  };
  const setaccessLink1Value = (e) => {
    setaccessLink1(e.target.value);
  };
  const setaccessTitle2Value = (e) => {
    setaccessTitle2(e.target.value);
  };
  const setaccessLink2Value = (e) => {
    setaccessLink2(e.target.value);
  };
  const setaccessTitle3Value = (e) => {
    setaccessTitle3(e.target.value);
  };
  const setaccessLink3Value = (e) => {
    setaccessLink3(e.target.value);
  };
  const setaccessTitle4Value = (e) => {
    setaccessTitle4(e.target.value);
  };
  const setaccessLink4Value = (e) => {
    setaccessLink4(e.target.value);
  };
  const setaccessTitle5Value = (e) => {
    setaccessTitle5(e.target.value);
  };
  const setaccessLink5Value = (e) => {
    setaccessLink5(e.target.value);
  };
  const setconnectionTitle1Value = (e) => {
    setconnectionTitle1(e.target.value);
  };
  const setconnectionLink1Value = (e) => {
    setconnectionLink1(e.target.value);
  };
  const setconnectionTitle2Value = (e) => {
    setconnectionTitle2(e.target.value);
  };
  const setconnectionLink2Value = (e) => {
    setconnectionLink2(e.target.value);
  };
  const setconnectionTitle3Value = (e) => {
    setconnectionTitle3(e.target.value);
  };
  const setconnectionLink3Value = (e) => {
    setconnectionLink3(e.target.value);
  };
  const setconnectionTitle4Value = (e) => {
    setconnectionTitle4(e.target.value);
  };
  const setconnectionLink4Value = (e) => {
    setconnectionLink4(e.target.value);
  };
  const setconnectionTitle5Value = (e) => {
    setconnectionTitle5(e.target.value);
  };
  const setconnectionLink5Value = (e) => {
    setconnectionLink5(e.target.value);
  };

  useEffect(() => {
    axios.get("http://103.215.223.142:8000/api/footer").then((res) => {
      setgoogleLink(res.data.data.googleLink);
      setfacebookLink(res.data.data.facebookLink);
      setlinkedInLink(res.data.data.linkedInLink);
      setaparatLink(res.data.data.aparatLink);
      settelegramLink(res.data.data.telegramLink);
      setinstagramLink(res.data.data.instagramLink);
      setyoutubeLink(res.data.data.youtubeLink);
      settwitterLink(res.data.data.twitterLink);
      settext(res.data.data.text);
      setemail(res.data.data.email);
      setphone(res.data.data.phone);
      setaccessTitle1(res.data.data.accessTitle1);
      setaccessLink1(res.data.data.accessLink1);
      setaccessTitle2(res.data.data.accessTitle2);
      setaccessLink2(res.data.data.accessLink2);
      setaccessTitle3(res.data.data.accessTitle3);
      setaccessLink3(res.data.data.accessLink3);
      setaccessTitle4(res.data.data.accessTitle4);
      setaccessLink4(res.data.data.accessLink4);
      setaccessTitle5(res.data.data.accessTitle5);
      setaccessLink5(res.data.data.accessLink5);
      setconnectionTitle1(res.data.data.connectionTitle1);
      setconnectionLink1(res.data.data.connectionLink1);
      setconnectionTitle2(res.data.data.connectionTitle2);
      setconnectionLink2(res.data.data.connectionLink2);
      setconnectionTitle3(res.data.data.connectionTitle3);
      setconnectionLink3(res.data.data.connectionLink3);
      setconnectionTitle4(res.data.data.connectionTitle4);
      setconnectionLink4(res.data.data.connectionLink4);
      setconnectionTitle5(res.data.data.connectionTitle5);
      setconnectionLink5(res.data.data.connectionLink5);
    });
  }, []);

  const setInformation = () => {
    const object = {
      googleLink,
      facebookLink,
      linkedInLink,
      aparatLink,
      telegramLink,
      instagramLink,
      youtubeLink,
      twitterLink,
      text,
      email,
      phone,
      accessTitle1,
      accessLink1,
      accessTitle2,
      accessLink2,
      accessTitle3,
      accessLink3,
      accessTitle4,
      accessLink4,
      accessTitle5,
      accessLink5,
      connectionTitle1,
      connectionLink1,
      connectionTitle2,
      connectionLink2,
      connectionTitle3,
      connectionLink3,
      connectionTitle4,
      connectionLink4,
      connectionTitle5,
      connectionLink5,
    };

    axios.post("http://103.215.223.142:8000/api/footer", object).then((res) => {
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
        <CRow>
          <CCol xs="12">
            <CCard>
              <CCardHeader>مشخصات فوتر</CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs="12" md="12">
                    <CFormGroup row className="justify-content-between">
                      <CCol md="3">
                        <CLabel htmlFor="text">متن فوتر</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CTextarea
                          id="text"
                          value={text}
                          onChange={settextValue}
                          required
                        />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CFormGroup row className="justify-content-between">
                      <CCol md="2">
                        <CLabel htmlFor="email">ایمیل</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="email"
                          value={email}
                          onChange={setemailValue}
                          required
                        />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CFormGroup row className="justify-content-between">
                      <CCol md="2">
                        <CLabel htmlFor="phone">شماره تماس</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="phone"
                          value={phone}
                          onChange={setphoneValue}
                          required
                        />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard>
              <CCardHeader>دسترسی سریع</CCardHeader>
              <CCardBody>
                <CFormGroup row>
                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol md="2">
                        <CLabel htmlFor="accessTitle1">عنوان 1</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="accessTitle1"
                          value={accessTitle1}
                          onChange={setaccessTitle1Value}
                          required
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol md="2">
                        <CLabel htmlFor="accessLink1">لینک 1</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="accessLink1"
                          value={accessLink1}
                          onChange={setaccessLink1Value}
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
                        <CLabel htmlFor="accessTitle2">عنوان 2</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="accessTitle2"
                          value={accessTitle2}
                          onChange={setaccessTitle2Value}
                          required
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol md="2">
                        <CLabel htmlFor="accessLink2">لینک 2</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="accessLink2"
                          value={accessLink2}
                          onChange={setaccessLink2Value}
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
                        <CLabel htmlFor="accessTitle3">عنوان 3</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="accessTitle3"
                          value={accessTitle3}
                          onChange={setaccessTitle3Value}
                          required
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol md="2">
                        <CLabel htmlFor="accessLink3">لینک 3</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="accessLink3"
                          value={accessLink3}
                          onChange={setaccessLink3Value}
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
                        <CLabel htmlFor="accessTitle4">عنوان 4</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="accessTitle4"
                          value={accessTitle4}
                          onChange={setaccessTitle4Value}
                          required
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol md="2">
                        <CLabel htmlFor="accessLink4">لینک 4</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="accessLink4"
                          value={accessLink4}
                          onChange={setaccessLink4Value}
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
                        <CLabel htmlFor="accessTitle5">عنوان 5</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="accessTitle5"
                          value={accessTitle5}
                          onChange={setaccessTitle5Value}
                          required
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol md="2">
                        <CLabel htmlFor="accessLink5">لینک 5</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="accessLink5"
                          value={accessLink5}
                          onChange={setaccessLink5Value}
                          required
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" md="6">
            <CCard>
              <CCardHeader>پیوند‌ها</CCardHeader>

              <CCardBody>
                <CFormGroup row>
                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol md="2">
                        <CLabel htmlFor="connectionTitle1">عنوان 1</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="connectionTitle1"
                          value={connectionTitle1}
                          onChange={setconnectionTitle1Value}
                          required
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol md="2">
                        <CLabel htmlFor="connectionLink1">لینک 1</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="connectionLink1"
                          value={connectionLink1}
                          onChange={setconnectionLink1Value}
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
                        <CLabel htmlFor="connectionTitle2">عنوان 2</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="connectionTitle2"
                          value={connectionTitle2}
                          onChange={setconnectionTitle2Value}
                          required
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol md="2">
                        <CLabel htmlFor="connectionLink2">لینک 2</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="connectionLink2"
                          value={connectionLink2}
                          onChange={setconnectionLink2Value}
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
                        <CLabel htmlFor="connectionTitle3">عنوان 3</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="connectionTitle3"
                          value={connectionTitle3}
                          onChange={setconnectionTitle3Value}
                          required
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol md="2">
                        <CLabel htmlFor="connectionLink3">لینک 3</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="connectionLink3"
                          value={connectionLink3}
                          onChange={setconnectionLink3Value}
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
                        <CLabel htmlFor="connectionTitle4">عنوان 4</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="connectionTitle4"
                          value={connectionTitle4}
                          onChange={setconnectionTitle4Value}
                          required
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol md="2">
                        <CLabel htmlFor="connectionLink4">لینک 4</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="connectionLink4"
                          value={connectionLink4}
                          onChange={setconnectionLink4Value}
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
                        <CLabel htmlFor="connectionTitle5">عنوان 5</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="connectionTitle5"
                          value={connectionTitle5}
                          onChange={setconnectionTitle5Value}
                          required
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CRow>
                      <CCol md="2">
                        <CLabel htmlFor="connectionLink5">لینک 5</CLabel>
                      </CCol>
                      <CCol xs="12" md="10">
                        <CInput
                          id="connectionLink5"
                          value={connectionLink5}
                          onChange={setconnectionLink5Value}
                          required
                        />
                      </CCol>
                    </CRow>
                  </CCol>
                </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12">
            <CCard>
              <CCardHeader>لینک‌های شبکه‌های اجتماعی</CCardHeader>
              <CCardBody>
                <CRow className="justify-content-between">
                  <CCol xs="12" md="6">
                    <CFormGroup row>
                      <CCol md="2">
                        <CLabel htmlFor="googleLink">لینک گوگل پلاس</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="googleLink"
                          value={googleLink}
                          onChange={setgoogleLinkValue}
                          required
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="2">
                        <CLabel htmlFor="facebookLink">لینک فیسبوک</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="facebookLink"
                          value={facebookLink}
                          onChange={setfacebookLinkValue}
                          required
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="2">
                        <CLabel htmlFor="linkedInLink">لینک لینکدین</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="linkedInLink"
                          value={linkedInLink}
                          onChange={setlinkedInLinkValue}
                          required
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="2">
                        <CLabel htmlFor="aparatLink">لینک آپارات</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="aparatLink"
                          value={aparatLink}
                          onChange={setaparatLinkValue}
                          required
                        />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="12" md="6">
                    <CFormGroup row>
                      <CCol md="2">
                        <CLabel htmlFor="telegramLink">لینک تلگرام</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="telegramLink"
                          value={telegramLink}
                          onChange={settelegramLinkValue}
                          required
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="2">
                        <CLabel htmlFor="instagramLink">لینک اینستاگرام</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="instagramLink"
                          value={instagramLink}
                          onChange={setinstagramLinkValue}
                          required
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="2">
                        <CLabel htmlFor="youtubeLink">لینک یوتیوب</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="youtubeLink"
                          value={youtubeLink}
                          onChange={setyoutubeLinkValue}
                          required
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="2">
                        <CLabel htmlFor="twitterLink">لینک توییتر</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="twitterLink"
                          value={twitterLink}
                          onChange={settwitterLinkValue}
                          required
                        />
                      </CCol>
                    </CFormGroup>
                  </CCol>
                </CRow>
              </CCardBody>
              <CCardFooter className="d-flex justify-content-end">
                <CButton size="md" color="primary" onClick={setInformation}>
                  <CIcon name="cil-scrubber" /> ذخیره
                </CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
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
