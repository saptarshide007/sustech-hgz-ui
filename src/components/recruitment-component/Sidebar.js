import { useState } from "react";
import { FaTimes, FaBars, FaMicrosoft, FaBahai } from "react-icons/fa";
import styles from "./Sidebar.Module.css";

const Sidebar = () => {
  const [showSideBar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    setSideBar(!showSideBar);
  };
  const menuItems = ["Dashboard", "Job Creation"];
  return (
    <div class={`page-wrapper chiller-theme ${showSideBar ? "toggled" : ""}`}>
      <a
        onClick={toggleSideBar}
        id="show-sidebar"
        class="btn btn-sm btn-dark"
        href="#"
      >
        <i class="fas fa-bars"></i>
        <FaBars />
      </a>
      <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
          <div class="sidebar-brand">
            <a href="#">MENU</a>
            <div id="close-sidebar">
              <FaTimes onClick={toggleSideBar} />
            </div>
          </div>
          <div class="sidebar-menu">
            <ul>
              {menuItems.map((menuItem) => {
                return (
                  <li class="sidebar-dropdown">
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
