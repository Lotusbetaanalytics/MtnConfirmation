import * as React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Header,
  Select,
  Helpers,
  TextArea,
  Card,
} from "../../../../Containers";
import { BehavioralContext1 } from "../../../../Context/behavioralContext1";
import styles from "../performance.module.scss";

const RatersBehaviouralTrait = () => {
  const history = useHistory();
  const [workMsg2, setWorkMsg2] = useState(false);
  const [knowlegdeMsg, setknowlegdeMsg] = useState(false);
  const [workMsg, setWorkMsg] = useState(false);

  const [msg, setMsg] = useState(false);
  const {
    dependabilityRating,
    setDependabilityRating,
    dependabilityComment,
    setDependabilityComment,
    coperationRating,
    setCoperationRating,
    coperationComment,
    setCoperationComment,
    initiativeRating,
    setInitiativeRating,
    initiativeComment,
    setInitiativeComment,
  } = React.useContext(BehavioralContext1);

  const nextHandler = () => {
    if (dependabilityComment.length < 60) {
      setknowlegdeMsg(true);
    }
    if (coperationComment.length < 60) {
      setWorkMsg(true);
    }
    if (initiativeComment.length < 60) {
      setWorkMsg2(true);
    } else {
      history.push("/behavioral/section2");
    }
  };
  return (
    <>
      <Header title="Behavioural Traits Evaluation" />
      <div className={styles.evaluation__section2__container}>
        <div className={styles.evaluation__section}>
          <Card header="Dependability">
            <ul>
              <li>
                Consider the amount of time spent directing this employee{" "}
              </li>
              <li>
                Does this employee monitor project and exercise follow-through?
              </li>
              <li>Adhere to time frame?</li>
              <li>
                Is the employee punctual for meeting and appointments and
                respond appropriately to instructions and procedures?
              </li>
            </ul>
          </Card>

          <div className={styles.section1__ratings}>
            <Select
              onChange={(e) => setDependabilityRating(e.target.value)}
              title="Rating"
              value={dependabilityRating}
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comment</h2>
            <TextArea
              onChange={(e) => {
                setDependabilityComment(e.target.value);
              }}
              value={dependabilityComment}
            />
            {knowlegdeMsg ? (
              <span>Your comment should be at least 60 characters </span>
            ) : null}
          </div>
        </div>
        <div className={styles.evaluation__section}>
          <Card header="Co-Operation">
            <ul>
              <li>
                How well does the employee work/co-operate with co-workers and
                supervisor as a contributing member?
              </li>
              <li>
                Does the employee demonstrate consideration for the others,
                maintain rapport with others and help others willingly?
              </li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            <Select
              onChange={(e) => setCoperationRating(e.target.value)}
              title="Rating"
              value={coperationRating}
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comment</h2>
            <TextArea
              onChange={(e) => {
                setCoperationComment(e.target.value);
              }}
              value={coperationComment}
            />
            {workMsg ? (
              <span>Your comment should be at least 60 characters </span>
            ) : null}
          </div>
        </div>

        <div className={styles.evaluation__section}>
          <Card header="Initiative">
            <ul>
              <li>
                Consider how well the employee seeks and assumes greater
                responsibility,monitor projects independently and follow through
                appropriately
              </li>
            </ul>
          </Card>

          <div className={styles.section1__ratings}>
            <Select
              onChange={(e) => setInitiativeRating(e.target.value)}
              title="Rating"
              value={initiativeRating}
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comment</h2>
            <TextArea
              onChange={(e) => {
                setInitiativeComment(e.target.value);
              }}
              value={initiativeComment}
            />
            {workMsg2 ? (
              <span>Your comment should be at least 60 characters </span>
            ) : null}
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
            <div>
              <button
                onClick={nextHandler}
                className="mtn__btn mtn__black"
                type="button"
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

export default RatersBehaviouralTrait;
