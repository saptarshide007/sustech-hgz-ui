import Sidebar from "./Sidebar";
import React, { useState } from "react";
import Topbar from "./Topbar";
import styles from "./Recruitment.module.css"
const Recruitment = (props) => {
  const [expandOffcanvas, setExpandOffcanvas] = useState(false);
  const permissionList = ["Dashboard", "NewRequisition", "Configure"];
  return (
    <React.Fragment>
    <div className={`${styles["example-offcanvas-container"]}`}>
        <Sidebar expanded={expandOffcanvas} permissionList={permissionList} />
      <div className={`${styles["example-offcanvas-screen"]}`}>
          <Topbar
            hamburgerActive={expandOffcanvas}
            hamburgerClick={() => {
              setExpandOffcanvas(!expandOffcanvas);
            }}
          />
          <div className={`${styles["children"]}`}>
          {props.children}
          </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default Recruitment;
