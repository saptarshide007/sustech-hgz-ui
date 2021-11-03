import style from RecruitmentTable.module.css;
const RecruitmentTable = () => {
  return (
    <div class="employee-data-table table-responsive">
      <table class="table table-borderless table-striped">
        <thead>
          <tr class="text-center">
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Emp no.</th>
            <th scope="col">Position</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">Discipline</th>
            <th scope="col">Award</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>System Architect</td>
            <td>System Architect</td>
            <td>Charmaine.Fancie@gmail.com</td>
            <td>System Architect</td>
            <td>System Architect</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecruitmentTable;
