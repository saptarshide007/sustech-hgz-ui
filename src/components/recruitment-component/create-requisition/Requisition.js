import { ProgressBar } from "react-bootstrap";
import styles from "./css/Requisition.module.css";
import React, { useState } from "react";
import PositionForm from "./forms/PositionForm"

import { ToolTipButton } from "../utility/Button";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Requisition = () => {
  const [activeForm, setActiveForm] = useState(PositionForm.getActive());
  const [activeBtn, setBtnState] = useState([
    PositionForm.hasPrevious(),
    PositionForm.hasNext(),
  ]);
  const [skillList, addSkill] = useState([
    { label: "None", value: "None", mandatory: false, weight: 0 },
  ]);

  const [progress, setProgress] = useState(0);
  const [progressBar, setProgressBar] = useState("warning");
  const toggleFormHandler = (event) => {
    if (event === "NextForm") {
      setActiveForm(PositionForm.getNext());
      setBtnState([PositionForm.hasPrevious(), PositionForm.hasNext()]);
      setProgress(progress + 25);
      if (progress >= 75) setProgressBar("success");
    } else {
      setActiveForm(PositionForm.getPrevious());
      setBtnState([PositionForm.hasPrevious(), PositionForm.hasNext()]);
      setProgress(progress - 25);
      if (progressBar === "success") setProgressBar("warning");
    }
  };
  return (
    <React.Fragment>
      <div style={{ position: "absolute" }}>
        <ToolTipButton
          variant="outline-primary"
          size="lg"
          btnname={<BsFillArrowLeftCircleFill />}
          msg="PreviousForm"
          placement="left"
          onClick={toggleFormHandler}
          active={activeBtn[0]}
        />
        <span style={{ display: "inline-block", width: "1001px" }} />
        <ToolTipButton
          variant="outline-primary"
          size="lg"
          btnname={<BsFillArrowRightCircleFill />}
          msg="NextForm"
          placement="right"
          onClick={toggleFormHandler}
          active={activeBtn[1]}
        />
      </div>
      <div className={`${styles["form-wrapper"]}`}>
        <h4 className={`${styles["page-title"]}`}>Create Job Position</h4>

        <ProgressBar variant={progressBar} animated now={progress} />
        <div className={`${styles["form-card"]}`}>{activeForm}</div>
        <div className={`${styles["nav-form"]}`}></div>
      </div>
    </React.Fragment>
  );
};
export default Requisition;
