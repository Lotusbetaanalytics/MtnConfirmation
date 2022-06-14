import * as React from "react";
import { Header } from "../../../Containers";
import styles from "./allDetails.module.scss";

const ViewRequestDetails = () => {
  return (
    <div>
      <div>
        <Header title="View Pending Request" />
      </div>
      <div className={styles.view__allContent}>
        <div className={styles.gridbox__allContent}>
          <div className={styles.eachGridbox__allContent}>
            <header>Employee Name</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>John Jones</p>
            </span>
          </div>
          <div className={styles.eachGridbox__allContent}>
            <header>Employee ID</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>MTN100</p>
            </span>
          </div>
          <div className={styles.eachGridbox__allContent}>
            <header>Form No.</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>1002MTN</p>
            </span>
          </div>
          <div className={styles.eachGridbox__allContent}>
            <header>Job Title</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>Sale Representative</p>
            </span>
          </div>
          <div className={styles.eachGridbox__allContent}>
            <header>Staff Level</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>2</p>
            </span>
          </div>
          <div className={styles.eachGridbox__allContent}>
            <header>Divison</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>2</p>
            </span>
          </div>
          <div className={styles.eachGridbox__allContent}>
            <header>Department</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>Sales</p>
            </span>
          </div>
          <div className={styles.eachGridbox__allContent}>
            <header>Employee Phone Number</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>08129932012</p>
            </span>
          </div>
          <div className={styles.eachGridbox__allContent}>
            <header>Location</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>Lagos</p>
            </span>
          </div>
          <div className={styles.eachGridbox__allContent}>
            <header>Rater</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>Rater@mtnnigeria.com</p>
            </span>
          </div>
          <div className={styles.eachGridbox__allContent}>
            <header>Emplyment Date</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>02-10-2017</p>
            </span>
          </div>
          <div className={styles.eachGridbox__allContent}>
            <header>Confirmation Due Date</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>08-12-2017</p>
            </span>
          </div>
          <div className={styles.eachGridbox__allContent}>
            <header>Period Supervised(Start Date)</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>02-01-2018</p>
            </span>
          </div>
          <div className={styles.eachGridbox__allContent}>
            <header>Period Supervised(End Date)</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>31-02-19</p>
            </span>
          </div>
          <div className={styles.eachGridbox__allContent}>
            <header>Does the Employee have direct Report</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>Yes</p>
            </span>
          </div>
          <div className={styles.eachGridbox__allContent}>
            <header>Employee's Comment</header>
            <span className={styles.grid__titleContent}>
              <p className={styles.grid__titleName}>Satisfactory</p>
            </span>
          </div>
        </div>
        <div className={styles.allContent__btn}>
          <button
            type="button"
            className={`${styles.view__Btn2} ${styles.mtn__black}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewRequestDetails;
