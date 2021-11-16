import Sidebar from "./Sidebar";
import React, { useState } from "react";
import CreateAppList from "./create/CreateAppList";
import Topbar from "./Topbar";
import { Zoom, Fade, Roll } from "react-reveal";
import "./Recruitment.css"
const Recruitment = () => {
  const [expandOffcanvas, setExpandOffcanvas] = useState(false);
  const permissionList = ["Dashboard", "Create"];
  return (
    <div className="example-offcanvas-container">
      <Fade left>
        <Sidebar expanded={expandOffcanvas} permissionList={permissionList} />
      </Fade>
      <div className="example-offcanvas-screen">
        <Fade top>
          <Topbar
            hamburgerActive={expandOffcanvas}
            hamburgerClick={() => {
              setExpandOffcanvas(!expandOffcanvas);
            }}
          />
          
        </Fade>
        <CreateAppList/>
      </div>
      
    </div>
  );
};

export default Recruitment;
