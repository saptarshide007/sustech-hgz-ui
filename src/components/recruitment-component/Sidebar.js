import { useState } from "react";
import { FaTimes, FaBars, FaMicrosoft, FaBahai } from "react-icons/fa";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {

  let sideBarClassName = "example-side-bar";

  if (props.expanded) {
    sideBarClassName += " example-side-bar-expanded";
  }

  return (
    <aside className={sideBarClassName}>
      <div className="example-side-bar-title">
        <div className="example-side-bar-title-icon">
        </div>
        <div className="example-side-bar-title-text">
          <ExampleSkeleton size="1.5rem" color="#cfcfcf" chars="5" lines="1" />
        </div>
      </div>
      <ul className="example-side-bar-list">
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
    <i
      className="example-icon"
      style={{
        "--size": size,
        "--color": color,
      }}
    ><FaMicrosoft/></i>
    
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
      className="example-skeleton"
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
      <a href="#" className="example-side-bar-link" onClick={() => false}>
        <span className="example-side-bar-link-icon">
          <ExampleIcon size="16px" color="#f2f2f2" />
        </span>
        <ExampleSkeleton color="#f2f2f2" chars={chars} lines="1" />
      </a>
    </li>
  );
}

export default Sidebar;
