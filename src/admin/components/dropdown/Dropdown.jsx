import React, { useRef } from "react";

import "./dropdown.css";

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};

const Dropdown = (props) => {
  const { icon, badge, customToggle, renderItems, contentData } = props;

  const dropdown_toggle = useRef(null);
  const dropdown_content = useRef(null);

  clickOutsideRef(dropdown_content, dropdown_toggle);

  return (
    <div className="dropdown">
      <button ref={dropdown_toggle} className="dropdown-toggle">
        {icon ? <i className={icon}></i> : ""}
        {badge ? <span className="dropdown-toggle-badge">{badge}</span> : ""}
        {customToggle ? customToggle() : ""}
      </button>
      <div ref={dropdown_content} className="dropdown-content">
        {contentData && renderItems
          ? contentData.map((item, index) => renderItems(item, index))
          : ""}
      </div>
    </div>
  );
};

export default Dropdown;
