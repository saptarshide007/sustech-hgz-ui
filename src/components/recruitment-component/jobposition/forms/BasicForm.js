import { Form, Row, Col, Badge, Stack } from "react-bootstrap";
import styles from "./css/Basic.module.css";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { Fade } from "react-reveal";
import Select from "react-select";
import { IoIosCreate } from "react-icons/io";
import { ToolTipButton } from "../../utility/Button";
import CreateType from "./secondaryforms/CreateType";
import SelectorTypeForm from "./SelectorTypeForm";
const BasicForm = (props) => {
  /*-------local form data--------*/
  const [formDataPosition, setPosition] = useState(props.formData.position);
  const [formDataDescription, setDescription] = useState(
    props.formData.description
  );
  const [formDataType, setType] = useState(props.formData.type);
  const [startDate, setStartDateChange] = useState(props.formData.startDate);
  const [endDate, setEndDateChange] = useState(props.formData.endDate);
  const [selectSkillList, setSelectSkillList] = useState(props.formData.skills);
  /*------------------------------*/
  const [modalShow, setModalShow] = useState(false);
  const addSelectedSkills = (newSkill) => {
    if (!selectSkillList.map((k) => k.value).includes(newSkill)) {
      setSelectSkillList((prevList) => {
        return [
          { label: newSkill, value: newSkill, mandatory: false, weight: 0 },
          ...prevList,
        ];
      });
      props.formData.skills.push({
        label: newSkill,
        value: newSkill,
        mandatory: false,
        weight: 0,
      });
    }
  };

  const handleTypeChange = (selectedOption) => {
    formChangeHandler(3, selectedOption.label);
  };
  const formChangeHandler = (id, value) => {
    switch (id) {
      case 1:
        setPosition(value);
        props.formData.position = value;
      case 2:
        setDescription(value);
        props.formData.description = value;
      case 3:
        setType(value);
        props.formData.type = value;
      case 4:
        setStartDateChange(value);
        props.formData.startDate = value;
      case 5:
        setEndDateChange(value);
        props.formData.endDate = value;
    }
  };
  return (
    <React.Fragment>
      <Fade>
        <Form>
          <div style={{ display: "block" }}>
            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm={3}>
                Position:
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="input"
                  placeholder=""
                  onChange={(e) => formChangeHandler(1, e.target.value)}
                  value={formDataPosition}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm={3}>
                Description:
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => formChangeHandler(2, e.target.value)}
                  value={formDataDescription}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-4">
              <Form.Label column sm={3}>
                Job Type:
              </Form.Label>
              <Col sm={5}>
                <Stack direction="horizontal" gap={3}>
                  <div style={{ width: "400px" }}>
                    <Select
                      onChange={handleTypeChange}
                      value={{ label: formDataType, value: formDataType }}
                      options={props.typeList.map((value) => ({
                        label: value,
                        value: value,
                      }))}
                    />
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
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={3}>
                Requisition Period:
              </Form.Label>
              <Col sm={4}>
                <div class={`${styles["date-picker"]}`}>
                  <Stack gap={3}>
                    <div>
                      <DatePicker
                        onChange={(date) => formChangeHandler(4, date)}
                        value={startDate}
                      />{" "}
                      <Badge pill bg="success">
                        StartTime
                      </Badge>
                    </div>
                    <div>
                      <DatePicker
                        onChange={(date) => formChangeHandler(5, date)}
                        value={endDate}
                      />{" "}
                      <Badge pill bg="danger">
                        EndTime
                      </Badge>
                    </div>
                  </Stack>
                </div>
              </Col>
            </Form.Group>
          </div>
          <SelectorTypeForm
            title="Select Skills"
            selectorList={props.skillList}
            selectedItemList={selectSkillList}
            createNewItemHandler={props.addNewSkill}
            addSelectedItemHandler={addSelectedSkills}
            secondaryForm={"Skill"}
          />
        </Form>
      </Fade>
      <CreateType show={modalShow} onHide={() => setModalShow(false)} />
    </React.Fragment>
  );
};
export default BasicForm;
