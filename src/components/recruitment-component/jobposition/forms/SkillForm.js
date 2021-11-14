import React, { useState } from "react";
import SelectorTypeForm from "./SelectorTypeForm";

let i = 0;
const SkillForm = (props) => {
  const addNewSkillsHandler = () => {
    props.addSkill((prevSkill) => {
      i = i + 1;
      return [
        {
          label: "skill" + i,
          value: "skill" + i,
          mandatory: false,
          weight: 0,
        },
        ...prevSkill,
      ];
    });
  };
  return (
    <React.Fragment>
      <SelectorTypeForm
        title="Select Skills"
        list={props.skillList}
        addHandler={addNewSkillsHandler}
      />
    </React.Fragment>
  );
};
export default SkillForm;
