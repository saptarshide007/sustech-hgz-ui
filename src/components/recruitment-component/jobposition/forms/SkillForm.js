import { Button, Form, Row, Col, Tooltip } from "react-bootstrap";
import Skill from "./Skill";
import React, { useState } from "react";
import { Fade } from "react-reveal";
const SkillForm = () => {
  const arr = ["Dashboard", "Job"];
  const [skillList, addSkill] = useState([]);
  const addNewSkills = (props) => {
    addSkill((prevSkill) => {
      return ["skill", ...prevSkill];
    });
    console.log(skillList);
  };
  const ButtonElement = (props) => {
    if (props.disabled) {
      return (
        <Button variant="success" size="md" disabled>
          {props.msg}
        </Button>
      );
    } else {
      return (
        <Button variant="success" size="md" onClick={props.clickHandler}>
          {props.msg}
        </Button>
      );
    }
  };
  return (
    <Fade>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Position
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" placeholder="" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Type
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="text" placeholder="" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Skills
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="text" placeholder="" />
          </Col>
          <Col sm={1}>
            <ButtonElement
              msg="Add"
              disabled={false}
              clickHandler={addNewSkills}
            />
          </Col>
          <Col sm={2}>
            <Skill list={skillList} />
          </Col>
        </Form.Group>
      </Form>
    </Fade>
  );
};
export default SkillForm;
