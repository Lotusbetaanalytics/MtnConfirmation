import * as React from "react";
import styles from "./pendingRequests.module.scss";
import data from "./Data";
import { useHistory } from "react-router-dom";
import { Header } from "../../../Containers";

const PendingRequest = () => {
  const headers = [
    { key: "ID", label: "ID" },
    { key: "EmployeeName", label: "Employee Name" },
    { key: "EmployeeID", label: "Employee ID" },
    { key: "FormNo", label: "Form No." },
    { key: "JobTitle", label: "Job Title" },
    { key: "StaffLevel", label: "Staff Level" },
    { key: "Action", label: "Action" },
  ];

  const history = useHistory();

  const requestHandler = () => {
    history.push("./viewRequestDetails");
  };

  return (
    <div>
      <div>
        <Header title="Pending Request" />
      </div>
      <div className={styles.view__Container}>
        <table>
          <thead>
            <tr>
              {headers.map((row) => {
                return <td key={row.key}>{row.label}</td>;
              })}
            </tr>
          </thead>

          <tbody>
            {data.map((item, id) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.EmployeeName}</td>
                  <td>{item.EmployeeID}</td>
                  <td>{item.FormNo}</td>
                  <td>{item.JobTitle}</td>
                  <td>{item.StaffLevel}</td>
                  <td>
                    <button
                      className={`${styles.view__Btn} ${styles.mtn__black}`}
                      type="submit"
                      onClick={requestHandler}
                    >
                      View More
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingRequest;
