import BasicForm from "../forms/BasicForm";
import SkillForm from "../forms/SkillForm";
class PositionForm {
  constructor(formList, activeForm) {
    this.formList = [
      <BasicForm />,
      <SkillForm />,
      <BasicForm />,
      <SkillForm />,
      <SkillForm />,
    ];
    this.activeForm = 0;
  }

  getActive() {
    return this.formList[this.activeForm];
  }
  getPrevious() {
    if (this.activeForm === 0) return null;
    else {
      this.activeForm = this.activeForm - 1;
      return this.formList[this.activeForm];
    }
  }
  getNext() {
    if (this.activeForm === this.formList.length - 1) return null;
    else {
      this.activeForm = this.activeForm + 1;
      return this.formList[this.activeForm];
    }
  }
  hasPrevious() {
    if (this.activeForm <= 0) return false;
    else return true;
  }
  hasNext() {
    if (this.activeForm >= this.formList.length - 1) return false;
    else return true;
  }
}

export default new PositionForm();
