import Forms from "./Forms";
const totalForms = 2;
class PositionForm {
  constructor(formList, activeForm) {
    this.activeForm = 1;
  }

  getActive() {
    return <Forms form={this.activeForm} />;
  }
  getPrevious() {
    if (this.activeForm === 1) return null;
    else {
      this.activeForm = this.activeForm - 1;
      return <Forms form={this.activeForm} />;
    }
  }
  getNext() {
    if (this.activeForm >= 2) return null;
    else {
      this.activeForm = this.activeForm + 1;
      return <Forms form={this.activeForm} />;
    }
  }
  hasPrevious() {
    if (this.activeForm <= 1) return false;
    else return true;
  }
  hasNext() {
    if (this.activeForm >= 2) return false;
    else return true;
  }
}

export default new PositionForm();
