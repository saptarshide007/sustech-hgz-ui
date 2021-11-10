import {
  FloatingLabel,
  Form,
  Row,
  Col,
  Button,
  CloseButton,
  Placeholder,
} from "react-bootstrap";
import ReactScrollableList from "react-scrollable-list"
import styles from "./Requisition.module.css";
import Skill from "./Skill";
import React, { useRef } from 'react';

const Requisition = () => {
  const arr=["Dashboard","Job"]
  return (
    <div className={`${styles["form-wrapper"]}`}>
      <div className={`${styles["form-card"]}`}>
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
              <Button variant="success" size="md">
                Add
              </Button>
            </Col>
            <Col sm={2}>
              <Skill/>
            </Col>

          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                Radios
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="first radio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="second radio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
                <Form.Check
                  type="radio"
                  label="third radio"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};
export default Requisition;
