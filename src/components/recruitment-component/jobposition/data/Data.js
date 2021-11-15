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

class CertificationListData {
  constructor(certification) {
    this.certification = ["AWS", "Oracle8", "Java11"];
  }
  getCertList() {
    return this.certification;
  }
  addCert(cert) {
    this.certification.push(cert);
  }
}

class QualificationListData {
  constructor(qualification) {
    this.qualification = ["10th", "12th", "BE", "BTech", "B.Sc"];
  }
  getQualificationList() {
    return this.qualification;
  }
  addQualification(credential) {
    this.certification.push(credential);
  }
}
export const SkillData = new SkillListData();
export const JobTypeData = new JobTypeListData();
export const CertData = new CertificationListData();
export const QualificationData = new QualificationListData();
