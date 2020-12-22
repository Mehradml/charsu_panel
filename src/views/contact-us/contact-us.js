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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import MessageCard from "src/components/message-card";

const ContactUs = () => {
  const [id, setid] = useState("");
  const [data, setdata] = useState("");
  const [path, setpath] = useState("");
  const [title1, settitle1] = useState("");
  const [title2, settitle2] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [img, setimg] = useState("");
  const [email, setemail] = useState("");
  const [addressLink, setaddressLink] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [messages, setmessages] = useState([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setdeleteId] = useState("");

  useEffect(() => {
    axios.get("http://103.215.223.142:8000/api/contact").then((res) => {
      settitle1(res.data.data.title1);
      settitle2(res.data.data.title2);
      setphone(res.data.data.phone);
      setaddress(res.data.data.address);
      setemail(res.data.data.email);
      setaddressLink(res.data.data.img_link);
      setimg(res.data.data.img);
    });
    axios.get("http://103.215.223.142:8000/api/message").then((res) => {
      setmessages(res.data.data);
    });
  }, []);

  console.log("messages", messages);
  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setimg(e.target.files[0]);
      console.log(img);
      setpath(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeId = (id) => {
    setdeleteId(id);
    setDeleteModal(!deleteModal);
  };

  const removeCard = () => {
    axios.delete(`http://103.215.223.142:8000/api/message/${deleteId}`).then((res) => {
      let temp = [...messages];
      temp.splice(
        temp.findIndex((item) => item.id == id),
        1
      );
      setmessages(temp);
      setDeleteModal(!deleteModal);
    });
  };


  const setInformation = () => {
    const formData = new FormData();
    formData.append("img", img);
    formData.append("title1", title1);
    formData.append("title2", title2);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("img_link", addressLink);
    formData.append("email", email);
    axios.post("http://103.215.223.142:8000/api/contact", formData).then((res) => {
      setSuccessModal(!successModal);
    });
  };

  const setTitle1Value = (e) => {
    settitle1(e.target.value);
  };
  const setTitle2Value = (e) => {
    settitle2(e.target.value);
  };

  const setAddressValue = (e) => {
    setaddress(e.target.value);
  };

  const setPhoneValue = (e) => {
    setphone(e.target.value);
  };
  const setEmailValue = (e) => {
    setemail(e.target.value);
  };
  const setAddressLinkValue = (e) => {
    setaddressLink(e.target.value);
  };

  return (
    <>
      <CForm
        action=""
        method="post"
        encType="multipart/form-data"
        className="form-horizontal"
      >
        <CCol xs="12">
          <CCard>
            <CCardHeader>اطلاعات صفحه‌ی ارتباط با ما</CCardHeader>
            <CCardBody>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="title1">عنوان اول</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="title1"
                    placeholder="عنوان"
                    value={title1}
                    onChange={setTitle1Value}
                    required
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="title2">عنوان دوم</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="title2"
                    placeholder="عنوان"
                    value={title2}
                    onChange={setTitle2Value}
                    required
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="address">آدرس</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea
                    id="address"
                    name="address"
                    placeholder="شهر"
                    value={address}
                    onChange={setAddressValue}
                    required
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="phone">شماره تماس</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    name="phone"
                    id="phone"
                    rows="9"
                    type="phone"
                    placeholder="09121234567"
                    value={phone}
                    onChange={setPhoneValue}
                    required
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="email">ایمیل</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    type="email"
                    name="email"
                    id="email"
                    rows="9"
                    placeholder="info@charso.ir"
                    value={email}
                    onChange={setEmailValue}
                    required
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="addressLink">لینک آدرس</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="addressLink"
                    placeholder="عنوان"
                    value={addressLink}
                    onChange={setAddressLinkValue}
                    required
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="12"></CCol>
                <CCol md="3">
                  <CLabel htmlFor="img">انتخاب عکس</CLabel>
                </CCol>
                <CCol xs="12" md="4">
                  <CInput
                    type="file"
                    id="img"
                    name="img"
                    onChange={handleChange}
                    className="border-0"
                  />
                </CCol>
                <CCol xs="12" md="3">
                  <img
                    src={path}
                    alt=""
                    height="150px"
                    width="100%"
                    className="bordered"
                  />
                </CCol>
              </CFormGroup>
            </CCardBody>
            <CCardFooter className="d-flex justify-content-end">
              <CButton size="md" color="primary" onClick={setInformation}>
                <CIcon name="cil-scrubber" /> ذخیره
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CForm>
      <CCard>
        <CCardHeader>پیام‌های دریافتی</CCardHeader>
        <CCardBody>
          <CCol xs="12">
            <CRow>
              {messages &&
                messages.map((item) => <MessageCard messageData={item} removeId={removeId}/>)}
            </CRow>
          </CCol>
        </CCardBody>
      </CCard>
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
      <CModal
        show={deleteModal}
        onClose={() => setDeleteModal(!deleteModal)}
        color="danger"
      >
        <CModalHeader closeButton />
        <CModalBody>آیا از پاک کردن آیتم مطمئن هستید؟</CModalBody>
        <CModalFooter>
          <CButton color="danger" onClick={removeCard}>
            پاک کردن
          </CButton>
          <CButton
            color="secondary"
            onClick={() => setDeleteModal(!deleteModal)}
          >
            بازگشت
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default ContactUs;
