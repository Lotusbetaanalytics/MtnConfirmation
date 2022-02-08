import * as React from "react";
import { Header, Card, Select, TextArea } from "../../../../Containers";

import styles from "./section1.module.scss";
const Section2 = () => {
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
            <TextArea onChange />
          </div>
        </div>
        <div className={`${styles.evaluation__section} `}>
          <Card header="Delegation">
            <ul>
              <li>
                Consider the ease with which the employee adjust to any change
                in duties, procedures, supervisors or the work environment.
              </li>
              <li>
                How well does the employee accept new ideas and approaches to
                work, responds appropriately to constructive criticisms and
                suggestions for work improvements?
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
          <Card header="Administration">
            <ul>
              <li>
                Consider the ease with which the employee adjust to any change
                in duties, procedures, supervisors or the work environment.
              </li>
              <li>
                How well does the employee accept new ideas and approaches to
                work, responds appropriately to constructive criticisms and
                suggestions for work improvements?
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

export default Section2;
