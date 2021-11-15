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
  const [startDate, onStartDateChange] = useState(new Date());
  const [endDate, onEndDateChange] = useState(new Date());
  const [position, setPosition] = useState(props.formData.position);
  const [description, setDescription] = useState(props.formData.description);
  const [type, setType] = useState(props.formData.type);
  const [modalShow, setModalShow] = useState(false);
  const [selectSkillList, setSelectSkillList] = useState(props.formData.skills);
  const addSelectedSkills = (newSkill) => {
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
  };

  const handleTypeChange = (selectedOption) => {
    formChangeHandler(3, selectedOption.label);
  };
  const formChangeHandler = (id, value) => {
    if (id == 1) {
      setPosition(value);
      props.formData.position = value;
    }
    if (id == 2) {
      setDescription(value);
      props.formData.description = value;
    }
    if (id == 3) {
      setType(value);
      props.formData.type = value;
    }
  };
  return (
    <React.Fragment>
      <Fade>
        <Form>
          <div style={{ display: "block" }}>
            <Form.Group
              as={Row}
              className="mb-4"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={3}>
                Position:
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="input"
                  placeholder=""
                  onChange={(e) => formChangeHandler(1, e.target.value)}
                  value={position}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-4"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={3}>
                Description:
              </Form.Label>
              <Col sm={5}>
                <Form.Control
                  type="text"
                  placeholder=""
                  onChange={(e) => formChangeHandler(2, e.target.value)}
                  value={description}
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-4"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={3}>
                Job Type:
              </Form.Label>
              <Col sm={5}>
                <Stack direction="horizontal" gap={3}>
                  <div style={{ width: "400px" }}>
                    <Select
                      onChange={handleTypeChange}
                      value={{ label: type, value: type }}
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
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={3}>
                Requisition Period:
              </Form.Label>
              <Col sm={4}>
                <div class={`${styles["date-picker"]}`}>
                  <Stack gap={3}>
                    <div>
                      <DatePicker
                        onChange={onStartDateChange}
                        value={startDate}
                      />{" "}
                      <Badge pill bg="success">
                        StartTime
                      </Badge>
                    </div>
                    <div>
                      <DatePicker onChange={onEndDateChange} value={endDate} />{" "}
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
          />
        </Form>
      </Fade>
      <CreateType show={modalShow} onHide={() => setModalShow(false)} />
    </React.Fragment>
  );
};
export default BasicForm;
