import { FloatingLabel, Form, Row, Col, Badge, Stack } from "react-bootstrap";
import styles from "./Basic.module.css";
import Skill from "./Skill";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { Fade } from "react-reveal";

const BasicForm = () => {
  const [startDate, onStartDateChange] = useState(new Date());
  const [endDate, onEndDateChange] = useState(new Date());
  return (
    <Fade>
      <Form>
        <div style={{ display: "block" }}>
          <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Position:
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="text" placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Type:
            </Form.Label>
            <Col sm={5}>
              <Form.Control type="text" placeholder="" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Requisition Period:
            </Form.Label>
            <Col sm={4}>
              <div class={`${styles["date-picker"]}`}>
                <Stack gap={3}>
                  <div>
                    <DatePicker onChange={onStartDateChange} value={startDate} />{" "}
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description:</Form.Label>
            <Form.Control as="textarea" rows={3} style={{ width: "90%" }} />
          </Form.Group>
        </div>
      </Form>
    </Fade>
  );
};
export default BasicForm;
