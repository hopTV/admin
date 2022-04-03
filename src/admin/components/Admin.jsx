import React, { useEffect } from "react";

import "../assets/boxicons-2.0.7/css/boxicons.min.css";
import "../assets/css/grid.css";
import "../assets/css/index.css";
import "../assets/css/theme.css";

import Sidebar from "./sidebar/Sidebar";
import Routes from "./Routes";
import "../assets/css/index.css";
import TopNav from "./topnav/TopNav";

import { BrowserRouter, Route, useRouteMatch } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import ThemeAction from "../redux/action/ThemeAction";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

document.title = "admin";

const Admin = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("color", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));
    dispatch(ThemeAction.setColor(colorClass));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <Sidebar {...props} />
            <div className="layout-content">
              <TopNav />
              <div className="layout-content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
};

export default Admin;
