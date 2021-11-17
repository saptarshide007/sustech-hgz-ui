import styles from "../resources/css/modules/CreateAppList.module.css";
import { GrCertificate } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import JobTable from "../table-view/JobTable";
import {
  MdOutlineSchool,
  MdAdminPanelSettings,
  MdAssignment,
  MdAssignmentInd,
} from "react-icons/md";
import { IoIosAlbums } from "react-icons/io";
import { Fade } from "react-reveal";
import { Table } from "react-bootstrap";
import React, { useState } from "react";

class Post {
  constructor(title, icon, link) {
    this.title = title;
    this.icon = icon;
    this.link = link;
  }
}

const app = [
  new Post("JobType", <IoIosAlbums />),

  new Post("Skill", <GiSkills />),

  new Post("Qualification", <MdOutlineSchool />),

  new Post("Work Authorization", <MdAdminPanelSettings />),

  new Post("Certification", <GrCertificate />),

  new Post("Roles", <MdAssignment />),
];
const ConfigureData = (props) => {
  const [tabularView, setTabularView] = useState(<React.Fragment />);
  const onClickHandler = (id) => {
    switch (id) {
      case "JobType":
        setTabularView(<JobTable />);
      case "Skill":
        setTabularView(<JobTable />);
      case "Qualification":
        setTabularView(<JobTable />);
      case "Work Authorization":
        setTabularView(<JobTable />);
      case "Certification":
        setTabularView(<JobTable />);
      case "Roles":
        setTabularView(<JobTable />);
    }
  };

  return (
    <Fade>
      <div id={styles.app}>
        <div className={`${styles["wrapper"]}`}>
          {app.map((post) => {
            return (
              <div
                className={`${styles["card"]}`}
                onClick={() => onClickHandler(post.title)}
              >
                <a href={post.link}>
                  <div style={{ color: "black", fontSize: "50px" }}>
                    {post.icon}
                  </div>
                  <label for={post.title}>{post.title}</label>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      {tabularView}
    </Fade>
  );
};

export default ConfigureData;
