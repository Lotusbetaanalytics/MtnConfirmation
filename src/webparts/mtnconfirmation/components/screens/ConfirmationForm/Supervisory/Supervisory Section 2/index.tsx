import * as React from "react";
import {
  Header,
  Card,
  Select,
  TextArea,
  Helpers,
} from "../../../../Containers";
import { useHistory } from "react-router-dom";
import styles from "./section2.module.scss";
import { TextAreaSmall } from "../../../../Containers/TextArea";
const Section3 = () => {
  const history = useHistory();
  const prevHandler = () => {
    history.push("/supervisory/section1");
  };

  const [peopleManagementComment, setPeopleManagementComment] = React.useState(
    localStorage.getItem("peopleManagementComment") || ""
  );

  const [peopleManagementRating, setPeopleManagementRating] = React.useState(
    localStorage.getItem("peopleManagementRating") || null
  );
  const [planningComment, setPlanningComment] = React.useState(
    localStorage.getItem("planningComment") || ""
  );

  const [planningRating, setPlanningRating] = React.useState(
    localStorage.getItem("planningRating") || ""
  );

  const [supervisorScore, setSupervisorScore] = React.useState(
    JSON.parse(localStorage.getItem("supervisorScore")) || null
  );

  const [showSubmitButton, setShowSubmitButton] = React.useState(false);

  const scoreHandler = () => {
    const total =
      Number(localStorage.getItem("leadershipRating")) +
      Number(localStorage.getItem("delegationRating")) +
      Number(localStorage.getItem("administrationRating")) +
      Number(localStorage.getItem("peopleManagementRating")) +
      Number(localStorage.getItem("planningRating"));
    setSupervisorScore(total);
    localStorage.setItem("supervisorScore", JSON.stringify(total));
    setShowSubmitButton(true);
  };

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
            <Select
              onChange={(e: any) => {
                localStorage.setItem("peopleManagementRating", e.target.value);
                setPeopleManagementRating(e.target.value);
              }}
              title="Ratings"
              value={peopleManagementRating}
              options={Helpers.rating}
            />
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
            <Select
              onChange={(e: any) => {
                localStorage.setItem("planningRating", e.target.value);
                setPlanningRating(e.target.value);
              }}
              title="Ratings"
              value={planningRating}
              options={Helpers.rating}
            />
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
          <div className={`${styles.evaluation__section} `}>
            <Card header="Total Performance Score">
              <input
                className={styles.score__input}
                type="text"
                style={{ backgroundColor: "white" }}
                readOnly
                value={supervisorScore}
              />
            </Card>
          </div>
          <div></div>
          <div className={styles.section1__comments}>
            <h2>Rater's final comment</h2>
            <TextAreaSmall
              value={planningComment}
              rows={5}
              onChange={(e: any) => {
                localStorage.setItem("planningComment", e.target.value);
                setPlanningComment(e.target.value);
              }}
            />
          </div>
          <div></div>
          <div></div>
          <div className={styles.section1__comments}>
            <h2>Next Actor</h2>
            <TextAreaSmall
              value={planningComment}
              onChange={(e: any) => {
                localStorage.setItem("planningComment", e.target.value);
                setPlanningComment(e.target.value);
              }}
            />
          </div>
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
              {showSubmitButton ? (
                <button
                  className="mtn__btn mtn__black"
                  type="button"
                  onClick={() => {}}
                >
                  Submit
                </button>
              ) : (
                <button
                  className="mtn__btn mtn__black"
                  type="button"
                  onClick={scoreHandler}
                >
                  Calculate Performance
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
