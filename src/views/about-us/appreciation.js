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
  CModalTitle 
} from "@coreui/react";
import AppreciationCard from "../../components/appreciation-card";
import CIcon from "@coreui/icons-react";

const Appreciation = () => {
  const [data, setdata] = useState("");
  const [path, setpath] = useState("");
  const [id, setid] = useState("");
  const [title, settitle] = useState("");
  const [img, setimg] = useState("");
  const [successModal, setSuccessModal] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
  const [deleteId,setdeleteId]= useState('')

  useEffect(() => {
    axios.get("http://103.215.223.142:8000/api/appreciation").then((res) => {
      setdata(res.data.data);
    });
  }, []);

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setimg(e.target.files[0]);
      console.log(img);
      setpath(URL.createObjectURL(e.target.files[0]));
    }
  };

  const editItem = (id) => {
    const object = data.find((item) => item.id === id);
    settitle(object.title);
    setpath(object.img);
    setid(object.id);
  };

  const addItem = () => {
    const formData = new FormData();
    formData.append("img", img);
    formData.append("title", title);
    formData.append("id", id);
    axios.post("http://103.215.223.142:8000/api/appreciation", formData).then((res) => {
      const temp = [...data];
      if (id != "") {
        const pathUrl = path == "" ? res.data.data.img : path;
        let object = { title, img: pathUrl, id };
        const index = temp.findIndex((item) => item.id == object.id);
        temp[index] = object;
        setdata(temp);
      } else {
        let object = { title, img: path, id: res.data.data.id };
        temp.push(object);
        setdata(temp);
      }
      settitle("");
      setpath("");
      setid("");
      setimg("");
    });
  };

  const setTitleValue = (e) => {
    settitle(e.target.value);
  };

const removeId =(id)=>{
     setdeleteId(id);
      setDeleteModal(!deleteModal)
  }

  const removeCard = () => {
    axios.delete(`http://103.215.223.142:8000/api/appreciation/${deleteId}`).then((res) => {
      let temp = [...data];
      temp.splice(
        temp.findIndex((item) => item.id == id),
        1
      );
      setdata(temp);
      setDeleteModal(!deleteModal)

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
        <CCol xs="12"  lg="8" className="mx-lg-auto">
          <CCard>
            <CCardHeader>لوح تقدیر جدید</CCardHeader>
            <CCardBody>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="title2">عنوان</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="title2"
                    placeholder="عنوان"
                    value={title}
                    onChange={setTitleValue}
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
                    height="250px"
                    width="100%"
                    className="bordered"
                  />
                </CCol>
              </CFormGroup>
            </CCardBody>
            <CCardFooter className="d-flex justify-content-end">
              <CButton size="md" color="primary" onClick={addItem}>
                <CIcon name="cil-scrubber" />{" "}
                {id && id !== "" ? "ویرایش لوح تقدیر" : "ایجاد لوح تقدیر"}
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CForm>

      <CCard>
        <CCardHeader>لوح تقدیر‌های اضافه شده</CCardHeader>
        <CRow className="p-3">
          {data &&
            data.map((item) => (
              <AppreciationCard
                objectData={item}
                removeId={removeId}
                editItem={editItem}
              />
            ))}
        </CRow>
      </CCard>
      <CModal 
              show={successModal} 
              onClose={() => setSuccessModal(!successModal)}
              color="success"
            >
              <CModalHeader closeButton/>
              <CModalBody>
               تغییرات با موفقیت انجام شد!
              </CModalBody>
              <CModalFooter>
                <CButton color="success" onClick={() => setSuccessModal(!successModal)}>تایید</CButton>
              </CModalFooter>
            </CModal>
            <CModal 
              show={deleteModal} 
              onClose={() =>setDeleteModal(!deleteModal)}
              color="danger"
            >
              <CModalHeader closeButton/>
              <CModalBody>
               آیا از پاک کردن آیتم مطمئن هستید؟
              </CModalBody>
              <CModalFooter>
                <CButton color="danger" onClick={removeCard}>پاک کردن</CButton>
                <CButton color="secondary" onClick={() =>setDeleteModal(!deleteModal)}>بازگشت</CButton>
              </CModalFooter>
            </CModal>
    </>
  );
};
export default Appreciation;
