import * as React from "react";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Header,
  Select,
  Helpers,
  Card,
  TextArea,
} from "../../../../Containers";
import { performanceEvaluationContext } from "../../../../Context/performanceContext";
import styles from "../performance.module.scss";

const RatersKnowlegdeFactor = () => {
  const history = useHistory();
  // const [knowlegdeRating, setKnowlegdeRating] = useState("");
  // const [knowlegdeComment, setknowlegdeComment] = useState("");
  // const [workQualityRating, setWorkQualityRating] = useState("");
  // const [workQualityComment, setWorkQualityComment] = useState("");
  // const [workQualityRatingtwo, setWorkQualityRatingtwo] = useState("");
  // const [workQualityCommenttwo, setWorkQualityCommenttwo] = useState("");
  const [msg, setMsg] = useState(false);
  const [workMsg2, setWorkMsg2] = useState(false);
  const [knowlegdeMsg, setknowlegdeMsg] = useState(false);
  const [workMsg, setWorkMsg] = useState(false);

  const {
    knowlegdeRating,
    setKnowlegdeRating,
    knowlegdeComment,
    setknowlegdeComment,
    workQualityRating,
    setWorkQualityRating,
    workQualityComment,
    setWorkQualityComment,
    workQualityRatingtwo,
    setWorkQualityRatingtwo,
    workQualityCommenttwo,
    setWorkQualityCommenttwo,
  } = React.useContext(performanceEvaluationContext);

  const prevHandler = () => {
    history.push("/");
  };

  const nextHandler = () => {
    if (knowlegdeComment.length < 60) {
      setknowlegdeMsg(true);
    }
    if (workQualityComment.length < 60) {
      setWorkMsg(true);
    }
    if (workQualityCommenttwo.length < 60) {
      setWorkMsg2(true);
    } else {
      history.push("/rater/performance/section2");
    }
  };

  return (
    <>
      <Header title="Performance Factor" />

      <div className={styles.evaluation__section2__container}>
        <div className={styles.evaluation__section}>
          <Card header="knowlegde, skill and ability">
            <ul>
              <li>
                Consider the degree to which the employee exhibits the required
                level of job knowledge skills to perform the job and the use of
                established techniques, materials and equipment as they relate
                to performance.
              </li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            <Select
              value={knowlegdeRating}
              onChange={(e: any) => {
                setKnowlegdeRating(e.target.value);
              }}
              title="Ratings"
              options={Helpers.rating}
            />
          </div>

          <div className={styles.section1__comments}>
            <h2>Rater's comment</h2>
            <TextArea
              value={knowlegdeComment}
              onChange={(e: any) => {
                setknowlegdeComment(e.target.value);
              }}
            />
            {knowlegdeMsg ? (
              <span>Your comment should be at least 60 characters </span>
            ) : null}
          </div>
        </div>
        <div className={styles.evaluation__section}>
          <Card header="Quality of work">
            <ul>
              <li>Does the employee assignments meet quality standards?</li>
              <li>
                consider accuracy neatness, thoroughness and adherence to
                standard and safety.
              </li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            <Select
              title="Rating"
              onChange={(e: any) => {
                setWorkQualityRating(e.target.value);
              }}
              value={workQualityRating}
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Rater's comment</h2>
            <TextArea
              value={workQualityComment}
              onChange={(e: any) => {
                localStorage.setItem("workQualityComment", e.target.value);

                setWorkQualityComment(e.target.value);
              }}
            />
            {workMsg ? (
              <span>Your comment should be at least 60 characters </span>
            ) : null}
          </div>
        </div>
        <div className={styles.evaluation__section}>
          <div>
            <Card header="Quality of Work">
              <ul>
                <li>Consider the degree to which the employee exhibits</li>
                <li>
                  Consider the result of the employee's effort does the employee
                  demostrate the ability to
                </li>
                <li>Manage several responsibilities simultaneously?</li>
                <li>Perform work in a productive and timely manner?</li>
                <li>Meet work schedule?</li>
              </ul>
            </Card>
          </div>
          <div className={styles.section1__ratings}>
            <Select
              value={workQualityRatingtwo}
              onChange={(e: any) => {
                setWorkQualityRatingtwo(e.target.value);
              }}
              title="Rating"
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Rater's comment</h2>
            <TextArea
              value={workQualityCommenttwo}
              onChange={(e: any) => {
                setWorkQualityCommenttwo(e.target.value);
              }}
            />
            {workMsg2 ? (
              <span>Your comment should be at least 60 characters </span>
            ) : null}
          </div>
        </div>
        <div className={styles.evaluation__section__button}>
          <div className="mtn__btnContaainer">
            <div>
              <Link to="/" className="mtn__btn mtn__blackOutline" type="button">
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

export default RatersKnowlegdeFactor;
