import * as React from "react";
import { Header, Card, Select, TextArea } from "../../../../Containers";
import { useHistory } from "react-router-dom";
import styles from "./section2.module.scss";
const Section3 = () => {
  const history = useHistory();
  const prevHandler = () => {
    history.push("/supervisory/section1");
  };
  const nextHandler = () => {
    history.push("/");
  };

  const [peopleManagementComment, setPeopleManagementComment] = React.useState(
    localStorage.getItem("peopleManagementComment") || ""
  );

  const [peopleManagementRating, setPeopleManagementRating] =
    React.useState(null);
  const [planningComment, setPlanningComment] = React.useState(
    localStorage.getItem("planningComment") || ""
  );

  return (
    <>
      <Header title="Supervisory Evaluation" />
      <div className={styles.evaluation__section2__container}>
        <div className={`${styles.evaluation__section} `}>
          <Card header="People Management">
            <ul>
              <li>Consider how well the employee serves as a role model</li>
              <li>
                Provides guidance and opportunities to staff for their
                development and advancement
              </li>
              <li>Resolves work related employee problems </li>
              <li>
                Assists subordinates in accomplishing their work related
                objectives
              </li>
              <li>
                Does the employee communicate well with subordinates in a clear
                concise, accurate and timely manner and make useful suggestions?
              </li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            {/* <h2>Ratings</h2> */}
            <Select onChange={(e) => {}} title="Ratings" value="Select....">
              <option>Select</option>
              <option value="">Level 1</option>
              <option value="">Level 2</option>
            </Select>
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              value={peopleManagementComment}
              onChange={(e: any) => {
                localStorage.setItem("peopleManagementComment", e.target.value);
                setPeopleManagementComment(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={`${styles.evaluation__section} `}>
          <Card header="Planning and Organising">
            <ul>
              <li>Consider how well the employee plans his/her work</li>
              <li>
                Coordinates with others and establishes appropriate priorities
              </li>
              <li>Anticipates future needs </li>
              <li>Carries out assignments effectively. </li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            {/* <h2>Ratings</h2> */}
            <Select onChange={(e) => {}} title="Ratings" value="Select....">
              <option>Select</option>
              <option value="">Level 1</option>
              <option value="">Level 2</option>
            </Select>
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              value={planningComment}
              onChange={(e: any) => {
                localStorage.setItem("planningComment", e.target.value);
                setPlanningComment(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={`${styles.evaluation__section} `}>
          <Card header="Total Performance Score">
            <input
              className={styles.score__input}
              type="text"
              style={{ backgroundColor: "white" }}
            />
          </Card>
        </div>

        <div className={`${styles.evaluation__section__button} `}>
          <div className="mtn__btnContaainer">
            <div>
              <button
                className="mtn__btn mtn__blackOutline"
                type="button"
                onClick={() => prevHandler()}
              >
                Previous
              </button>
            </div>
            <div>
              <button
                className="mtn__btn mtn__black"
                type="button"
                onClick={() => nextHandler()}
              >
                Calculate Performance
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
