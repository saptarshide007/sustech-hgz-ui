import "./Recruitment.css";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Topbar from "./Topbar";

const Recruitment = () => {
  const permissionList = [
    "Dashboard",
    "CreateJob",
    "CreateJobPosition",
    "CreateEmpoyee",
  ];
  const [expandOffcanvas, setExpandOffcanvas] = useState(false);
  return (
    <div className="example-offcanvas-container">
      <Sidebar expanded={expandOffcanvas} permissionList={permissionList} />
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
