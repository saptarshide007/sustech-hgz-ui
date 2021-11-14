import BasicForm from "../forms/BasicForm";
import SkillForm from "../forms/SkillForm";
import React, { useState } from "react";
class PositionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillList: [
        { label: "None", value: "None", mandatory: false, weight: 0 },
      ],
    };
    const addSkill = (skill) => {
      this.setState({
        skillList: skill,
      });
    };
    console.log(props);
    this.formList = [
      <BasicForm
        skillList={this.state.skillList}
        addSkill={(skill) => {
          addSkill(skill);
        }}
      />,
      <SkillForm />,
      <BasicForm />,
      <SkillForm />,
      <SkillForm />,
    ];
    this.activeForm = 0;
  }

  getActive() {
    return this.formList[this.activeForm];
  }
  getPrevious() {
    if (this.activeForm === 0) return null;
    else {
      this.activeForm = this.activeForm - 1;
      return this.formList[this.activeForm];
    }
  }
  getNext() {
    if (this.activeForm === this.formList.length - 1) return null;
    else {
      this.activeForm = this.activeForm + 1;
      return this.formList[this.activeForm];
    }
  }
  hasPrevious() {
    if (this.activeForm <= 0) return false;
    else return true;
  }
  hasNext() {
    if (this.activeForm >= this.formList.length - 1) return false;
    else return true;
  }
}

export default new PositionForm("fdgfd", "fggdgdg");
