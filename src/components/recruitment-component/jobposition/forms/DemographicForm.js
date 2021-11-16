import { Form, Row, Col } from "react-bootstrap";

import React, { useState } from "react";

import { Fade } from "react-reveal";

import CreateType from "./secondaryforms/CreateType";
import SelectorTypeForm from "./SelectorTypeForm";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
const DemographicForm = (props) => {
  const [startDate, onStartDateChange] = useState(new Date());
  const [endDate, onEndDateChange] = useState(new Date());
  const [position, setPosition] = useState(props.formData.position);
  const [description, setDescription] = useState(props.formData.description);
  const [type, setType] = useState(props.formData.type);
  const [modalShow, setModalShow] = useState(false);
  const [selectSkillList, setSelectSkillList] = useState(props.formData.skills);
  const [country, selectCountry] = useState("");
  const [region, selectRegion] = useState("");
  const RegionSelector = () => {
    return (
      <div>
        <CountryDropdown
          value={country}
          onChange={(val) => selectCountry(val)}
          style={{
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "220px",
          }}
        />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => selectRegion(val)}
          style={{
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "220px",
          }}
        />
      </div>
    );
  };

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
                Location:
              </Form.Label>
              <Col sm={5}>
                <RegionSelector />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-4"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={3}>
                Minimum Proximity:
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
                Maximum Proximity:
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
          </div>
          <SelectorTypeForm
            title="Work Authorization:"
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
export default DemographicForm;
