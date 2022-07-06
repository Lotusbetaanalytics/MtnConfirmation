import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Header,
  Card,
  Select,
  TextArea,
  Helpers,
} from "../../../../Containers";
import { BehavioralContext } from "../../../../Context/BehavioralContext";
import { sp } from "@pnp/sp";
import styles from "./section3.module.scss";
import { EmployeeContext } from "../../../../Context/EmployeeContext";

const GetBehavioralSection3Rating = () => {
  const {
    punctualityRating,
    setPunctualityRating,
    punctualityComment,
    setPunctualityComment,
    queryComment,
    setQueryComment,
    queryRating: queryResponse,
    setQueryRating: setQueryResponse,
    behavioralEvaluationScore: performanceScore,
    setBehavioralEvaluationScore: setPerformanceScore,
    disciplinaryRating: disciplinaryResponse,
    setDisciplinaryRating: setDisciplinaryResponse,
  } = React.useContext(BehavioralContext);

  const [showMsg, setShowMsg] = React.useState(false);

  const { id } = React.useContext(EmployeeContext);

  const history = useHistory();

  const nextHandler = () => {
    history.push("/view-supervisory/section1");
  };

  React.useEffect(() => {
    if (!id) {
      history.push("/pendingrequests");
      return;
    }
    sp.web.lists
      .getByTitle("BehavioralTraitsEvaluation")
      .items.filter(`EmployeeID eq '${id}'`)
      .get()
      .then((response) => {
        if (response.length > 0) {
          setPunctualityRating(response[0].Punctuality);
          setPunctualityComment(response[0].PuctualityComment);
          setQueryResponse(response[0].QueryRating);
          setQueryComment(response[0].DisciplinaryAndQueryComment);
          setDisciplinaryResponse(response[0].Disciplinary);
          setPerformanceScore(response[0].Total);
        }
      });
  }, []);

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
            <Select
              onChange={(e: any) => {
                setPunctualityRating(e.target.value);
              }}
              title="Ratings"
              readOnly={true}
              value={punctualityRating}
              options={Helpers.rating}
              required={true}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              readOnly={true}
              value={punctualityComment}
              onChange={(e: any) => {
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
              <div className={styles.radio_input}>
                <input
                  type="radio"
                  disabled={true}
                  name="confirm"
                  onChange={(e) => {
                    setQueryResponse(e.target.value);
                  }}
                  value="Yes"
                  checked={queryResponse === "Yes"}
                  // @ts-ignore
                  name="query"
                />
                <label>Yes</label>
              </div>
              <div className={styles.radio_input}>
                <input
                  type="radio"
                  disabled={true}
                  name="confirm"
                  onChange={(e) => {
                    setQueryResponse(e.target.value);
                  }}
                  value="No"
                  checked={queryResponse === "No"}
                  // @ts-ignore
                  name="query"
                />
                <label>No</label>
              </div>
            </div>
            <div className={styles.section1__input}>
              <div className={styles.radio_input}>
                <input
                  type="radio"
                  disabled={true}
                  name="disciplinary"
                  onChange={(e) => {
                    setDisciplinaryResponse(e.target.value);
                  }}
                  value="Yes"
                  checked={disciplinaryResponse === "Yes"}
                  // @ts-ignore
                  name="disciplinary"
                  required
                />
                <label>Yes</label>
              </div>
              <div className={styles.radio_input}>
                <input
                  type="radio"
                  disabled={true}
                  name="disciplinary"
                  onChange={(e) => {
                    setDisciplinaryResponse(e.target.value);
                  }}
                  value="No"
                  checked={disciplinaryResponse === "No"}
                  // @ts-ignore
                  name="disciplinary"
                  required
                />
                <label>No</label>
              </div>
            </div>
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              readOnly={true}
              value={queryComment}
              onChange={(e: any) => {
                setQueryComment(e.target.value);
              }}
              required={true}
            />
          </div>
        </div>
        <div className={`${styles.evaluation__section__button} `}>
          <div className="mtn__btnContaainer">
            <div>
              <Link
                to="/view-behavioral/section2"
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
                onClick={nextHandler}
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

export default GetBehavioralSection3Rating;
