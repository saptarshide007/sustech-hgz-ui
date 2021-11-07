import { useState } from "react";
import { FaTimes, FaBars, FaMicrosoft, FaBahai } from "react-icons/fa";
import styles from "./Sidebar.module.css";

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
  console.log(props.permissionList);
  return (
    <ul className={`${styles["side-bar-list"]}`}>
      {props.permissionList.map((permission) => (
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
        href="#"
        className={`${styles["side-bar-link"]}`}
        onClick={() => false}
      >
        <span
          className={`${styles["side-bar-link-icon"]} ${
            props.expanded && `${styles["side-link-expanded"]}`
          }`}
        >
          <div>
            <Icon />
          </div>
        </span>
        <div className={`${styles["skeleton"]}`}>
          <span>{props.sideBarItem}</span>
        </div>
      </a>
    </li>
  );
}

export default Sidebar;
