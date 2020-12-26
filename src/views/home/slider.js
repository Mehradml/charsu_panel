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
  CInput,
  CLabel,
  CRow,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import CompanyLogo from "../../components/company-logo";
import CIcon from "@coreui/icons-react";

const Companies = () => {
  const [data, setdata] = useState("");
  const [path, setpath] = useState("");
  const [id, setid] = useState("");
  const [img, setimg] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setdeleteId] = useState("");

    useEffect(() => {
        axios.get("http://103.215.223.142:8000/api/slider").then((res) => {
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

    const addItem = () => {
        const formData = new FormData();
        formData.append("img", img);
        formData.append("id", id);
        axios.post("http://103.215.223.142:8000/api/slider", formData).then((res) => {
            const temp = [...data];
            if (id != "") {
                const pathUrl = path == "" ? res.data.data.img : path;
                let object = { img: pathUrl, id };
                const index = temp.findIndex((item) => item.id == object.id);
                temp[index] = object;
                setdata(temp);
            } else {
                let object = { img: path, id: res.data.data.id };
                temp.push(object);
                setdata(temp);
            }
            setpath("");
            setid("");
            setimg("");
        });
    };

  const addItem = () => {
    const formData = new FormData();
    formData.append("img", img);
    formData.append("id", id);
    axios
      .post("http://103.215.223.142:8000/api/slider", formData)
      .then((res) => {
        const temp = [...data];
        if (id != "") {
          const pathUrl = path == "" ? res.data.data.img : path;
          let object = { img: pathUrl, id };
          const index = temp.findIndex((item) => item.id == object.id);
          temp[index] = object;
          setdata(temp);
        } else {
          let object = { img: path, id: res.data.data.id };
          temp.push(object);
          setdata(temp);
        }
        setpath("");
        setid("");
        setimg("");
      });
  };

    const removeCard = () => {
        axios.delete(`http://103.215.223.142:8000/api/slider/${deleteId}`).then((res) => {
            let temp = [...data];
            temp.splice(
                temp.findIndex((item) => item.id == deleteId),
                1
            );
            setdata(temp);
            setDeleteModal(!deleteModal)

  const removeCard = () => {
    axios
      .delete(`http://103.215.223.142:8000/api/slider/${deleteId}`)
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
            <CCardHeader>اسلایدر هدر</CCardHeader>
            <CCardBody>
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
                    height="100px"
                    width="200px"
                    className="bordered"
                  />
                </CCol>
              </CFormGroup>
            </CCardBody>
            <CCardFooter className="d-flex justify-content-end">
              <CButton size="md" color="primary" onClick={addItem}>
                <CIcon name="cil-scrubber" />{" "}
                {id && id !== "" ? "ویرایش عکس" : "ایجاد عکس"}
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CForm>

      <CCard>
        <CCardHeader>عکس ‌های اضافه شده</CCardHeader>
        <CRow className="p-3">
          {data &&
            data.map((item) => (
              <CompanyLogo
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
export default Companies;
