import React, { useState } from "react";
import BasicForm from "../forms/BasicForm";
import { SkillData } from "../data/Data";
const Forms = (props) => {
  const [skillList, setSkills] = useState(SkillData.getSkillList());
  const [selectSkillList, setSelectSkillList] = useState([
    { label: "None", value: "None", mandatory: false, weight: 0 },
  ]);
  const addNewSkill = (skill) => {
    SkillData.addSkill(skill);
    setSkills(SkillData.getSkillList());
  };

  const addSelectedSkills = (newSkill) => {
    setSelectSkillList((prevList) => {
      return [
        { label: newSkill, value: newSkill, mandatory: false, weight: 0 },
        ...prevList,
      ];
    });
  };

  if (props.form === 1)
    return (
      <BasicForm
        skillList={skillList}
        selectSkillList={selectSkillList}
        addNewSkill={addNewSkill}
        addSelectedSkills={addSelectedSkills}
      />
    );
  if (props.form === 2)
    return (
      <BasicForm
        skillList={skillList}
        selectSkillList={selectSkillList}
        addNewSkill={addNewSkill}
        addSelectedSkills={addSelectedSkills}
      />
    );
};

export default Forms;
