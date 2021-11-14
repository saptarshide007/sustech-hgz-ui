import { Button, Form, Row, Col, Stack } from "react-bootstrap";
import ListSelector from "./ListSelector";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import Select from "react-select";
import { IoIosCreate } from "react-icons/io";
import { ToolTipButton } from "../../utility/Button";
import CreateType from "./secondaryforms/CreateType";
import SelectorTypeForm from "./SelectorTypeForm";

let i = 0;
const SkillForm = (props) => {
  const addNewSkillsHandler = (props) => {
    props.addSkills((prevSkill) => {
      i = i + 1;
      return [
        {
          label: "skill" + i,
          value: "skill" + i,
          mandatory: false,
          weight: 0,
        } + i,
        ...prevSkill,
      ];
    });
  };
  return (
    <React.Fragment>
      <SelectorTypeForm
        title="Select Skills"
        list={props.skillList}
        addHandler={props.addSkills}
      />
    </React.Fragment>
  );
};
export default SkillForm;
