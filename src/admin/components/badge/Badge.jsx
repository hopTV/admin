import React from "react";
import "./badge.css";

const Badge = (props) => {
  const { type, content } = props;

//   console;
  return <span className={`badge badge-${type}`}>{content}</span>;
};

export default Badge;
