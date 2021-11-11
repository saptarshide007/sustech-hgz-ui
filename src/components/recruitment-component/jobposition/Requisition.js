import { ProgressBar, Stack } from "react-bootstrap";
import styles from "./Requisition.module.css";
import React, { useState } from "react";
import PositionForm from "./class/PositionForm";

import { ToolTipButton } from "../utility/Button";

const Requisition = () => {
  const [activeForm, setActiveForm] = useState(PositionForm.getActive());
  const [activeBtn, setBtnState] = useState([
    PositionForm.hasPrevious(),
    PositionForm.hasNext(),
  ]);

  const [progress, setProgress] = useState(0);
  const [progressBar, setProgressBar] = useState("warning");
  const toggleFormHandler = (event) => {
    if (event.target.innerText === ">") {
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
    <div className={`${styles["form-wrapper"]}`}>
      <ProgressBar variant={progressBar} animated now={progress} />
      <div className={`${styles["form-card"]}`}>{activeForm}</div>
      <div className={`${styles["nav-form"]}`}>
        <Stack direction="horizontal" gap={3} className="col-md-2 mx-auto">
          <ToolTipButton
            variant="primary"
            size="md"
            btnname="<"
            msg="PreviousForm"
            placement="left"
            onClick={toggleFormHandler}
            active={activeBtn[0]}
          />
          <div className="vr" />
          <ToolTipButton
            variant="primary"
            size="md"
            btnname=">"
            msg="NextForm"
            placement="right"
            onClick={toggleFormHandler}
            active={activeBtn[1]}
          />
        </Stack>
      </div>
    </div>
  );
};
export default Requisition;
