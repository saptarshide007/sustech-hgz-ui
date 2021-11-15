import React, { useState } from "react";
import BasicForm from "../forms/BasicForm";
import { SkillData,JobTypeData } from "../data/Data";
import CredentialForm from "../forms/CredentialForm";
const formData={position:"",description:"",type:"",startDate:"",endDate:"",skills:[]};
const Forms = (props) => {
  const [skillList, setSkills] = useState(SkillData.getSkillList());
  const [typeList, setType] = useState(JobTypeData.getTypeList());
  const [selectSkillList, setSelectSkillList] = useState([
  ]);


  const addNewType = (type) => {
    JobTypeData.addType(type);
    setType(JobTypeData.getTypeList());
  };
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
        typeList={typeList}
        addNewType={addNewType}
        formData={formData}
      />
    );
  if (props.form === 2)
    return (
      <CredentialForm
        skillList={skillList}
        selectSkillList={selectSkillList}
        addNewSkill={addNewSkill}
        addSelectedSkills={addSelectedSkills}
        typeList={typeList}
        addNewType={addNewType}
        formData={formData}
      />
    );
};

export default Forms;
