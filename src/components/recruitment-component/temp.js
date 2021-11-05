import "./Recruitment.css";
import Sidebar from "./Sidebar";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Topbar from "./Topbar";

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

function ExampleIcon(props) {
  const size = props.size;
  const color = props.color;

  return (
    <i
      className="example-icon"
      style={{
        "--size": size,
        "--color": color,
      }}
    ></i>
  );
}

function ExampleOffCanvas() {
  const [expandOffcanvas, setExpandOffcanvas] = useState(false);

  return (
    <div className="example-offcanvas-container">
      <Sidebar expanded={expandOffcanvas} />
      <div className="example-offcanvas-screen">
        <Topbar
          hamburgerActive={expandOffcanvas}
          hamburgerClick={() => {
            setExpandOffcanvas(!expandOffcanvas);
          }}
        />
        <ExampleContent />
      </div>
    </div>
  );
}

function ExampleBreadcumbLink(props) {
  const chars = props.chars;

  return (
    <li>
      <a href="#" className="example-breadcrumb-link" onClick={() => false}>
        <ExampleSkeleton size="24px" color="#e2e2e2" chars={chars} lines="1" />
      </a>
    </li>
  );
}

function ExamplePanelContent(props) {
  const titleChars = props.titleChars;
  const lines = props.lines;

  return [
    <ExampleSkeleton color="#e2e2e2" chars={titleChars} lines="1" />,
    <ExampleSkeleton color="#e2e2e2" width="100%" lines={lines} />,
  ];
}

function ExampleCardListItem(props) {
  const titleChars = props.titleChars;
  const lines = props.lines;

  return (
    <div className="example-card-list-item">
      <ExampleSkeleton color="#e2e2e2" chars={titleChars} lines="1" />
      <ExampleSkeleton color="#e2e2e2" width="100%" lines={lines} />
    </div>
  );
}

function ExampleCenterPanelContent() {
  return (
    <div className="example-card-list-items">
      <ExampleCardListItem titleChars="10" chars="20" lines="5" />
      <ExampleCardListItem titleChars="10" chars="20" lines="5" />
      <ExampleCardListItem titleChars="10" chars="20" lines="5" />
      <ExampleCardListItem titleChars="10" chars="20" lines="5" />
      <ExampleCardListItem titleChars="10" chars="20" lines="5" />
      <ExampleCardListItem titleChars="10" chars="20" lines="5" />
      <ExampleCardListItem titleChars="10" chars="20" lines="5" />
    </div>
  );
}

function ExampleContent() {
  return (
    <div className="example-offcanvas-content">
      <ul className="example-breadcrumbs">
        <ExampleBreadcumbLink chars="4" />
        <ExampleBreadcumbLink chars="2" />
        <ExampleBreadcumbLink chars="3" />
      </ul>
      <div className="example-dashboard">
        <div className="example-left-panel">
          <div className="example-card">
            <ExamplePanelContent titleChars="4" lines="5" />
            <ExamplePanelContent titleChars="4" lines="5" />
            <ExamplePanelContent titleChars="4" lines="5" />
          </div>
          <div className="example-card">
            <ExamplePanelContent titleChars="4" lines="5" />
            <ExamplePanelContent titleChars="4" lines="5" />
          </div>
        </div>
        <div className="example-center-panel">
          <div className="example-card example-card-list">
            <ExampleCenterPanelContent />
          </div>
        </div>
        <div className="example-right-panel">
          <div className="example-card">
            <ExamplePanelContent titleChars="4" lines="5" />
            <ExamplePanelContent titleChars="4" lines="5" />
            <ExamplePanelContent titleChars="4" lines="5" />
            <ExamplePanelContent titleChars="4" lines="5" />
            <ExamplePanelContent titleChars="4" lines="5" />
            <ExamplePanelContent titleChars="4" lines="5" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Recruitment = () => {
  const menuItems = ["Dashboard", "E-commerce"];
  return <ExampleOffCanvas />;
};

export default Recruitment;
