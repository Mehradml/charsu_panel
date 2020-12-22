import React from "react";
import CIcon from "@coreui/icons-react";

export default [
  {
    _tag: "CSidebarNavDropdown",
    name: "صفحه اول",
    route: "/base",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "عکس های هدر",
        to: "/home/sliders",
        icon: "cil-drop",
      },
      {
        _tag: "CSidebarNavItem",
        name: "متن‌ها",
        to: "/home/texts",
        icon: "cil-drop",
      },
      {
        _tag: "CSidebarNavItem",
        name: "پروژه‌ها",
        to: "/home/projects",
        icon: "cil-drop",
      },
      {
        _tag: "CSidebarNavItem",
        name: "دوره‌های مجازی",
        to: "/home/courses",
        icon: "cil-drop",
      },
      {
        _tag: "CSidebarNavItem",
        name: "محصولات",
        to: "/home/products",
        icon: "cil-drop",
      },
      {
        _tag: "CSidebarNavItem",
        name: "دسته بندی محصولات",
        to: "/home/product-category",
        icon: "cil-drop",
      },
      {
        _tag: "CSidebarNavItem",
        name: "اخبار و مقالات",
        to: "/home/news",
        icon: "cil-drop",
      },
    ],
  },


  {
    _tag: "CSidebarNavDropdown",
    name: "صفحه درباره ما",
    route: "/base",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "گواهینامه‌ها",
        to: "/about-us/certificates",
        icon: "cil-drop",
      },
      {
        _tag: "CSidebarNavItem",
        name: "لوح تقدیر ها",
        to: "/about-us/appreciation",
        icon: "cil-drop",
      },
      {
        _tag: "CSidebarNavItem",
        name: "انجمن‌ها",
        to: "/about-us/community",
        icon: "cil-drop",
      },
      {
        _tag: "CSidebarNavItem",
        name: "همکاری با شرکت‌ها",
        to: "/about-us/companies",
        icon: "cil-drop",
      }
    ]
  },
  {
    _tag: "CSidebarNavItem",
    name: "ارتباط با ما",
    to: "/contact-us/contact-us",
    icon: "cil-drop",
  },
];
