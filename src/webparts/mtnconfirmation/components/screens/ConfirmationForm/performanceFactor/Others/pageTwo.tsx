import * as React from "react";
import { useState } from "react";
import { useHistory, Link, useParam } from "react-router-dom";
import {
  Header,
  Select,
  Helpers,
  TextArea,
  Card,
  Spinner,
} from "../../../../Containers";
import styles from "../performance.module.scss";

import { sp } from "@pnp/sp";

const workHabit = () => {
  const [workHabitRating, setWorkHabitRating] = useState(0);
  const [workHabitComment, setWorkHabitComment] = useState("");
  const [communicationRating, setCommunicationRating] = useState(0);
  const [communicationComment, setCommunicationComment] = useState("");
  const [totalPerformanceScore, setTotalPerformanceScore] = useState(0);
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();
  // const {id} = useParam()
  const [data, setData] = useState([]);

  React.useEffect(() => {
    setLoading(true);
    sp.web.lists
      .getByTitle("PerformanceFactorEvaluation")
      .items.getById(1)
      .get()
      .then((res) => {
        setData(res[0]);
        setLoading(false);
        setWorkHabitRating(res.workHabitRating);
        setWorkHabitComment(res.workHabitComment);
        setCommunicationRating(res.communicatonRating);
        setCommunicationComment(res.communicationComment);
        setTotalPerformanceScore(res.totalPerformanceScore);
        console.log(res);
      });
  }, []);

  const nextHandler = (e) => {
    history.push("/behavioral/section1");
  };

  return (
    <>
      <Header title="Performance Factor" />
      {loading ? <Spinner /> : null}
      <div className={styles.evaluation__section2__container}>
        <div className={styles.evaluation__section}>
          <Card header="Work Habits">
            <ul>
              <li>
                To what extent does the employee display a positive cooperative
                attitude towards work, assignments and requirements?
              </li>
              <li>
                Consider compliance with established work rules and
                organizational policies
              </li>
            </ul>
          </Card>

          <div className={styles.section1__ratings}>
            <Select
              value={workHabitRating}
              onChange={(e: any) => {
                setWorkHabitRating(e.target.value);
              }}
              title="Rating"
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Rater's comment</h2>
            <TextArea
              readOnly={true}
              onChange={(e: any) => {
                setWorkHabitComment(e.target.value);
              }}
              value={workHabitComment}
            />
          </div>
        </div>
        <div className={styles.evaluation__section}>
          <Card header="Communication">
            <ul>
              <li>Consider job related effectiveness in dealing with others</li>
              <li>
                Does the employee express ideas clearly both orally and in
                writting,listen well and respond appropriately
              </li>
            </ul>
            \
          </Card>
          <div className={styles.section1__ratings}>
            <Select
              onChange={(e) => {
                localStorage.setItem("communicationRating", e.target.value);
                setCommunicationRating(e.target.value);
              }}
              title="Rating"
              value={communicationRating}
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Rater's comment</h2>

            <TextArea
              readOnly={true}
              onChange={(e) => {
                setCommunicationComment(e.target.value);
              }}
              value={communicationComment}
            />
          </div>
          <div className={styles.evaluation__section}>
            <Card header="Total Performance Score">
              <input
                className={styles.score__input}
                title="Total Performance Scores"
                style={{ backgroundColor: "white" }}
                value={totalPerformanceScore}
                type="text"
                readOnly
              />
            </Card>
          </div>
        </div>
        <div className={styles.mtn__btnContaainer2}>
          <div>
            <Link
              to="/behavioral/section2"
              className="mtn__btn mtn__blackOutline"
              type="button"
            >
              Back
            </Link>
          </div>
          <div>
            <button
              className="mtn__btn mtn__black"
              type="button"
              onClick={nextHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default workHabit;
