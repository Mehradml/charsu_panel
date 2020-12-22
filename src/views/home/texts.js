import React, { useEffect, useState, createRef } from "react";
import classNames from "classnames";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
import { rgbToHex } from "@coreui/utils";
import { DocsLink } from "src/reusable";
import CIcon from "@coreui/icons-react";
import axios from "axios";

const HomeTexts = () => {
  const [headerTitle1, setheaderTitle1] = useState("");
  const [headerTitle2, setheaderTitle2] = useState("");
  const [headerText, setheaderText] = useState("");
  const [projectsTitle1, setprojectsTitle1] = useState("");
  const [projectsTitle2, setprojectsTitle2] = useState("");
  const [projectsText, setprojectsText] = useState("");
  const [coursesTitle1, setcoursesTitle1] = useState("");
  const [coursesTitle2, setcoursesTitle2] = useState("");
  const [productsTitle1, setproductsTitle1] = useState("");
  const [productsTitle2, setproductsTitle2] = useState("");
  const [newsTitle, setnewsTitle] = useState("");
  const [data, setdata] = useState("");
  const [id, setid] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  useEffect(() => {
    axios.get("http://103.215.223.142:8000/api/index").then((res) => {
      setheaderTitle1(res.data.data.header_title1);
      setheaderTitle2(res.data.data.header_title2);
      setheaderText(res.data.data.header_text);
      setprojectsTitle1(res.data.data.projects_title1);
      setprojectsTitle2(res.data.data.projects_title2);
      setprojectsText(res.data.data.projects_text);
      setcoursesTitle1(res.data.data.courses_title1);
      setcoursesTitle2(res.data.data.courses_title2);
      setproductsTitle1(res.data.data.products_title1);
      setproductsTitle2(res.data.data.products_title2);
      setnewsTitle(res.data.data.news_title);
    });
  }, []);

  const setTexts = () => {
    let formData = {
      header_title1: headerTitle1,
      header_title2: headerTitle2,
      header_text: headerText,
      projects_title1: projectsTitle1,
      projects_title2: projectsTitle2,
      projects_text: projectsText,
      courses_title1: coursesTitle1,
      courses_title2: coursesTitle2,
      products_title1: productsTitle1,
      products_title2: productsTitle2,
      news_title: newsTitle,
    };
    axios.post("http://103.215.223.142:8000/api/index", formData).then((res) => {
      setSuccessModal(!successModal);
    });
  };

  const setHeaderTitle1Value = (e) => {
    setheaderTitle1(e.target.value);
  };
  const setHeaderTitle2Value = (e) => {
    setheaderTitle2(e.target.value);
  };
  const setHeaderText = (e) => {
    setheaderText(e.target.value);
  };
  const setProjectsTitle1 = (e) => {
    setprojectsTitle1(e.target.value);
  };
  const setProjectsTitle2 = (e) => {
    setprojectsTitle2(e.target.value);
  };
  const setProjectsText = (e) => {
    setprojectsText(e.target.value);
  };
  const setCoursesTitle1 = (e) => {
    setcoursesTitle1(e.target.value);
  };
  const setCoursesTitle2 = (e) => {
    setcoursesTitle2(e.target.value);
  };
  const setProductsTitle1 = (e) => {
    setproductsTitle1(e.target.value);
  };
  const setProductsTitle2 = (e) => {
    setproductsTitle2(e.target.value);
  };
  const setNewsTitle = (e) => {
    setnewsTitle(e.target.value);
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
          <CCardBody>
            <CRow>
              <CCol xs="12" sm="6">
                <CCard>
                  <CCardHeader>هدر صفحه</CCardHeader>
                  <CCardBody>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="header-title1">عنوان اول</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="header-title1"
                          name="header-title1"
                          placeholder="عنوان اول"
                          onChange={setHeaderTitle1Value}
                          value={headerTitle1}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="header-title2">عنوان دوم</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="header-title2"
                          name="header-title2"
                          placeholder="عنوان دوم"
                          onChange={setHeaderTitle2Value}
                          value={headerTitle2}
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="header-text">متن</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CTextarea
                          name="header-text"
                          id="header-text"
                          rows="9"
                          placeholder="متن"
                          onChange={setHeaderText}
                          value={headerText}
                        />
                      </CCol>
                    </CFormGroup>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs="12" sm="6">
                <CCard>
                  <CCardHeader>پروژه ها</CCardHeader>
                  <CCardBody>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="projects-title1">عنوان اول</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="projects-title1"
                          name="projects-title1"
                          placeholder="عنوان اول"
                          onChange={setProjectsTitle1}
                          value={projectsTitle1}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="projects-title2">عنوان دوم</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="projects-title2"
                          name="projects-title2"
                          placeholder="عنوان دوم"
                          onChange={setProjectsTitle2}
                          value={projectsTitle2}
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="projects-text">متن</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CTextarea
                          name="projects-text"
                          id="projects-text"
                          rows="9"
                          placeholder="متن"
                          onChange={setProjectsText}
                          value={projectsText}
                        />
                      </CCol>
                    </CFormGroup>
                  </CCardBody>
                </CCard>
              </CCol>{" "}
              <CCol xs="12" sm="6">
                <CCard>
                  <CCardHeader>دوره‌های آموزشی</CCardHeader>
                  <CCardBody>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="courses-title1">عنوان اول</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="courses-title1"
                          name="courses-title1"
                          placeholder="عنوان اول"
                          onChange={setCoursesTitle1}
                          value={coursesTitle1}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="courses-title2">عنوان دوم</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="courses-title2"
                          name="courses-title2"
                          placeholder="عنوان دوم"
                          onChange={setCoursesTitle2}
                          value={coursesTitle2}
                        />
                      </CCol>
                    </CFormGroup>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs="12" sm="6">
                <CCard>
                  <CCardHeader>محصولات</CCardHeader>
                  <CCardBody>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="products-title1">عنوان اول</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="products-title1"
                          name="products-title1"
                          placeholder="عنوان اول"
                          onChange={setProductsTitle1}
                          value={productsTitle1}
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="products-title2">عنوان دوم</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="products-title2"
                          name="products-title2"
                          placeholder="عنوان دوم"
                          onChange={setProductsTitle2}
                          value={productsTitle2}
                        />
                      </CCol>
                    </CFormGroup>
                  </CCardBody>
                </CCard>
              </CCol>
              <CCol xs="12" sm="6">
                <CCard>
                  <CCardHeader>اخبار و مقالات</CCardHeader>
                  <CCardBody>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="news-title">عنوان</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput
                          id="news-title"
                          name="news-title"
                          placeholder="عنوان"
                          onChange={setNewsTitle}
                          value={newsTitle}
                        />
                      </CCol>
                    </CFormGroup>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CCardBody>
          <CCardFooter>
            <CRow className="justify-content-end">
              <CButton
                size="md"
                color="primary"
                onClick={setTexts}
                className="mx-3"
              >
                <CIcon name="cil-scrubber" /> ثبت تغییرات
              </CButton>
            </CRow>
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

export default HomeTexts;
