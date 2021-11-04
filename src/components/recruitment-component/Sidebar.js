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
          <ExampleSkeleton size="1.5rem" color="#cfcfcf" chars="5" lines="1" />
        </div>
      </div>
      <ul className={`${styles["side-bar-list"]}`}>
        <ExampleSideBarLink chars="4" />
        <ExampleSideBarLink chars="9" />
        <ExampleSideBarLink chars="7" />
        <ExampleSideBarLink chars="8" />
        <ExampleSideBarLink chars="8" />
        <ExampleSideBarLink chars="5" />
        <ExampleSideBarLink chars="8" />
        <ExampleSideBarLink chars="9" />
        <ExampleSideBarLink chars="8" />
        <ExampleSideBarLink chars="4" />
      </ul>
    </aside>
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
  const size = props.size;
  const color = props.color;
  const chars = props.chars;
  const lines = props.lines;
  const width = props.width;

  return (
    <div
      className={`${styles["skeleton"]}`}
      style={{
        "--size": size,
        "--color": color,
        "--chars": chars,
        "--lines": lines,
        width: width,
      }}
    ></div>
  );
}
function ExampleSideBarLink(props) {
  const chars = props.chars;

  return (
    <li>
      <a
        href="#"
        className={`${styles["side-bar-link"]}`}
        onClick={() => false}
      >
        <span className={`${styles["side-bar-link-icon"]}`}>
          <ExampleIcon size="16px" color="#f2f2f2" />
        </span>
        <ExampleSkeleton color="#f2f2f2" chars={chars} lines="1" />
      </a>
    </li>
  );
}

export default Sidebar;
