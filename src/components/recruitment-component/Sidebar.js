import { useState } from "react";
import { FaTimes, FaBars, FaMicrosoft, FaBahai } from "react-icons/fa";
import styles from "./Sidebar.module.css";

const Sidebar = (props) => {
  const [showSideBar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    setSideBar(!showSideBar);
  };
  return (
    <div
      className={`${styles["page-wrapper"]} ${styles["chiller-theme"]} ${
        showSideBar && `${styles["toggled"]}`
      }`}
    >
      <a
        onClick={toggleSideBar}
        id={`${styles["show-sidebar"]}`}
        class="btn btn-sm btn-dark"
        href="#"
      >
        <FaBars />
      </a>
      <nav id="sidebar" className={`${styles["sidebar-wrapper"]}`}>
        <div className={`${styles["sidebar-content"]}`}>
          <div className={`${styles["sidebar-brand"]}`}>
            <a href="#">MENU</a>
            <div id={`${styles["close-sidebar"]}`}>
              <FaTimes onClick={toggleSideBar} />
            </div>
          </div>
          <div className={`${styles["sidebar-menu"]}`}>
            <ul>
              {props.menuItems.map((menuItem) => {
                return (
                  <li className={`${styles["sidebar-dropdown"]}`}>
                    <a href="#">
                      <i>{getItemIcon(menuItem)}</i>
                      <span>{menuItem}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
const getItemIcon = (item) => {
  if (item === "Dashboard") return <FaMicrosoft />;
  else return <FaBahai />;
};

export default Sidebar;
