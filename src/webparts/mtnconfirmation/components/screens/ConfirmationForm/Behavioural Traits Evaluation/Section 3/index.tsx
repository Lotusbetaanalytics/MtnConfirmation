import * as React from "react";
import { Link } from "react-router-dom";
import { Header, Card, Select, TextArea, Input } from "../../../../Containers";

import styles from "./section3.module.scss";
const Section3 = () => {
  const [punctualityRating, setPunctualityRating] = React.useState(
    localStorage.getItem("punctualityRating") || ""
  );
  const [punctualityComment, setPunctualityComment] = React.useState(
    localStorage.getItem("punctualityComment") || ""
  );
  const [queryComment, setQueryComment] = React.useState(
    localStorage.getItem("queryComment") || ""
  );
  const [showMsg, setShowMsg] = React.useState(false);

  const [performanceScore, setPerformanceScore] = React.useState(
    JSON.parse(localStorage.getItem("performanceScore")) || null
  );

  return (
    <>
      <Header title="Behavioural Traits Evaluation" />
      <div className={styles.evaluation__section2__container}>
        <div className={`${styles.evaluation__section} `}>
          <Card header="Punctuality">
            <ul>
              <li>
                Consider work arrivals and departure in accordance with
                Departmental and MTN policy.
              </li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            {/* <h2>Ratings</h2> */}
            <Select
              onChange={(e: any) => {
                localStorage.setItem("punctualityRating", e.target.value);
                setPunctualityRating(e.target.value);
              }}
              title="Ratings"
              value={punctualityRating}
            >
              <option value="select rating">Select Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Select>
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              value={punctualityComment}
              onChange={(e: any) => {
                localStorage.setItem("punctualityComment", e.target.value);
                e.target.value.length <= 60
                  ? setPunctualityComment(e.target.value)
                  : setShowMsg(true);
              }}
            />
            {showMsg ? (
              <span>You can only type 60 characters or less</span>
            ) : null}
          </div>
        </div>
        <div className={`${styles.evaluation__section} `}>
          <Card header="Total Performance Score">
            <input
              className={styles.score__input}
              type="text"
              style={{ backgroundColor: "white" }}
              value={performanceScore}
              readOnly
            />
          </Card>
        </div>
        <div className={`${styles.evaluation__section} `}>
          <div className={styles.disciplinary}>
            <h2>Query/Disciplinary Issues</h2>
            <div>Confirm if employee has received query or warning</div>
            <div>Confirm if employee has any engaging/disciplinary issues</div>
          </div>
          <div className={styles.input__container}>
            <div className={styles.section1__input}>
              <Input
                type="radio"
                onChange={(e) => {}}
                title="Yes"
                value={"Yes"}
              />
              <Input
                type="radio"
                onChange={(e) => {}}
                title="No"
                value={"No"}
              />
            </div>
            <div className={styles.section1__input}>
              <Input
                type="radio"
                onChange={(e) => {}}
                title="Yes"
                value={"Yes"}
              />
              <Input
                type="radio"
                onChange={(e) => {}}
                title="No"
                value={"No"}
              />
            </div>
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              value={queryComment}
              onChange={(e: any) => {
                localStorage.setItem("queryComment", e.target.value);
                setQueryComment(e.target.value);
              }}
            />
          </div>
        </div>
        <div className={`${styles.evaluation__section__button} `}>
          <div className="mtn__btnContaainer">
            <div>
              <Link
                to="/behavioral/section2"
                className="mtn__btn mtn__blackOutline"
                type="button"
              >
                Previous
              </Link>
            </div>
            <div>
              <button
                className="mtn__btn mtn__black"
                type="button"
                onClick={() => {
                  const total =
                    Number(localStorage.getItem("punctualityRating")) +
                    Number(localStorage.getItem("queryRating")) +
                    Number(localStorage.getItem("adaptRating")) +
                    Number(localStorage.getItem("attendanceRating")) +
                    Number(localStorage.getItem("judgementRating"));
                  setPerformanceScore(total);

                  localStorage.setItem(
                    "performanceScore",
                    JSON.stringify(total)
                  );
                }}
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
