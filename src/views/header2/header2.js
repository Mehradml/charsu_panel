// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   CButton,
//   CCard,
//   CCardBody,
//   CCardFooter,
//   CCardHeader,
//   CCol,
//   CForm,
//   CFormGroup,
//   CTextarea,
//   CInput,
//   CLabel,
//   CRow,
//   CModal,
//   CModalBody,
//   CModalFooter,
//   CModalHeader,
//   CModalTitle,
// } from "@coreui/react";
// import CIcon from "@coreui/icons-react";
// import HeaderLink from "src/components/header-link";

// const Header = () => {
//   const [data, setdata] = useState("");
//   const [path, setpath] = useState("");
//   const [id, setid] = useState("");
//   const [title, settitle] = useState("");
//   const [link, setlink] = useState("");
//   const [successModal, setSuccessModal] = useState(false);
//   const [deleteModal, setDeleteModal] = useState(false);
//   const [deleteId, setdeleteId] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:8000/api/link").then((res) => {
//       setdata(res.data.data);
//     });
//   }, []);

//   const editItem = (id) => {
//     const object = data.find((item) => item.id === id);
//     settitle(object.title);
//     setlink(object.link);
//     setid(object.id);
//   };

//   const addItem = () => {
//     const object = { title, link, id };
//     axios.post("http://localhost:8000/api/link", object).then((res) => {
//       const temp = [...data];
//       if (id != "") {
//         const index = temp.findIndex((item) => item.id == object.id);
//         temp[index] = object;
//         setdata(temp);
//       } else {
//         let object = { title, link };
//         temp.push(object);
//         setdata(temp);
//       }
//       settitle("");
//       setlink("");
//       setid("");
//     });
//   };

//   const setTitleValue = (e) => {
//     settitle(e.target.value);
//   };
//   const setLinkValue = (e) => {
//     setlink(e.target.value);
//   };

//   const removeId = (id) => {
//     setdeleteId(id);
//     setDeleteModal(!deleteModal);
//   };

//   const removeCard = () => {
//     axios.delete(`http://localhost:8000/api/link/${deleteId}`).then((res) => {
//       let temp = [...data];
//       temp.splice(
//         temp.findIndex((item) => item.id == id),
//         1
//       );
//       setdata(temp);
//       setDeleteModal(!deleteModal);
//     });
//   };
//   return (
//     <>
//       <CForm
//         action=""
//         method="post"
//         encType="multipart/form-data"
//         className="form-horizontal"
//       >
//         <CCol xs="12" lg="8" className="mx-lg-auto">
//           <CCard>
//             <CCardHeader>لینک جدید</CCardHeader>
//             <CCardBody>
//               <CFormGroup row>
//                 <CCol md="3">
//                   <CLabel htmlFor="title2">عنوان</CLabel>
//                 </CCol>
//                 <CCol xs="12" md="9">
//                   <CInput
//                     id="title2"
//                     placeholder="عنوان"
//                     value={title}
//                     onChange={setTitleValue}
//                     required
//                   />
//                 </CCol>
//               </CFormGroup>
//               <CFormGroup row>
//                 <CCol md="3">
//                   <CLabel htmlFor="link">لینک</CLabel>
//                 </CCol>
//                 <CCol xs="12" md="9">
//                   <CInput
//                     id="link"
//                     placeholder="لینک"
//                     value={link}
//                     onChange={setLinkValue}
//                     required
//                   />
//                 </CCol>
//               </CFormGroup>
//             </CCardBody>
//             <CCardFooter className="d-flex justify-content-end">
//               <CButton size="md" color="primary" onClick={addItem}>
//                 <CIcon name="cil-scrubber" />{" "}
//                 {id && id !== "" ? "ویرایش لینک" : "ایجاد لینک"}
//               </CButton>
//             </CCardFooter>
//           </CCard>
//         </CCol>
//       </CForm>

//       <CCard>
//         <CCardHeader>لینک‌های اضافه شده</CCardHeader>
//         <CRow className="p-3">
//           {data &&
//             data.map((item) => (
//               <HeaderLink
//                 objectData={item}
//                 removeId={removeId}
//                 editItem={editItem}
//               />
//             ))}
//         </CRow>
//       </CCard>
//       <CModal
//         show={successModal}
//         onClose={() => setSuccessModal(!successModal)}
//         color="success"
//       >
//         <CModalHeader closeButton />
//         <CModalBody>تغییرات با موفقیت انجام شد!</CModalBody>
//         <CModalFooter>
//           <CButton
//             color="success"
//             onClick={() => setSuccessModal(!successModal)}
//           >
//             تایید
//           </CButton>
//         </CModalFooter>
//       </CModal>
//       <CModal
//         show={deleteModal}
//         onClose={() => setDeleteModal(!deleteModal)}
//         color="danger"
//       >
//         <CModalHeader closeButton />
//         <CModalBody>آیا از پاک کردن آیتم مطمئن هستید؟</CModalBody>
//         <CModalFooter>
//           <CButton color="danger" onClick={removeCard}>
//             پاک کردن
//           </CButton>
//           <CButton
//             color="secondary"
//             onClick={() => setDeleteModal(!deleteModal)}
//           >
//             بازگشت
//           </CButton>
//         </CModalFooter>
//       </CModal>
//     </>
//   );
// };
// export default Header;
