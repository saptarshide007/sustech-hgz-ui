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
class JobTypeListData {
  constructor(jobType) {
    this.jobType = ["IT", "Mechanical", "Civil"];
  }
  getTypeList() {
    return this.jobType;
  }
  addType(type) {
    this.jobType.push(type);
  }
}


export const SkillData = new SkillListData();
export const JobTypeData = new JobTypeListData();
