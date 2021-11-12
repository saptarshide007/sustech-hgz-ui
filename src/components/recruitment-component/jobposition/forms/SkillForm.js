import { Button, Form, Row, Col, Tooltip, Stack } from "react-bootstrap";
import SkillList from "./SkillList";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import Select from "react-select";
import { IoIosCreate } from "react-icons/io";
import { ToolTipButton } from "../../utility/Button";
import CreateType from "./secondaryforms/CreateType";
let i=0;
const SkillForm = () => {
  const arr = ["Dashboard", "Job"];
  
  const [modalShow, setModalShow] = React.useState(false);
  const [skillList, addSkill] = useState([]);
  const [jobTypeList, addJobType] = useState([
    { label: "None", value: "None", code: "dsd" },
  ]);
  const addNewSkills = (props) => {
    addSkill((prevSkill) => {
      i=i+1;
      return ["skill"+i, ...prevSkill];
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
    <React.Fragment>
      <Fade>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={3}>
              Select Skills:
            </Form.Label>
            <Col sm={6}>
              <Stack direction="horizontal" gap={4}>
                <div style={{ width: "400px" }}>
                  <Select options={jobTypeList} />
                </div>
                <div>
                  <ToolTipButton
                    variant="primary"
                    size="mg"
                    btnname={<IoIosCreate />}
                    msg="CreateNew"
                    placement="top"
                    active={true}
                    onClick={() => setModalShow(true)}
                  />
                </div>
              </Stack>
            </Col>
            <Col sm={1}>
              <ButtonElement
                msg="Add"
                disabled={false}
                clickHandler={addNewSkills}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Col sm={2}>
              <SkillList list={skillList} />
            </Col>
          </Form.Group>
        </Form>
      </Fade>
      <CreateType show={modalShow} onHide={() => setModalShow(false)} />
    </React.Fragment>
  );
};
export default SkillForm;
