import * as React from "react";
import {
  Header,
  Card,
  Select,
  TextArea,
  Helpers,
} from "../../../../Containers";
import { useHistory } from "react-router-dom";
import styles from "./section1.module.scss";
import { RaterContext } from "../../../../Context/RaterContext";
import { SupervisoryEvaluationContext } from "../../../../Context/SupervisoryContext";
const SuperVisorySection1 = () => {
  const history = useHistory();
  const prevHandler = () => {
    history.push("/behavioral/section3");
  };
  const nextHandler = () => {
    history.push("/supervisory/section2");
  };

  const { date, raterEmail, rater } = React.useContext(RaterContext);
  const {
    leadershipRating,
    setLeadershipRating,
    leadershipComment,
    setLeadershipComment,
    delegationComment,
    setDelegationComment,
    delegationRating,
    setDelegationRating,
    administrationComment,
    setAdministrationComment,
    administrationRating,
    setAdministrationRating,
  } = React.useContext(SupervisoryEvaluationContext);

  return (
    <>
      <Header title="Supervisory Evaluation" />
      <div className={styles.evaluation__section2__container}>
        <div className={`${styles.evaluation__section} `}>
          <div>
            <div>Rater Name</div>
            <input
              className={styles.score__input}
              type="text"
              style={{ backgroundColor: "white" }}
              readOnly
              value={rater}
            />
          </div>
          <div>
            <div>Rater Email</div>
            <input
              className={styles.score__input}
              type="text"
              style={{ backgroundColor: "white" }}
              readOnly
              value={raterEmail}
            />
          </div>
          <div>
            <div>Rating Date</div>
            <input
              className={styles.score__input}
              type="text"
              style={{ backgroundColor: "white" }}
              readOnly
              value={date}
            />
          </div>
        </div>

        <div className={`${styles.evaluation__section} `}>
          <Card header="Leadership">
            <ul>
              <li>
                Consider how well the employee demonstrates effective
                supervisory abilities
              </li>
              <li>Gains respect and co-operates with others</li>
              <li>Inspires and motivates surbodinates </li>
              <li>Directs the work towards a common goal </li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            {/* <h2>Ratings</h2> */}
            <Select
              onChange={(e: any) => {
                setLeadershipRating(e.target.value);
              }}
              title="Ratings"
              value={leadershipRating}
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              value={leadershipComment}
              onChange={(e: any) => {
                setLeadershipComment(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={`${styles.evaluation__section} `}>
          <Card header="Delegation">
            <ul>
              <li>
                How well does the employee demonstrate the ability to direct
                others in accomplishing work effectively, select and motivate
                staff, define assignments and oversee the work of the
                subordinates?
              </li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            {/* <h2>Ratings</h2> */}
            <Select
              onChange={(e: any) => {
                setDelegationRating(e.target.value);
              }}
              title="Ratings"
              value={delegationRating}
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              value={delegationComment}
              onChange={(e: any) => {
                setDelegationComment(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={`${styles.evaluation__section} `}>
          <Card header="Administration">
            <ul>
              <li>
                How well does the employee perform day to day administrative
                tasks.
              </li>
              <li>Manage time</li>
              <li>Administer policies and implement procedures</li>
              <li>
                Maintain appropriate contact with his/her supervisor and utilize
                funds, staff or equipment?
              </li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            {/* <h2>Ratings</h2> */}
            <Select
              onChange={(e: any) => {
                setAdministrationRating(e.target.value);
              }}
              title="Ratings"
              value={administrationRating}
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              value={administrationComment}
              onChange={(e: any) => {
                setAdministrationComment(e.target.value);
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
              <button
                className="mtn__btn mtn__black"
                type="button"
                onClick={() => nextHandler()}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperVisorySection1;
