@ -1,3 +1,4 @@
import React from "react";
const Topbar = (props) => {
  const hamburgerClick = props.hamburgerClick;
  const hamburgerActive = props.hamburgerActive;
@ -10,11 +11,7 @@ const Topbar = (props) => {

  return (
    <nav className="example-top-bar">
      <button className={hamburgerClassName} onClick={hamburgerClick}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <TopBar hamburgerClassName={hamburgerClassName} hamburgerClick={hamburgerClick}></TopBar>
      <div className="example-search-box">
        <input type="search" className="example-search-input" />
        <button type="button" className="example-search-button">
@ -34,6 +31,17 @@ const Topbar = (props) => {
    </nav>
  );
};

const TopBar=(props)=>{
  return (      
  <React.Fragment>
  <button className={props.hamburgerClassName} onClick={props.hamburgerClick}>
    <span></span>
    <span></span>
    <span></span>
  </button>
  </React.Fragment>);
}
function ExampleTopBarLink() {
  return (
    <a href="#" className="example-top-bar-link" onClick={() => false}>
