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
  CSwitch,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import CourseCart from "src/components/course-cart";

const HomeCourses = () => {
  const [data, setdata] = useState("");
  const [popular, setpopular] = useState(0);
  const [path, setpath] = useState("");
  const [id, setid] = useState("");
  const [title, settitle] = useState("");
  const [text, settext] = useState("");
  const [teacher, setteacher] = useState("");
  const [img, setimg] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setdeleteId] = useState("");

  useEffect(() => {
    axios.get("http://103.215.223.142:8000/api/course").then((res) => {
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

  const editCard = (id) => {
    const object = data.find((item) => item.id === id);
    setteacher(object.teacher);
    settext(object.text);
    settitle(object.title);
    setpath(object.img);
    setid(object.id);
  };

  const addCard = () => {
    const formData = new FormData();
    formData.append("img", img);
    formData.append("title", title);
    formData.append("text", text);
    formData.append("teacher", teacher);
    formData.append("id", id);
    formData.append("popular", popular);
    axios
      .post("http://103.215.223.142:8000/api/course", formData)
      .then((res) => {
        const temp = [...data];
        if (id != "") {
          const pathUrl = path == "" ? res.data.data.img : path;
          let object = { title, text, img: pathUrl, teacher, id };
          const index = temp.findIndex((item) => item.id == object.id);
          temp[index] = object;
          setdata(temp);
        } else {
          let object = {
            title,
            text,
            img: path,
            teacher,
            id: res.data.data.id,
          };
          temp.push(object);
          setdata(temp);
        }
        settext("");
        settitle("");
        setteacher("");
        setpath("");
        setid("");
        setimg("");
        setSuccessModal(!successModal);
      });
  };

  const setTitleValue = (e) => {
    settitle(e.target.value);
  };

  const setPopularValue = (e) => {
    setpopular(popular === 0 ? 1 : 0);
  };

  const setteacherValue = (e) => {
    setteacher(e.target.value);
  };

  const setTextValue = (e) => {
    settext(e.target.value);
  };

  const removeId = (id) => {
    setdeleteId(id);
    setDeleteModal(!deleteModal);
  };

  const removeCard = () => {
    axios
      .delete(`http://103.215.223.142:8000/api/course/${deleteId}`)
      .then((res) => {
        let temp = [...data];
        temp.splice(
          temp.findIndex((item) => item.id == id),
          1
        );
        setdata(temp);
        setDeleteModal(!deleteModal);
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
        <CCol xs="12" lg="8" className="mx-lg-auto">
          <CCard>
            <CCardHeader>دوره جدید</CCardHeader>
            <CCardBody>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="title">عنوان دوره</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="title"
                    name="title"
                    placeholder=" عنوان دوره"
                    value={title}
                    onChange={setTitleValue}
                    required
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="teacher">نام استاد دوره</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="teacher"
                    name="teacher"
                    placeholder="نام استاد"
                    value={teacher}
                    onChange={setteacherValue}
                    required
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="text">متن</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CTextarea
                    name="text"
                    id="text"
                    rows="9"
                    placeholder="متن"
                    value={text}
                    onChange={setTextValue}
                    required
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="popular">دوره محبوب</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CSwitch
                    shape="pill"
                    color="success"
                    value={popular}
                    id="popular"
                    name="popular"
                    onChange={setPopularValue}
                    required
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
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
                <CCol xs="12" md="4">
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
              <CButton size="md" color="primary" onClick={addCard}>
                <CIcon name="cil-scrubber" /> ایجاد دوره
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CForm>
      <CCard>
        <CCardHeader>دوره‌های اضافه شده</CCardHeader>
        <CRow className="p-3">
          {data &&
            data.map((item) => (
              <CourseCart
                objectData={item}
                removeId={removeId}
                editCard={editCard}
              />
            ))}
        </CRow>
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
export default HomeCourses;
