import { useState } from "react";
import { FaTimes, FaBars, FaMicrosoft, FaBahai } from "react-icons/fa";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  return (
    <aside
      className={`${styles["side-bar"]} ${
        props.expanded && `${styles["side-bar-expanded"]}`
      }`}
    >
      <div className={`${styles["side-bar-title"]}`}>
        <div className={`${styles["side-bar-title-icon"]}`}></div>
        <div className={`${styles["side-bar-title-text"]}`}>
          <ExampleSkeleton title="MENU" />
        </div>
      </div>
      <SideBarItems permissionList={props.permissionList} />
    </aside>
  );
};
const SideBarItems = (props) => {
  console.log(props.permissionList);
  return (
    <ul className={`${styles["side-bar-list"]}`}>
      {props.permissionList.map((permission) => (
        <ExampleSideBarLink sideBarItem={permission} />
      ))}
    </ul>
  );
};
function ExampleIcon(props) {
  const size = props.size;
  const color = props.color;
  return (
    <div>
      <FaMicrosoft />
    </div>
  );
}
function ExampleSkeleton(props) {
  return (
    <div className={`${styles["skeleton"]}`}>
      <span>{props.title}</span>
    </div>
  );
}
function ExampleSideBarLink(props) {
  return (
    <li>
      <a
        href="#"
        className={`${styles["side-bar-link"]}`}
        onClick={() => false}
      >
        <span className={`${styles["side-bar-link-icon"]}`}>
          <div>
            <ExampleIcon />
          </div>
        </span>
        <ExampleSkeleton title={props.sideBarItem} />
      </a>
    </li>
  );
}

export default Sidebar;
