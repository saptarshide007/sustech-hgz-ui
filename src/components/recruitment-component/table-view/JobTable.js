import { JobTypeData } from "../data/Data";
import { Table } from "react-bootstrap";
import { Slide } from "react-reveal";
const JobTable = (props) => {
  return (
    <Slide bottom>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>code</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {JobTypeData.getList().map((value) => {
            return (
              <tr>
                <td>1</td>
                <td>{value.code}</td>
                <td>{value.description}</td>
                <td>@mfgfdgfdgfgdo</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Slide>
  );
};
export default JobTable;
