import * as React from "react";
import { Header, Card, Select, TextArea, Input } from "../../../../Containers";

import styles from "./section3.module.scss";
const Section3 = () => {
  return (
    <>
      <Header title="Behavioural Traits Evaluation" />
      <div className={styles.evaluation__section2__container}>
        <div className={`${styles.evaluation__section} `}>
          <Card header="Punctuality">
            <ul>
              <li>
                Consider work arrival and departure in accordance with
                Department and MTN policy
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
            <TextArea onChange />
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
            <TextArea onChange />
          </div>
        </div>
        <div className={`${styles.evaluation__section__button} `}>
          <div className="mtn__btnContaainer">
            <div>
              <button className="mtn__btn mtn__blackOutline" type="button">
                Previous
              </button>
            </div>
            <div>
              <button className="mtn__btn mtn__black" type="button">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
