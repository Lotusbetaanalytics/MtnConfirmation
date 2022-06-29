import * as React from "react";
import { useState } from "react";
import { useHistory,Link } from "react-router-dom";
import { Header, Select,Helpers,TextArea, Card } from "../../../Containers";
import { performanceEvaluationContext } from "../../../Context/performanceContext";
import { RaterContext } from "../../../Context/RaterContext";
import styles from "./performance.module.scss";

import { sp } from "@pnp/sp";
import swal from "sweetalert";

const workHabit = () => {
  
  const [showSubmitButton, setShowSubmitButton] = React.useState(true);
 
  const [loading, setLoading] = React.useState(false);
  const history = useHistory()
  const [workMsg,setWorkMsg] = useState(false)
  const [knowlegdeMsg,setknowlegdeMsg] = useState(false)
  const { rater, raterEmail, date } =
  React.useContext(RaterContext);
 
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
    workHabitRating,
    setWorkHabitRating,
    workHabitComment,
    setWorkHabitComment,
    communicationRating,
    setCommunicationRating,
    communicationComment,
    setCommunicationComment,
    totalPerformanceScore,
    setTotalPerformanceScore,
  } = React.useContext(performanceEvaluationContext);
const scoreHandler =()=>{
  const total =
                  Number(workHabitRating) +
                  Number(knowlegdeRating) +
                  Number(workQualityRating) +
                  Number(workQualityRatingtwo) +
                  Number(communicationRating)
                setTotalPerformanceScore(total);
                setShowSubmitButton(false);
}

React.useEffect(() => {
  sp.web.lists
    .getByTitle("PerformanceFactorEvaluation")
    .items.get()
    .then((item) => {
      console.log(item);
    })
    .catch((error) => {});
}, []);

const submitHandler = (e) => {
  e.preventDefault();
  if (workHabitComment.length < 60) {
    setknowlegdeMsg(true)
  } 
  if (communicationComment.length < 60) {
    setWorkMsg(true)
  } else {
  setLoading(true);
 
 
  sp.web.lists
    .getByTitle("PerformanceFactorEvaluation")
    .items.add({
      employeeID: "",
    RaterName: rater,
    RaterEmail: raterEmail,
    RatingDate: date,
    KnowlegdeRating: knowlegdeRating,
    KnowlegdeComment: knowlegdeComment,
    workQualityRating: workQualityRating,
    workQualityComment: workQualityComment,
    workQualityRatingtwo: workQualityRatingtwo,
    workQualityCommentTwo: workQualityCommenttwo,
    workHabitRating: workHabitRating,
    workHabitComment: workHabitComment,
    communicatonRating: communicationRating,
    communicationComment: communicationComment,
    totalPerformanceScore: totalPerformanceScore
    })
    .then((item) => {
      setLoading(false);
      setKnowlegdeRating(0)
     setknowlegdeComment("");
     setWorkQualityComment("");
      setWorkQualityCommenttwo("");
      setWorkHabitComment("");
      setCommunicationComment("");
      setWorkQualityRating(0);
      setWorkQualityRatingtwo(0);
      setWorkHabitRating(0);
      setCommunicationRating(0);
      setTotalPerformanceScore(0);


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
  }
};

  return (
    <>
      <Header title="Performance Factor" />
      <div className={styles.evaluation__section2__container}>
        <div className={styles.evaluation__section}>
          
            <Card header= "Work Habits">
              <ul>
                <li>
                  To what extent does the employee display a positive
                  cooperative attitude towards work, assignments and requirements?
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
            onChange={(e:any) => {
            
            setWorkHabitRating(e.target.value)}
            }
            title="Rating"
           
              options={Helpers.rating}
         
          />
        </div>
        <div className={styles.section1__comments}>
          <h2>
            Rater's comment
          </h2>
          <TextArea
            onChange={(e:any) => {
                setWorkHabitComment(e.target.value)}
            } 
            value={workHabitComment}
          />
           {knowlegdeMsg ? (
              <span>Your comment should be at least 60 characters </span>
            ) : null}
        </div>
        </div>
        <div className={styles.evaluation__section}>
          <Card header="Communication">
              <ul>
                <li>
                  Consider job related effectiveness in dealing with others
                </li>
                <li>
                  Does the employee express ideas clearly both orally and in
                  writting,listen well and respond appropriately
                </li>
              </ul>
      \
          </Card>
        <div className={styles.section1__ratings}>
          <Select
            onChange={(e) =>{
                localStorage.setItem("communicationRating",e.target.value)
                setCommunicationRating(e.target.value)}
            } 
            title="Rating"
            value={communicationRating}
            
              options={Helpers.rating}
          />
        </div>
        <div className={styles.section1__comments}>
          <h2>Rater's comment</h2>
          
          <TextArea
            onChange={(e) => {
               
                setCommunicationComment(e.target.value)}
            } 
            value={communicationComment}
          />
          {workMsg ? (
              <span>Your comment should be at least 60 characters </span>
            ) : null}
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
        {showSubmitButton ? (
            <button
            className="mtn__btn mtn__black"
            type="button"
            
            onClick={scoreHandler}
          >
            Calculate Performance
          </button>
        ):
        ( <button
          className="mtn__btn mtn__black"
            type="button"
            onClick={submitHandler}
          >
            {loading ? "Loading..." : "Submit"}
           
          </button>)}
        </div>
      </div>
      </div>
    </>
  );
};

export default workHabit;
