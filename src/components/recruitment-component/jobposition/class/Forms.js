import React, { useState } from "react";
import BasicForm from "../forms/BasicForm";
import SkillForm from "../forms/SkillForm";

const Forms = (props) => {
  const [skillList, setSkills] = useState([
    { label: "None", value: "None", mandatory: false, weight: 0 },
  ]);
  const addNewSkills = (newSkill) => {
    setSkills((prevList) => {
      return [
        { label: "skill", value: "None", mandatory: false, weight: 0 },
        ...prevList,
      ];
    });
  };
  if (props.form === 1)
    return <BasicForm skillList={skillList} addSkills={addNewSkills} />;
  if (props.form === 2)
    return <SkillForm skillList={skillList} addSkills={addNewSkills} />;
};

export default Forms;
