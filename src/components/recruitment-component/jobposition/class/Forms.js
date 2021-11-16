import React, { useState } from "react";
import BasicForm from "../forms/BasicForm";
import DemographicForm from "../forms/DemographicForm";
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
  startDate: null,
  endDate: null,
  skills: [],
  certification: [],
  qualification: [],
  location: [],
  workAuthorizaion: [],
  financial: [],
  roles: [],
};
const Forms = (props) => {
  const [skillList, setSkills] = useState(SkillData.getList());
  const [typeList, setType] = useState(JobTypeData.getList());
  const [certList, setCert] = useState(CertData.getList());
  const [qualificationList, setQualification] = useState(
    QualificationData.getList()
  );

  const addNewType = (type) => {
    JobTypeData.add(type);
    setType(JobTypeData.getList());
  };
  const addNewSkill = (skill) => {
    SkillData.add(skill);
    setSkills(SkillData.getList());
  };
  const addNewCert = (cert) => {
    CertData.add(cert);
    setCert(CertData.getList());
  };
  const addNewQualification = (qualification) => {
    QualificationData.add(qualification);
    setQualification(QualificationData.getList());
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
        certList={certList}
        qualificationList={qualificationList}
        addNewCert={addNewCert}
        addNewQualification={addNewQualification}
        formData={formData}
      />
    );
  if (props.form === 3)
    return (
      <DemographicForm
        skillList={skillList}
        addNewSkill={addNewSkill}
        typeList={typeList}
        addNewType={addNewType}
        formData={formData}
      />
    );
};

export default Forms;
