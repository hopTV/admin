// import Title from "antd/lib/typography/Title";
import React from "react";

import "./status.css";

const Status = (props) => {
  const { icon, count, title } = props;

  return (
    <div className="status-dashboard">
      <div className="status-dashboard-icon">
        <i className={icon}></i>
      </div>
      <div className="statu-dashboard-info">
        <h4>{count}</h4>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default Status;
