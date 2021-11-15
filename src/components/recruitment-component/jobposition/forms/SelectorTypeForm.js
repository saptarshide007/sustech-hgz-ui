import { Button, Form, Row, Col, Stack } from "react-bootstrap";
import ListSelector from "./ListSelector";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import Select from "react-select";
import { IoIosCreate } from "react-icons/io";
import { ToolTipButton } from "../../utility/Button";
import CreateSkill from "./secondaryforms/CreateSkill";

const SelectorTypeForm = (props) => {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const handleChange = (selectedOption) => {
    setSelectedSkill(selectedOption.label);
  };
  const addHandler = () => {
    props.addSelectedSkills(selectedSkill);
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
              {props.title}
            </Form.Label>
            <Col sm={6}>
              <Stack direction="horizontal" gap={4}>
                <div style={{ width: "400px" }}>
                  <Select
                    onChange={handleChange}
                    options={props.skillList.map((value) => ({
                      label: value,
                      value: value,
                    }))}
                  />
                </div>
                <ButtonElement
                  msg="Add"
                  disabled={false}
                  clickHandler={addHandler}
                />
              </Stack>
            </Col>
            <Col sm={1}>
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
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Col sm={2}>
              <ListSelector list={props.selectSkillList} />
            </Col>
          </Form.Group>
        </Form>
      </Fade>
      <CreateSkill
        show={modalShow}
        onHide={() => setModalShow(false)}
        onAddHandler={props.addNewSkill}
      />
    </React.Fragment>
  );
};
export default SelectorTypeForm;
