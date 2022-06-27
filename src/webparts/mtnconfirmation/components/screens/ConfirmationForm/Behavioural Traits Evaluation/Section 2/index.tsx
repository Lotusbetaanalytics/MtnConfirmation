import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Header,
  Card,
  Select,
  TextArea,
  Helpers,
} from "../../../../Containers";

import styles from "./section2.module.scss";
const Section2 = () => {
  const [adaptRating, setAdaptRating] = React.useState(
    localStorage.getItem("adaptRating") || ""
  );
  const [adaptComment, setAdaptComment] = React.useState(
    localStorage.getItem("adaptComment") || ""
  );
  const [judgementRating, setJudgementRating] = React.useState(
    localStorage.getItem("judgementRating") || ""
  );
  const [judgementComment, setJudgementComment] = React.useState(
    localStorage.getItem("judgementComment") || ""
  );
  const [attendanceRating, setAttendanceRating] = React.useState(
    localStorage.getItem("attendanceRating") || ""
  );
  const [attendanceComment, setAttendanceComment] = React.useState(
    localStorage.getItem("attendanceComment") || ""
  );

  const history = useHistory();
  const nextHandler = () => {
    localStorage.setItem(
      "sction2Rating",
      JSON.stringify({
        adaptRating,
        adaptComment,
        judgementRating,
        judgementComment,
        attendanceRating,
        attendanceComment,
      })
    );

    history.push("/behavioral/section3");
  };

  return (
    <>
      <Header title="Behavioural Traits Evaluation" />
      <form
        className={styles.evaluation__section2__container}
        onSubmit={nextHandler}
      >
        <div className={`${styles.evaluation__section} `}>
          <Card header="Adaptability">
            <ul>
              <li>
                Consider the ease with which the employee adjust to any change
                in duties, procedures, supervisors or the work environment.
              </li>
              <li>
                How well does the employee accept new ideas and approaches to
                work, responds appropriately to constructive criticisms and
                suggestions for work improvements?
              </li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            {/* <h2>Ratings</h2> */}
            <Select
              onChange={(e: any) => {
                localStorage.setItem("adaptRating", e.target.value);
                setAdaptRating(e.target.value);
              }}
              title="Ratings"
              value={adaptRating}
              options={Helpers.rating}
              required={true}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              value={adaptComment}
              onChange={(e: any) => {
                localStorage.setItem("adaptComment", e.target.value);
                setAdaptComment(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={`${styles.evaluation__section} `}>
          <Card header="Judgement">
            <ul>
              <li>
                Consider how well the employee effectively analyses problems,
                determines the appropriate course of action, suggests solutions
                and exhibits timely and decisive action.
              </li>
              <li>Thinks logically.</li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            {/* <h2>Ratings</h2> */}
            <Select
              onChange={(e) => {
                localStorage.setItem("judgementRating", e.target.value);
                setJudgementRating(e.target.value);
              }}
              title="Ratings"
              required={true}
              value={judgementRating}
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              value={judgementComment}
              onChange={(e: any) => {
                localStorage.setItem("judgementComment", e.target.value);
                setJudgementComment(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={`${styles.evaluation__section} `}>
          <Card header="Attendance">
            <ul>
              <li>
                Consider number of absences, use of annual and sick leave in
                accordance with MTN policy.
              </li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            {/* <h2>Ratings</h2> */}
            <Select
              onChange={(e: any) => {
                localStorage.setItem("attendanceRating", e.target.value);
                setAttendanceRating(e.target.value);
              }}
              title="Ratings"
              value={attendanceRating}
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              value={attendanceComment}
              onChange={(e: any) => {
                localStorage.setItem("attendanceComment", e.target.value);
                setAttendanceComment(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={`${styles.evaluation__section__button} `}>
          <div className="mtn__btnContaainer">
            <div>
              <Link
                to="/behavioral/section1"
                className="mtn__btn mtn__blackOutline"
                type="button"
              >
                Previous
              </Link>
            </div>
            <button type="submit" className="mtn__btn mtn__black">
              {/* <Link to="/behavioral/section3" > */}
              Next
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Section2;
