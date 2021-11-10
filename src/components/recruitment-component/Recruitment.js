@ -3,6 +3,7 @@ import Sidebar from "./Sidebar";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Topbar from "./Topbar";
import {Zoom,Fade,Roll} from 'react-reveal';

const Recruitment = () => {
  const permissionList = [
@ -14,14 +15,18 @@ const Recruitment = () => {
  const [expandOffcanvas, setExpandOffcanvas] = useState(false);
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
      </div>
    </div>
  );
