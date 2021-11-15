class SkillListData {
  constructor(skillList) {
    this.skillList = ["DataScience", "Java", "Angular"];
  }
  getList() {
    return this.skillList;
  }
  add(skill) {
    this.skillList.push(skill);
  }
}
class JobTypeListData {
  constructor(jobType) {
    this.jobType = ["IT", "Mechanical", "Civil"];
  }
  getList() {
    return this.jobType;
  }
  add(type) {
    this.jobType.push(type);
  }
}

class CertificationListData {
  constructor(certification) {
    this.certification = ["AWS", "Oracle8", "Java11"];
  }
  getList() {
    return this.certification;
  }
  add(cert) {
    this.certification.push(cert);
  }
}

class QualificationListData {
  constructor(qualification) {
    this.qualification = ["10th", "12th", "BE", "BTech", "B.Sc"];
  }
  getList() {
    return this.qualification;
  }
  add(credential) {
    this.qualification.push(credential);
  }
}
export const SkillData = new SkillListData();
export const JobTypeData = new JobTypeListData();
export const CertData = new CertificationListData();
export const QualificationData = new QualificationListData();
