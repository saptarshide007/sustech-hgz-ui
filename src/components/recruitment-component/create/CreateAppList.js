import styles from "./CreateAppList.module.css"
import { GrCertificate } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { MdOutlineSchool,MdAdminPanelSettings,MdAssignment,MdAssignmentInd } from "react-icons/md";
import { IoIosAlbums } from "react-icons/io";
class Post {
    constructor(title, icon) {
      this.title = title;
      this.icon = icon;
    }}
  
  
  const app =  [
      new Post(
      'Requisition',
      <MdAssignmentInd/>),
  
      new Post(
      'JobType',
      <IoIosAlbums/>),
  
      new Post(
      'Skill',
      <GiSkills/>),
  
      new Post(
      'Qualification',
      <MdOutlineSchool/>),
  
      new Post(
      'Work Authorization',
      <MdAdminPanelSettings/>),
  
      new Post(
      'Certification',
      <GrCertificate/>),
  
      new Post(
      'Roles',
      <MdAssignment/>),
  ];
const CreateAppList=(props)=>{
    
    return(<div id={styles.app}>
    <div className={`${styles["wrapper"]}`}>
      {app.map((post)=>{
          return(
                <div className={`${styles["card"]}`} onClick={()=>props.setApp("Recruitment")} >
                    <a href="#">
                    <div style={{color:"black",fontSize: "50px"}}>{post.icon}
                        </div>
                        <label for={ post.title }>{ post.title }</label>
                    </a>
                </div>)
      })}
    </div>
  </div>);
};

export default CreateAppList;
