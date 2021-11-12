import styles from "./SkillList.module.css";
import { Fade } from "react-reveal";

import { BsFillTrashFill, BsCheckLg } from "react-icons/bs";

import {
  Button,
  ToggleButton,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { useState } from "react";

const TipOnHover=(props)=>{
return (  <OverlayTrigger
  key={props.key}
  placement={props.placement}
  overlay={
    <Tooltip>{props.tip}</Tooltip>
  }
>
{props.children}
</OverlayTrigger>)
}

const MandatoryMarker=(props)=>{
  const [checked, setChecked] = useState(false);
  return (
    <TipOnHover
    key="weight"
    placement="top"
    tip={checked?"SetNonMandatory":"SetMandatory"}>
  <ToggleButton
    className="mb-0"
    id={props.value}
    type="checkbox"
    variant="outline-success"
    checked={checked}
    value="1"
    onChange={(e) => setChecked(e.currentTarget.checked)}
    size="md"
  >
    <BsCheckLg />
  </ToggleButton>
  </TipOnHover>);
}

const Box = (props) => {
  return (
    <Fade left>
      <div className={`${styles["box"]}`}>
        <div className={`${styles["box__inner"]}`}>
        <h1>
    {props.value}
  </h1>
        <TipOnHover key="weight" placement="top" tip="Weight">
        <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" className={`${styles["weight-input"]}`}/ >
        </TipOnHover>
          <div className={`${styles["btn-size"]}`}>

            <MandatoryMarker value={props.value}/>
            
            {" "}
            <TipOnHover key="weight" placement="top" tip="Delete">
            <Button variant="danger" size="md">
              <BsFillTrashFill />
            </Button>
            </TipOnHover>
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
