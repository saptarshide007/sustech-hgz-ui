import styles from "./SkillList.module.css";
import { Fade } from "react-reveal";
import { ToolTipButton } from "../../utility/Button";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsFillTrashFill, BsFillCircleFill, BsCheckLg } from "react-icons/bs";
import {
  Card,
  CardGroup,
  Button,
  ToggleButton,
  Dropdown,
} from "react-bootstrap";
import { useState } from "react";
const Box = (props) => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  return (
    <Fade left>
      <div className={`${styles["box"]}`}>
        <div className={`${styles["box__inner"]}`}>
          <div className={`${styles["btn-size"]}`}>
            <Dropdown className="d-inline mx-2" autoClose={false}>
              <Dropdown.Toggle id="dropdown-autoclose-false">
                Manual Close
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
                <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <ToggleButton
              className="mb-0"
              id="toggle-check"
              type="checkbox"
              variant="outline-success"
              checked={checked}
              value="1"
              onChange={(e) => setChecked(e.currentTarget.checked)}
              size="sm"
            >
              <BsCheckLg />
            </ToggleButton>{" "}
            <Button variant="danger" size="sm">
              <BsFillTrashFill />
            </Button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

const SkillList = (props) => {
  return (
    <div className={`${styles["skill-list-wrapper"]}`}>
      {props.list.map((k) => (
        <Box key={k} value={k} />
      ))}
    </div>
  );
};

export default SkillList;
