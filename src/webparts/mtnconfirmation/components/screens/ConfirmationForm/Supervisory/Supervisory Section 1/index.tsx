import * as React from "react";
import { Header, Card, Select, TextArea } from "../../../../Containers";
import { useHistory } from "react-router-dom";
import styles from "./section1.module.scss";
const Section2 = () => {
  const history = useHistory();
  const prevHandler = () => {
    history.push("/behavioral/section3");
  };
  const nextHandler = () => {
    history.push("/supervisory/section2");
  };

  const [leadershipComment, setLeadershipComment] = React.useState(
    localStorage.getItem("leadershipComment") || ""
  );

  const [delegationComment, setDelegationComment] = React.useState(
    localStorage.getItem("delegationComment") || ""
  );

  const [administrationComment, setAdministrationComment] = React.useState(
    localStorage.getItem("administrationComment") || ""
  );

  return (
    <>
      <Header title="Supervisory Evaluation" />
      <div className={styles.evaluation__section2__container}>
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
            <Select onChange={(e) => {}} title="Ratings" value="Select....">
              <option>Select</option>
              <option value="">Level 1</option>
              <option value="">Level 2</option>
            </Select>
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              value={leadershipComment}
              onChange={(e: any) => {
                localStorage.setItem("leadershipComment", e.target.value);
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
            <Select onChange={(e) => {}} title="Ratings" value="Select....">
              <option>Select</option>
              <option value="">Level 1</option>
              <option value="">Level 2</option>
            </Select>
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              value={delegationComment}
              onChange={(e: any) => {
                localStorage.setItem("delegationComment", e.target.value);
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
            <Select onChange={(e) => {}} title="Ratings" value="Select....">
              <option>Select</option>
              <option value="">Level 1</option>
              <option value="">Level 2</option>
            </Select>
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              value={administrationComment}
              onChange={(e: any) => {
                localStorage.setItem("administrationComment", e.target.value);
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

export default Section2;
