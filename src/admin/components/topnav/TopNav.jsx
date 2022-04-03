import React, { useState } from "react";

import "./topnav.css";

import { Link } from "react-router-dom";

import Dropdown from "../dropdown/Dropdown";

import Theme from "../thememenu/Theme";

// import ThemeMenu from "../thememenu/ThemeMenu";

import user_image from "../../assets/images/account.jpg";

import user_menu from "../../assets/JsonData/user_menus.json";

// import Sidebar from "../sidebar/Sidebar";

import AppAction from "../../redux/action/AppAction";

import { useDispatch, useSelector } from "react-redux";

const curr_user = {
  display_name: "hợp trần",
  image: user_image,
};

const renderUserToggle = (user) => (
  <div className="topnav-right-user">
    <div className="topnav-right-user--image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav-right-user--name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to={item.path} key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const Topnav = () => {
  const dispath = useDispatch();
  const appReducer = useSelector((state) => state.AppReducers);

  const handleClickMenu = () => {
    dispath(AppAction.setMenu());
  };

  return (
    <div className="topnav">
      <div className="dropdown-sidebar">
        {/* <Sidebar isMenu={isMenu} /> */}
        {!appReducer.isOpenMenu && (
          <i className="bx bx-menu" onClick={() => handleClickMenu()}></i>
        )}
      </div>
      <div className="topnav-search">
        <input type="text" placeholder="Search..." />
        <i className="bx bx-search"></i>
      </div>
      <div className="topnav-right">
        <div className="topnav-right-item">
          {/* dropdown here */}
          <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="topnav-right-item">
          <Dropdown icon="bx bx-bell" badge="12" />
        </div>
        <div className="topnav__right-item">
          <Theme />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
