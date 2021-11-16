import styles from "./CreateAppList.module.css"
import { GrCertificate } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { MdOutlineSchool,MdAdminPanelSettings,MdAssignment,MdAssignmentInd } from "react-icons/md";
import { IoIosAlbums } from "react-icons/io";
import { Fade } from "react-reveal";
import { Table } from "react-bootstrap";
class Post {
    constructor(title, icon,link) {
      this.title = title;
      this.icon = icon;
      this.link=link;
    }}
  
  
  const app =  [
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
    
    return(
    <Fade>
    <div id={styles.app}>
    <div className={`${styles["wrapper"]}`}>
      {app.map((post)=>{
          return(
                <div className={`${styles["card"]}`} onClick={()=>props.setApp("Recruitment")} >
                    <a href={post.link}>
                    <div style={{color:"black",fontSize: "50px"}}>{post.icon}
                        </div>
                        <label for={ post.title }>{ post.title }</label>
                    </a>
                </div>)
      })}
    </div>
  </div>
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
  </Fade>);
};

export default CreateAppList;
