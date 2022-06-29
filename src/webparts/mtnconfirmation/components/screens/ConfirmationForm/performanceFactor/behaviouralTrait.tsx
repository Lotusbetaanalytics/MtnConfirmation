import * as React from "react";
import { useState } from "react";
import { useHistory,Link } from "react-router-dom";
import { Header, Select, Helpers,TextArea,Card } from "../../../Containers";
import { BehavioralContext1 } from "../../../Context/behavioralContext1";
import styles from "./performance.module.scss";

const BehaviouralTrait = () => {
  const history = useHistory();
  // const [dependabilityRating, setDependabilityRating] = useState("");
  // const [dependabilityComment, setDependabilityComment] = useState("");
  // const [coperationRating, setCoperationRating] = useState("");
  // const [coperationComment, setCoperationComment] = useState("");
  // const [initiativeComment, setInitiativeComment] = useState("");
  // const [initiativeRating, setIntiativeRating] = useState("");
  const [msg,setMsg] = useState(false);
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
  } = React.useContext(BehavioralContext1)
  

  const nextHandler = () => {
    history.push("/workHabit");
  };
  return (
    <>
      <Header title="Performance Factor" />
      <div className={styles.evaluation__section2__container}>
        <div className={styles.evaluation__section}>
          <Card header="Dependability">
            <ul>
              <li>Consider the amount of time spent directing this employee </li>
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
              onChange={(e) =>{
                // localStorage.setItem("dependabilityComment",e.target.value)
                // e.target.value.length < 60
                //   ? setMsg(true) :
              setDependabilityComment(e.target.value)}}
              value={dependabilityComment}
            />
            {msg ? (
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
                // localStorage.setItem("workHabitComment",e.target.value)
                // e.target.value.length < 60
                //   ? setMsg(true) :
                setCoperationComment(e.target.value)}}
              value={coperationComment}
            />
            {msg ? (
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
                // localStorage.setItem("workHabitComment",e.target.value)
                // e.target.value.length < 60
                //   ? setMsg(true) :
                setInitiativeComment(e.target.value)}}
              value={initiativeComment}
            />
            {msg ? (
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
              <Link
                to="/behavioral/section2"
                className="mtn__btn mtn__black"
                type="button"
              >
                Next
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BehaviouralTrait;
