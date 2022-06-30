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
import swal from "sweetalert";
import { RaterContext } from "../../../../Context/RaterContext";
import { EmployeeContext } from "../../../../Context/EmployeeContext";
import { performanceEvaluationContext } from "../../../../Context/performanceContext";
import { BehavioralContext1 } from "../../../../Context/behavioralContext1";
const Section3 = () => {
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
    judgementRating,
    judgementComment,
    setJudgementRating,
    setJudgementComment,
    attendanceRating,
    setAttendanceRating,
    attendanceComment,
    setAttendanceComment,
    adaptRating,
    setAdaptRating,
    adaptComment,
    setAdaptComment,
  } = React.useContext(BehavioralContext);

  const { rater, raterEmail, date } = React.useContext(RaterContext);
  const { totalPerformanceScore } = React.useContext(
    performanceEvaluationContext
  );
  const {
    coperationRating,
    dependabilityRating,
    initiativeRating,
    setInitiativeComment,
    setCoperationRating,
    setDependabilityRating,
    setInitiativeRating,
    setDependabilityComment,
    setCoperationComment,
    dependabilityComment,
    coperationComment,
    initiativeComment,
  } = React.useContext(BehavioralContext1);

  const [showMsg, setShowMsg] = React.useState(false);
  const [showSubmitButton, setShowSubmitButton] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const { id } = React.useContext(EmployeeContext);

  const history = useHistory();

  React.useEffect(() => {
    sp.web.lists
      .getByTitle("BehavioralTraitsEvaluation")
      .items.get()
      .then((items) => {
        console.log(items);
      });
  }, []);

  const submitHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      EmployeeID: id,
      RaterEmail: raterEmail,
      RatingDate: date,
      RaterName: rater,
      Adaptability: adaptRating,
      AdaptComment: adaptComment,
      Judgement: judgementRating,
      JudgementComment: judgementComment,
      Attendance: attendanceRating,
      AttendanceComment: attendanceComment,
      Punctuality: punctualityRating,
      PuctualityComment: punctualityComment,
      QueryRating: queryResponse,
      Disciplinary: disciplinaryResponse,
      DisciplinaryAndQueryComment: queryComment,
      Dependability: dependabilityRating,
      DependabilityComment: dependabilityComment,
      Initiative: initiativeRating,
      InitiativeComment: initiativeComment,
      Co_x002d_operation: coperationRating,
      CooperationComment: coperationComment,
      Total: performanceScore,
    };
    sp.web.lists
      .getByTitle("BehavioralTraitsEvaluation")
      .items.add(data)
      .then(() => {
        setLoading(false);
        setAdaptComment("");
        setAdaptRating(0);
        setAttendanceComment("");
        setAttendanceRating(0);
        setDisciplinaryResponse("");
        setJudgementRating(0);
        setJudgementComment("");
        setPunctualityComment("");
        setPunctualityRating(0);
        setQueryComment("");
        setQueryResponse("");
        setCoperationComment("");
        setCoperationRating(0);
        setDependabilityComment("");
        setDependabilityRating(0);
        setInitiativeComment("");
        setInitiativeRating(0);
        swal({
          title: "Success",
          text: "Evaluation Submitted Successfully!",
          icon: "success",
        }).then((ok) => {
          if (ok) {
            history.push("/supervisory/section1");
          }
        });
      })
      .catch((error) => {
        setLoading(false);
        swal(
          "Error Occured",
          "An error occured while submitting your data!",
          "error"
        );
        console.log(error);
      });
  };

  return (
    <>
      <Header title="Behavioural Traits Evaluation" />
      <form
        className={styles.evaluation__section2__container}
        onSubmit={submitHandler}
      >
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
                setPunctualityRating(e.target.value);
              }}
              title="Ratings"
              value={punctualityRating}
              options={Helpers.rating}
              required={true}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
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
                  name="confirm"
                  onChange={(e) => {
                    setQueryResponse(e.target.value);
                  }}
                  value="Yes"
                  // @ts-ignore
                  name="query"
                  required
                />
                <label>Yes</label>
              </div>
              <div className={styles.radio_input}>
                <input
                  type="radio"
                  name="confirm"
                  onChange={(e) => {
                    setQueryResponse(e.target.value);
                  }}
                  value="No"
                  // @ts-ignore
                  name="query"
                  required
                />
                <label>No</label>
              </div>
            </div>
            <div className={styles.section1__input}>
              <div className={styles.radio_input}>
                <input
                  type="radio"
                  name="disciplinary"
                  onChange={(e) => {
                    setDisciplinaryResponse(e.target.value);
                  }}
                  value="Yes"
                  // @ts-ignore
                  name="disciplinary"
                  required
                />
                <label>Yes</label>
              </div>
              <div className={styles.radio_input}>
                <input
                  type="radio"
                  name="disciplinary"
                  onChange={(e) => {
                    setDisciplinaryResponse(e.target.value);
                  }}
                  value="No"
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
                to="/behavioral/section2"
                className="mtn__btn mtn__blackOutline"
                type="button"
              >
                Previous
              </Link>
            </div>
            <div>
              {showSubmitButton ? (
                <button
                  className="mtn__btn mtn__black"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              ) : (
                <div
                  className="mtn__btn mtn__black"
                  onClick={() => {
                    const total =
                      Number(punctualityRating) +
                      Number(adaptRating) +
                      Number(judgementRating) +
                      Number(attendanceRating) +
                      Number(initiativeRating) +
                      Number(dependabilityRating) +
                      Number(coperationRating) +
                      Number(totalPerformanceScore);
                    setPerformanceScore(total);
                    setShowSubmitButton(true);
                  }}
                >
                  Calculate Performance
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Section3;
