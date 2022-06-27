import * as React from "react";
import { sp } from "@pnp/sp";
import {
  Header,
  Card,
  Select,
  TextArea,
  Helpers,
} from "../../../../Containers";
import { useHistory } from "react-router-dom";
import styles from "./section2.module.scss";
import { TextAreaSmall } from "../../../../Containers/TextArea";
import { SupervisoryEvaluationContext } from "../../../../Context/SupervisoryContext";
import { RaterContext } from "../../../../Context/RaterContext";
import swal from "sweetalert";
const Section3 = () => {
  const history = useHistory();
  const prevHandler = () => {
    history.push("/supervisory/section1");
  };

  const [showSubmitButton, setShowSubmitButton] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const {
    leadershipRating,
    administrationRating,
    delegationRating,
    peopleManagementComment,
    setPeopleManagementComment,
    peopleManagementRating,
    setPeopleManagementRating,
    planningComment,
    setPlanningComment,
    planningRating,
    setPlanningRating,
    delegationComment,
    leadershipComment,
    administrationComment,
    setSupervisoryEvaluationScore: setSupervisorScore,
    supervisoryEvaluationScore: supervisorScore,
  } = React.useContext(SupervisoryEvaluationContext);

  const { raterFinalComments, setRaterFinalComments, rater, raterEmail, date } =
    React.useContext(RaterContext);

  const scoreHandler = () => {
    const total =
      Number(leadershipRating) +
      Number(administrationRating) +
      Number(delegationRating) +
      Number(peopleManagementRating) +
      Number(planningRating);
    setSupervisorScore(total);
    setShowSubmitButton(true);
  };

  React.useEffect(() => {
    sp.web.lists
      .getByTitle("SupervisoryEvaluation")
      .items.get()
      .then((item) => {
        console.log(item);
      })
      .catch((error) => {});
  }, []);

  const submitHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    const data = {
      EmployeeID: "",
      RaterName: rater,
      RaterEmail: raterEmail,
      RatingDate: date,
      LeadershipRating: leadershipRating,
      AdministrationRating: administrationRating,
      DelegationRating: delegationRating,
      PeopleManagementRating: peopleManagementRating,
      PlanningRating: planningRating,
      PeopleManagementComment: peopleManagementComment,
      PlanningComment: planningComment,
      DelegationComment: delegationComment,
      LeadershipComment: leadershipComment,
      AdministrationComment: administrationComment,
      RaterFinalComment: raterFinalComments,
      TotalRatingScore: supervisorScore,
    };

    sp.web.lists
      .getByTitle("SupervisoryEvaluation")
      .items.add(data)
      .then((item) => {
        setLoading(false);
        swal({
          title: "Success",
          text: "Evaluation Submitted Successfully",
          icon: "success",
        }).then((ok) => {
          if (ok) {
            history.push("/");
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
      <Header title="Supervisory Evaluation" />
      <form
        className={styles.evaluation__section2__container}
        onSubmit={submitHandler}
      >
        <div className={`${styles.evaluation__section} `}>
          <Card header="People Management">
            <ul>
              <li>Consider how well the employee serves as a role model</li>
              <li>
                Provides guidance and opportunities to staff for their
                development and advancement
              </li>
              <li>Resolves work related employee problems </li>
              <li>
                Assists subordinates in accomplishing their work related
                objectives
              </li>
              <li>
                Does the employee communicate well with subordinates in a clear
                concise, accurate and timely manner and make useful suggestions?
              </li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            {/* <h2>Ratings</h2> */}
            <Select
              onChange={(e: any) => {
                setPeopleManagementRating(e.target.value);
              }}
              required={true}
              title="Ratings"
              value={peopleManagementRating}
              options={Helpers.rating}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              value={peopleManagementComment}
              onChange={(e: any) => {
                setPeopleManagementComment(e.target.value);
              }}
              required={true}
            />
          </div>
        </div>
        <div className={`${styles.evaluation__section} `}>
          <Card header="Planning and Organising">
            <ul>
              <li>Consider how well the employee plans his/her work</li>
              <li>
                Coordinates with others and establishes appropriate priorities
              </li>
              <li>Anticipates future needs </li>
              <li>Carries out assignments effectively. </li>
            </ul>
          </Card>
          <div className={styles.section1__ratings}>
            {/* <h2>Ratings</h2> */}
            <Select
              onChange={(e: any) => {
                setPlanningRating(e.target.value);
              }}
              title="Ratings"
              value={planningRating}
              options={Helpers.rating}
              required={true}
            />
          </div>
          <div className={styles.section1__comments}>
            <h2>Comments</h2>
            <TextArea
              value={planningComment}
              onChange={(e: any) => {
                setPlanningComment(e.target.value);
              }}
              required={true}
            />
          </div>
          <div className={`${styles.evaluation__section} `}>
            <Card header="Total Performance Score">
              <input
                className={styles.score__input}
                type="text"
                style={{ backgroundColor: "white" }}
                readOnly
                value={supervisorScore}
                required
              />
            </Card>
          </div>
          <div></div>
          <div className={styles.section1__comments}>
            <h2>Rater's final comment</h2>
            <TextAreaSmall
              value={raterFinalComments}
              rows={5}
              onChange={(e: any) => {
                setRaterFinalComments(e.target.value);
              }}
              required={true}
            />
          </div>
          <div></div>
          <div></div>
          <div className={styles.section1__comments}>
            <h2>Next Actor</h2>
            <TextAreaSmall
              value={planningComment}
              onChange={(e: any) => {
                setPlanningComment(e.target.value);
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
              {showSubmitButton ? (
                <button
                  className="mtn__btn mtn__black"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              ) : (
                <div className="mtn__btn mtn__black" onClick={scoreHandler}>
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
