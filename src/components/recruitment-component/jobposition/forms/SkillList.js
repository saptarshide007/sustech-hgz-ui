import styles from "./SkillList.module.css";
import { Fade } from "react-reveal";
import { ToolTipButton } from "../../utility/Button";
import { RiDeleteBin5Line } from "react-icons/ri";

const Box = (props) => {

  return (
<Fade left>
        <div className={`${styles["box"]}`}>
          <div className={`${styles["box__inner"]}`} >
            {/* <h2 className={`${styles["box__heading"]}`}>{props.value} </h2> */}
  <table data-table>
  <tbody>
    <tr id="unique_id_1">
      <td>July 2015 Newsletter</td>
      <td>6/14/2015</td>
      <td>
        <a href="#" onclick="view('unique_id_1')" data-caption="View"><RiDeleteBin5Line/><i class="ion-eye"></i></a>
        <a href="#" onclick="edit('unique_id_1')" data-caption="Edit"><i class="ion-edit"></i></a>
        <a href="#" onclick="duplicate('unique_id_1')" data-caption="Duplicate"><i class="ion-ios-copy"></i></a>
        <a href="#" data-delete data-caption="Delete"><i class="ion-close"></i></a>
      </td>
    </tr>
  </tbody>
</table>
          </div>
        </div>
        </Fade>
  );
};

const SkillList = (props) => {
  return (
    <div className={`${styles["skill-list-wrapper"]}`}>
      {props.list.map((k) => (
        <Box key={k} value={k}/>
      ))}
    </div>
  );
};

export default SkillList;
