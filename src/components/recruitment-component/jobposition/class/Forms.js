import React, { useState } from "react";
import BasicForm from "../forms/BasicForm";
import {
  SkillData,
  JobTypeData,
  CertData,
  QualificationData,
} from "../data/Data";
import CredentialForm from "../forms/CredentialForm";
const formData = {
  position: "",
  description: "",
  type: "",
  startDate: "",
  endDate: "",
  skills: [],
  certification: [],
  qualification: [],
};
const Forms = (props) => {
  const [skillList, setSkills] = useState(SkillData.getSkillList());
  const [typeList, setType] = useState(JobTypeData.getTypeList());

  const addNewType = (type) => {
    JobTypeData.addType(type);
    setType(JobTypeData.getTypeList());
  };
  const addNewSkill = (skill) => {
    SkillData.addSkill(skill);
    setSkills(SkillData.getSkillList());
  };
  if (props.form === 1)
    return (
      <BasicForm
        skillList={skillList}
        addNewSkill={addNewSkill}
        typeList={typeList}
        addNewType={addNewType}
        formData={formData}
      />
    );
  if (props.form === 2)
    return (
      <CredentialForm
        typeList={typeList}
        addNewType={addNewType}
        formData={formData}
      />
    );
};

export default Forms;
