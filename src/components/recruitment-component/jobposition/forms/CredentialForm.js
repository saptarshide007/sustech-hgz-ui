import { Form } from "react-bootstrap";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import SelectorTypeForm from "./SelectorTypeForm";
const CredentialForm = (props) => {
  /*-------local form data--------*/
  const [selectCertList, setCertList] = useState(props.formData.certification);
  const [selectQualificationList, setSelectQualificationlList] = useState(
    props.formData.qualification
  );
  /*------------------------------*/
  const addSelectedCert = (newCert) => {
    if (!selectCertList.map((k) => k.value).includes(newCert)) {
      setCertList((prevList) => {
        return [
          { label: newCert, value: newCert, mandatory: false, weight: 0 },
          ...prevList,
        ];
      });
      props.formData.certification.push({
        label: newCert,
        value: newCert,
        mandatory: false,
        weight: 0,
      });
    }
  };
  const addSelectedQualification = (newQualification) => {
    if (
      !selectQualificationList.map((k) => k.value).includes(newQualification)
    ) {
      setSelectQualificationlList((prevList) => {
        return [
          {
            label: newQualification,
            value: newQualification,
            mandatory: false,
            weight: 0,
          },
          ...prevList,
        ];
      });
      props.formData.qualification.push({
        label: newQualification,
        value: newQualification,
        mandatory: false,
        weight: 0,
      });
    }
  };
  return (
    <React.Fragment>
      <Fade>
        <Form>
          <SelectorTypeForm
            title="Select Certificaion:"
            selectorList={props.certList}
            selectedItemList={selectCertList}
            createNewItemHandler={props.addNewCert}
            addSelectedItemHandler={addSelectedCert}
            secondaryForm={"Certification"}
          />
          <SelectorTypeForm
            title="Select Qualification:"
            selectorList={props.qualificationList}
            selectedItemList={selectQualificationList}
            createNewItemHandler={props.addNewQualification}
            addSelectedItemHandler={addSelectedQualification}
            secondaryForm={"Qualification"}
          />
        </Form>
      </Fade>
    </React.Fragment>
  );
};
export default CredentialForm;
