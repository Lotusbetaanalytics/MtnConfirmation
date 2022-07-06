import * as React from "react";
import { Header, Spinner } from "../../../Containers";
import styles from "./allDetails.module.scss";
import { sp } from "@pnp/sp";
import { useHistory, Link } from "react-router-dom";
import { EmployeeContext } from "../../../Context/EmployeeContext";
import { ActorContext } from "../../../Context/ActorContext";
import { RaterContext } from "../../../Context/RaterContext";
import { RoleContext } from "../../../Context/RoleContext";

const ViewRequestDetails = ({ match }) => {
  let itemID = match.params.id;
  const { setId: setEmployeeId, setItemId } = React.useContext(EmployeeContext);
  const { setActor, actor } = React.useContext(ActorContext);
  const { raterEmail } = React.useContext(RaterContext);
  const { setRole, role } = React.useContext(RoleContext);
  const [loading, setLoading] = React.useState(false);
  const [id, setId] = React.useState("");
  const [employee_Name, setEmployee_Name] = React.useState("");
  const [employee_Id, setEmployee_Id] = React.useState("");
  const [form_No, setForm_No] = React.useState("");
  const [job_Title, setJob_Title] = React.useState("");
  const [staff_Level, setStaff_Level] = React.useState("");
  const [division, setDivision] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [rater, setRater] = React.useState("");
  const [employmentDate, setEmployeeDate] = React.useState("");
  const [confirmationDate, setConfirmationDate] = React.useState("");
  const [startDate, setStartDate] = React.useState("");
  const [endDate, setEndDate] = React.useState("");
  const [report, setReport] = React.useState("");
  const [locations, setLocations] = React.useState([]);
  const [divisions, setDivisions] = React.useState([]);
  const [departments, setDepartments] = React.useState([]);

  const history = useHistory();

  React.useEffect(() => {
    sp.web.lists
      .getByTitle(`Confirmation`)
      .items.filter(`ID eq '${itemID}'`)
      .get()
      .then((res) => {
        setId(res[0].ID);
        setActor(res[0].Approvals);
        setEmployee_Name(res[0].EmployeeName);
        setEmployee_Id(res[0].EmployeeID);
        setEmployeeId(res[0].EmployeeID);
        setForm_No(res[0].FormNo);
        setJob_Title(res[0].JobTitle);
        setStaff_Level(res[0].Level);
        setDivision(res[0].Divison);
        setDepartment(res[0].Department);
        setPhone(res[0].Phone);
        setLocation(res[0].Location);
        setRater(res[0].Rater);
        setEmployeeDate(res[0].EmployeeDate);
        setConfirmationDate(res[0].ConfirmationDate);
        setStartDate(res[0].StartDate);
        setEndDate(res[0].EndDate);
        setReport(res[0].DirectReport);
        setLoading(false);
      });
  }, []);

  // sp.web.lists.getByTitle()

  const nextHandler = () => {
    switch (role) {
      case "Rater":
        history.push("/rater/performance/section1");
        break;

      default:
        history.push("/performance/section1");
        break;
    }
  };

  React.useEffect(() => {
    setItemId(itemID);
  }, [itemID]);

  React.useEffect(() => {
    switch (actor) {
      case "Rater":
        setRole("Rater");
        break;
      case "Rater Line Manager":
        setRole("Rater Line Manager");

      default:
        sp.web.lists
          .getByTitle("Admin")
          .items.filter(`Email eq '${raterEmail}'`)
          .get()
          .then((res) => {
            setRole(res[0]?.Role);
          });
        break;
    }
  }, [actor]);

  return (
    <div>
      <div>
        <Header title="View Pending Request" />
      </div>
      <div className={styles.view__allContent}>
        {loading ? (
          <Spinner />
        ) : (
          <div className={styles.gridbox__allContent}>
            <div className={styles.eachGridbox__allContent}>
              <header>Employee Name</header>
              <span className={styles.grid__titleContent}>
                <p className={styles.grid__titleName}>{employee_Name}</p>
              </span>
            </div>
            <div className={styles.eachGridbox__allContent}>
              <header>Employee ID</header>
              <span className={styles.grid__titleContent}>
                <p className={styles.grid__titleName}>{employee_Id}</p>
              </span>
            </div>
            <div className={styles.eachGridbox__allContent}>
              <header>Form No.</header>
              <span className={styles.grid__titleContent}>
                <p className={styles.grid__titleName}>{form_No}</p>
              </span>
            </div>
            <div className={styles.eachGridbox__allContent}>
              <header>Job Title</header>
              <span className={styles.grid__titleContent}>
                <p className={styles.grid__titleName}>{job_Title}</p>
              </span>
            </div>
            <div className={styles.eachGridbox__allContent}>
              <header>Staff Level</header>
              <span className={styles.grid__titleContent}>
                <p className={styles.grid__titleName}>{staff_Level}</p>
              </span>
            </div>
            <div className={styles.eachGridbox__allContent}>
              <header>Divison</header>
              <span className={styles.grid__titleContent}>
                <p className={styles.grid__titleName}>{division}</p>
              </span>
            </div>
            <div className={styles.eachGridbox__allContent}>
              <header>Department</header>
              <span className={styles.grid__titleContent}>
                <p className={styles.grid__titleName}>{department}</p>
              </span>
            </div>
            <div className={styles.eachGridbox__allContent}>
              <header>Employee Phone Number</header>
              <span className={styles.grid__titleContent}>
                <p className={styles.grid__titleName}>{phone}</p>
              </span>
            </div>
            <div className={styles.eachGridbox__allContent}>
              <header>Location</header>
              <span className={styles.grid__titleContent}>
                <p className={styles.grid__titleName}>{location}</p>
              </span>
            </div>
            <div className={styles.eachGridbox__allContent}>
              <header>Rater</header>
              <span className={styles.grid__titleContent}>
                <p className={styles.grid__titleName}>{rater}</p>
              </span>
            </div>
            <div className={styles.eachGridbox__allContent}>
              <header>Emplyment Date</header>
              <span className={styles.grid__titleContent}>
                <p className={styles.grid__titleName}>{employmentDate}</p>
              </span>
            </div>
            <div className={styles.eachGridbox__allContent}>
              <header>Confirmation Due Date</header>
              <span className={styles.grid__titleContent}>
                <p className={styles.grid__titleName}>{confirmationDate}</p>
              </span>
            </div>
            <div className={styles.eachGridbox__allContent}>
              <header>Period Supervised(Start Date)</header>
              <span className={styles.grid__titleContent}>
                <p className={styles.grid__titleName}>{startDate}</p>
              </span>
            </div>
            <div className={styles.eachGridbox__allContent}>
              <header>Period Supervised(End Date)</header>
              <span className={styles.grid__titleContent}>
                <p className={styles.grid__titleName}>{endDate}</p>
              </span>
            </div>
            <div className={styles.eachGridbox__allContent}>
              <header>Does the Employee have direct Report</header>
              <span className={styles.grid__titleContent}>
                <p className={styles.grid__titleName}>{report}</p>
              </span>
            </div>
            {/* <div className={styles.eachGridbox__allContent}>
            <header>Employee's Comment</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>Satisfactory</p>
            </span>
          </div> */}
          </div>
        )}
        <div className={styles.allContent__btn}>
          <button
            type="button"
            className={`${styles.view__Btn2} ${styles.mtn__black}`}
            onClick={nextHandler}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewRequestDetails;
