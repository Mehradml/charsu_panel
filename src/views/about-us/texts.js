import React, { useEffect, useState, createRef } from "react";
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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const AboutUsTexts = () => {
  return (
    <>
      <CForm
        action=""
        method="post"
        encType="multipart/form-data"
        className="form-horizontal"
      >
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
                    />
                  </CCol>
                </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="6">
            <CCard>
              <CCardHeader>سوگند نامه مهندسی</CCardHeader>
              <CCardBody>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="title">عنوان</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput id="title" name="title" placeholder="عنوان" />
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="oath-text">متن</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CTextarea
                      name="oath-text"
                      id="oath-text"
                      rows="9"
                      placeholder="متن"
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
                    />
                  </CCol>
                </CFormGroup>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="primary">
                  <CIcon name="cil-scrubber" /> Submit
                </CButton>
                <CButton type="reset" size="sm" color="danger">
                  <CIcon name="cil-ban" /> Reset
                </CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CForm>
    </>
  );
};

export default AboutUsTexts;
