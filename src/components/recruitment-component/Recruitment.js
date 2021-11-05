import "./Recruitment.css";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Topbar from "./Topbar";

const Recruitment = () => {
  const menuItems = ["Dashboard", "E-commerce"];
  const [expandOffcanvas, setExpandOffcanvas] = useState(false);

  return (
    <div className="example-offcanvas-container">
      <Sidebar expanded={expandOffcanvas} />
      <div className="example-offcanvas-screen">
        <Topbar
          hamburgerActive={expandOffcanvas}
          hamburgerClick={() => {
            setExpandOffcanvas(!expandOffcanvas);
          }}
        />
      </div>
    </div>
  );
};

export default Recruitment;
