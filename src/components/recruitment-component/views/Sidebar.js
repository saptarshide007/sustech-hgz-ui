import { React, useState } from "react";
import { FaTimes, FaBars, FaMicrosoft, FaBahai } from "react-icons/fa";
import {
  MdOutlineSchool,
  MdAdminPanelSettings,
  MdAssignment,
  MdAssignmentInd,
} from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { AiOutlineForm } from "react-icons/ai";
import styles from "../resources/css/modules/Sidebar.Module.css";
class Post {
  constructor(title, icon, link) {
    this.title = title;
    this.icon = icon;
    this.link = link;
  }
}

const app = [
  new Post("DashBoard", <FaMicrosoft />, "/"),

  new Post("Create Requisition", <IoIosAddCircle />, "/requisition"),

  new Post("Configure", <AiOutlineForm />, "/configure"),
];

const Sidebar = (props) => {
  const hamburgerClick = props.hamburgerClick;
  const hamburgerActive = props.hamburgerActive;
  let hamburgerClassName = "example-hamburger-menu";
  return (
    <aside
      className={`${styles["side-bar"]} ${
        props.expanded && `${styles["side-bar-expanded"]}`
      }`}
    >
      <SideBarItems
        permissionList={props.permissionList}
        expanded={props.expanded}
      />
    </aside>
  );
};
const SideBarItems = (props) => {
  return (
    <ul className={`${styles["side-bar-list"]}`}>
      {app.map((permission) => (
        <SideBarLink sideBarItem={permission} expanded={props.expanded} />
      ))}
    </ul>
  );
};
function Icon(props) {
  const size = props.size;
  const color = props.color;
  return <FaMicrosoft />;
}
function ExampleSkeleton(props) {
  return (
    <div className={`${styles["skeleton"]}`}>
      <span>{props.title}</span>
    </div>
  );
}
function SideBarLink(props) {
  return (
    <li>
      <a
        href={props.sideBarItem.link}
        className={`${styles["side-bar-link"]}`}
        onClick={() => false}
      >
        <span
          className={`${styles["side-bar-link-icon"]} ${
            props.expanded && `${styles["side-link-expanded"]}`
          }`}
        >
          <div>{props.sideBarItem.icon}</div>
        </span>
        <div className={`${styles["skeleton"]}`}>
          <span>{props.sideBarItem.title}</span>
        </div>
      </a>
    </li>
  );
}

export default Sidebar;
