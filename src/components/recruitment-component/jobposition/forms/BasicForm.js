import { FloatingLabel, Form, Row, Col, Badge, Stack } from "react-bootstrap";
import styles from "./Basic.module.css";
import Skill from "./SkillList";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { Fade } from "react-reveal";
import Select from "react-select";
import { IoIosCreate } from "react-icons/io";
import { ToolTipButton } from "../../utility/Button";
import CreateType from "./secondaryforms/CreateType";
import SkillForm from "./SkillForm";
const BasicForm = () => {
  const [startDate, onStartDateChange] = useState(new Date());
  const [endDate, onEndDateChange] = useState(new Date());

  const [modalShow, setModalShow] = useState(false);
  const [jobTypeList, addJobType] = useState([
    { label: "None", value: "None", code: "dsd" },
  ]);
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
                <Form.Control type="text" placeholder="" />
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
                <Form.Control type="text" placeholder="" />
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
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comments:</Form.Label>
              <Form.Control as="textarea" rows={3} style={{ width: "100%" }} />
            </Form.Group> */}
          </div>
        </Form>
        <SkillForm/>
      </Fade>
      <CreateType show={modalShow} onHide={() => setModalShow(false)} />
    </React.Fragment>
  );
};
export default BasicForm;
