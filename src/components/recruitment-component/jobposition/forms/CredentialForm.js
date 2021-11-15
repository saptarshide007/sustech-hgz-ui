import { Form} from "react-bootstrap";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import CreateType from "./secondaryforms/CreateType";
import SelectorTypeForm from "./SelectorTypeForm";
const  CredentialForm=(props)=>{
    const [modalShow, setModalShow] = useState(false);
    return (
        <React.Fragment>
          <Fade>
            <Form>
              <SelectorTypeForm
                title="Select Certification:"
                skillList={props.skillList}
                selectSkillList={props.selectSkillList}
                addNewSkill={props.addNewSkill}
                addSelectedSkills={props.addSelectedSkills}
              />
              <SelectorTypeForm
                title="Select Qualification:"
                skillList={props.skillList}
                selectSkillList={props.selectSkillList}
                addNewSkill={props.addNewSkill}
                addSelectedSkills={props.addSelectedSkills}
              />
            </Form>
          </Fade>
          <CreateType show={modalShow} onHide={() => setModalShow(false)} />
        </React.Fragment>);
}
export default CredentialForm;