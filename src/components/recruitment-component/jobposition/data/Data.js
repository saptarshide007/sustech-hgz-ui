class SkillListData {
  constructor(skillList) {
    this.skillList = ["DataScience", "Java", "Angular"];
  }
  getSkillList() {
    return this.skillList;
  }
  addSkill(skill) {
    this.skillList.push(skill);
  }
}

export const SkillData = new SkillListData();
