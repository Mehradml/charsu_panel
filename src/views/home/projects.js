import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
  CLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle 
} from "@coreui/react";
import ProjectCart from "../../components/project-cart";
import CIcon from "@coreui/icons-react";

const HomeProjects = () => {
  const [data, setdata] = useState("");
  const [path, setpath] = useState("");
  const [id, setid] = useState("");
  const [title, settitle] = useState("");
  const [text, settext] = useState("");
  const [city, setcity] = useState("");
  const [img, setimg] = useState("");
  const [success, setSuccess] = useState(false)
  const [danger, setDanger] = useState(false)
  const [deleteId,setdeleteId]= useState('')

  useEffect(() => {
    axios.get("http://103.215.223.142:8000/api/project").then((res) => {
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

  const editProject = (id) => {
    const object = data.find((item) => item.id === id);
    setcity(object.city);
    settext(object.text);
    settitle(object.title);
    setpath(object.img);
    setid(object.id);
  };

  const addProject = () => {
    const formData = new FormData();
    formData.append("img", img);
    formData.append("title", title);
    formData.append("text", text);
    formData.append("city", city);
    formData.append("id", id);
    axios.post("http://103.215.223.142:8000/api/project", formData).then((res) => {
      const temp = [...data];
      if (id != "") {
        const pathUrl = path == "" ? res.data.data.img : path;
        let project = { title, text, img: pathUrl, city, id };
        const index = temp.findIndex((item) => item.id == project.id);
        temp[index] = project;
        setdata(temp);
      } else {
        let project = { title, text, img: path, city, id: res.data.data.id };
        temp.push(project);
        setdata(temp);
      }
      setcity("");
      settext("");
      settitle("");
      setpath("");
      setid("");
      setimg("");
       setSuccess(!success)
    });
  };

  const setTitleValue = (e) => {
    settitle(e.target.value);
  };

  const setCityValue = (e) => {
    setcity(e.target.value);
  };

  const setTextValue = (e) => {
    settext(e.target.value);
  };

  const removeObject = (id) => {
    setdeleteId(id);
    setDanger(!danger)
  }

  const remove = () => {
    
    axios.delete(`http://103.215.223.142:8000/api/project/${deleteId}`).then((res) => {
      let temp = [...data];
      temp.splice(
        temp.findIndex((item) => item.id == deleteId),
        1
      );
      setdata(temp);
    setDanger(!danger)

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
            <CCardHeader>پروژه جدید</CCardHeader>
            <CCardBody>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="title">عنوان</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="title"
                    placeholder="عنوان"
                    value={title}
                    onChange={setTitleValue}
                    required
                  />
                </CCol>
              </CFormGroup>
              <CFormGroup row>
                <CCol md="3">
                  <CLabel htmlFor="city">شهر</CLabel>
                </CCol>
                <CCol xs="12" md="9">
                  <CInput
                    id="city"
                    name="city"
                    placeholder="شهر"
                    value={city}
                    onChange={setCityValue}
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
                <CCol xs="12" md="4" >
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
              <CButton size="md" color="primary" onClick={addProject}>
                <CIcon name="cil-scrubber" />{" "}
                {id && id !== "" ? "ویرایش پروژه" : "ایجاد پروژه"}
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CForm>

      <CCard>
        <CCardHeader>پروژه‌های اضافه شده</CCardHeader>
        <CRow className="p-3">
          {data &&
            data.map((item) => (
              <ProjectCart
                projectData={item}
                removeObject={removeObject}
                editProject={editProject}
              />
            ))}
        </CRow>
      </CCard>
      <CModal 
              show={success} 
              onClose={() => setSuccess(!success)}
              color="success"
            >
              <CModalHeader closeButton/>
              <CModalBody>
               تغییرات با موفقیت انجام شد!
              </CModalBody>
              <CModalFooter>
                <CButton color="success" onClick={() => setSuccess(!success)}>تایید</CButton>
              </CModalFooter>
            </CModal>
            <CModal 
              show={danger} 
              onClose={() => setDanger(!danger)}
              color="danger"
            >
              <CModalHeader closeButton/>
              <CModalBody>
               آیا از پاک کردن آیتم مطمئن هستید؟
              </CModalBody>
              <CModalFooter>
                <CButton color="danger" onClick={remove}>پاک کردن</CButton>
                <CButton color="secondary" onClick={() => setDanger(!danger)}>بازگشت</CButton>
              </CModalFooter>
            </CModal>
    </>
  );
};

export default HomeProjects;
